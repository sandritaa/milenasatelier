import { Title } from "@material-ui/icons";
import React, { useRef } from "react";

function Contact() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎");
  };

  return (
    <footer className="footer" id="footer">
      <div className="contact" id="Contact">
        <h2 className="sectionTitle" id="contactTitle">
          contact me
        </h2>

        <form onSubmit={handleSubmit} className="contactForm">
          <div className="name">
            <label for="firstName" id="nameLabel">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="firstName"
              ref={firstNameRef}
              tabindex="1"
            />

            <label for="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              className="lastName"
              ref={lastNameRef}
              tabindex="2"
            />
          </div>
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="email"
            placeholder="example@corp.com"
            ref={emailRef}
            tabindex="3"
          />

          <label for="message">Message</label>
          <textarea
            placeholder="Start typing..."
            className="message"
            name="message"
            ref={messageRef}
          ></textarea>
          <button type="submit" className="send">
            Send
          </button>
        </form>

        <div className="invisibleElement"></div>
      </div>
    </footer>
  );
}

export default Contact;
