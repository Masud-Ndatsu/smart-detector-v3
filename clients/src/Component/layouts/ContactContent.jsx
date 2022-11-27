import React from "react";
import "../../ContactStyle.css"

function ContactContent() {
  return (
    <div className="p-5 main-contact-container">
      <h1 className="text-center text-3xl text-white">Contact Us</h1>

      <div className="contact-container">
        <form className="flex flex-col gap-4 w-full">
          <h1 className="text-2xl">Send Message</h1>

          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Full name"
            className="border-b-4 border-black border-t-0 border-l-0 border-r-0 bg-transparent rounded-lg"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="border-b-4 border-black border-t-0 border-l-0 border-r-0 bg-transparent rounded-lg"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            rows="5"
            cols="40"
            className="border-b-4 border-black border-t-0 border-l-0 border-r-0 bg-transparent rounded-lg"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-[3px]"
          >
            Send Message
          </button>
        </form>

        <div className="w-full flex flex-col gap-5">
          <div class="address">
            <h1 className="text-black font-bold font-serif">Address</h1>
            <p>12 Hill Station</p>
          </div>

          <div class="address">
            <h1 className="text-black font-bold font-serif">Phone</h1>
            <p>+232 78-510-786 / +232 80-760-495</p>
          </div>

          <div class="address">
            <h1 className="text-black font-bold font-serif">Email</h1>
            <p>your.smartdtector@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactContent;
