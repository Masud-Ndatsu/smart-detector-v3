import React from "react";
import Navbar from "../Navbar/Navbar";
import ContactContent from "../layouts/ContactContent";
import "../../ContactStyle.css"


function Contact() {
  return (
    <div>
      <Navbar />

      <main className="mt-28">
        <ContactContent />
      </main>
    </div>
  );
}

export default Contact;
