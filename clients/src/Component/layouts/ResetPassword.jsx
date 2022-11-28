import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const history = useNavigate();
  const params = useParams();

  const [user, setUser] = useState({
    password: "",
  });
  //handle inputs
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };
  //send request
  const sendRequest = async () => {
    const res = await axios
      .put(
        "http://localhost:5000/api/users/resetpassword/" +
          params.userId +
          "/" +
          params.resetToken,
        {
          password: user.password,
        }
      )
      .catch((err) => console.log(err.response));
    console.log(res.data);
    const data = await res.data;
    return data;
  };

  //handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    //http Request
    sendRequest()
      .then(() => history("/login"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col align-middle justify-center h-[90vh]">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 m-auto">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
            Enter your New password
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Create a new password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="new password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
