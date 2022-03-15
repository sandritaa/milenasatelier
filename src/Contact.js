// import { Title } from "@material-ui/icons";
import React, { useRef } from "react";

function Contact() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = {
  //     firstName: firstNameRef.current.value,
  //     lastName: lastNameRef.current.value,
  //     email: emailRef.current.value,
  //     message: messageRef.current.value,
  //   };
  //   alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎");
  // };

  function myFunction() {
    alert("message successfully sent");
    window.location.reload();
  }

  return (
    <body>
      <nav className="contactContainer">
        <div className="container">
          <div className="headerContact">
            <h2>contact me</h2>
          </div>

          <div className="contactForm" id="ContactForm">
            <div className="container" id="contactContainer">
              <form
                action="https://formsubmit.co/axel-porch0s@icloud.com"
                method="POST"
                onSubmit={myFunction}
                // onSubmit={handleSubmit}
                className="contactForm"
              >
                {/* <div className="name"> */}

                <div id="firstNameBox">
                  <label for="firstName" id="nameLabel">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstNameInput"
                    name="firstName"
                    className="firstNameInput"
                    ref={firstNameRef}
                    tabindex="1"
                    required
                  />
                </div>

                <div id="lastNameBox">
                  <label for="lastName">Last name</label>
                  <input
                    type="text"
                    id="lastNameInput"
                    className="lastNameInput"
                    ref={lastNameRef}
                    tabindex="2"
                    required
                  />
                </div>
                <div id="emailBox">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="emailInput"
                    className="emailInput"
                    placeholder="example@corp.com"
                    ref={emailRef}
                    tabindex="3"
                    required
                  />
                </div>
                <div id="textBBox">
                  <div>
                    <label for="message">Message</label>{" "}
                  </div>
                  <textarea
                    placeholder="Start typing..."
                    className="messageInput"
                    name="message"
                    ref={messageRef}
                    required
                  ></textarea>
                </div>
                <div className="returnBox">
                  <input
                    type="hidden"
                    name="_next"
                    value="https://sandritaa.github.io/milenasatelier/index.html"
                  />
                </div>
                <div className="buttonBox">
                  <button type="submit" className="send" onclick="myFunction()">
                    Send
                  </button>
                </div>
                {/* </form>
              <div className="invisibleElement"></div> */}
                {/* </div> */}
                {/* </div>  */}
              </form>
            </div>
          </div>
        </div>
      </nav>
    </body>
  );
}

export default Contact;
