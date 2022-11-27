import React from "react";

function ResetMessage() {
  return (
    <div>
      <div className="h-[100vh] flex flex-col justify-center items-center bg-slate-100">
        <h1 className="flex text-5xl">Please Check Your email</h1>
        <h1>and click the link to create a new password!!</h1>
        <h3 className="text-2xl">
          Go to{" "}
          <a href="/login" className=" text-teal-900">
            LOGIN
          </a>
        </h3>
      </div>
    </div>
  );
}

export default ResetMessage;
