import React, { useState, useEffect } from "react";
import "./Contact.css";

function Contact({ menu, changeMenu }) {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    changeMenu(2);
  }, [changeMenu]);

  useEffect(() => {
    if (window.location.search.includes(success)) {
      setSuccess(true);
    }
  }, [success]);

  return (
    <div className="contact">
      <form
        name="contact"
        method="POST"
        action="/contact/?success=true"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="input__form">
          <label htmlFor="name">
            <span>Name*</span>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </label>
        </div>

        <div className="input__form">
          <label htmlFor="email">
            <span>Email*</span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </label>
        </div>

        <div className="input__form">
          <label>
            <span>Your Message*</span>
            <textarea
              type="message"
              name="name"
              placeholder="Leave a Message..."
              required
              cols={2}
            />
          </label>
        </div>

        <button className="contact__btn" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
