import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="contact-heading">Contact Us</h1>
      <style>
        {`
          .contact-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 10px;
          }

          .contact-element {
            background-color: #f2f2f2;
            border-radius: 5px;
            padding: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .contact-image {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin-bottom: 10px;
          }

          .contact-name-position {
            text-align: center;
          }

          .contact-name-position h3 {
            font-size: 18px;
            margin-bottom: 5px;
          }

          .contact-name-position p {
            font-size: 14px;
            color: #666;
          }

          .contact-info {
            text-align: center;
            margin-top: 10px;
          }

          .contact-info p {
            font-size: 14px;
            color: #666;
          }

          .contact-heading {
            text-align: center;
            color: #007bff;
          }

          @media (max-width: 768px) {
            .contact-container {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
      <div className="contact-container">
        <div className="contact-element">
          <img
            src="https://i.ibb.co/8QKQ63w/chairperson.png"
            alt="chairperson"
            className="contact-image"
          />
          <div className="contact-name-position">
            <h3>Ishmael Nyakoni</h3>
            <p>Chairperson</p>
          </div>
          <div className="contact-info">
            <p>kibetsuleiman@gmail.com</p>
            <p>+254720000000</p>
          </div>
        </div>

        <div className="contact-element">
          <img
            src="https://i.ibb.co/BgqZQZ4/coordinator.png"
            alt="coordinator"
            className="contact-image"
          />
          <div className="contact-name-position">
            <h3>John Doe</h3>
            <p>Coordinator</p>
          </div>
          <div className="contact-info">
            <p>johndoe@gmail.com</p>
            <p>+254720000000</p>
          </div>
        </div>

        <div className="contact-element">
          <img
            src="https://i.ibb.co/NhK62YZ/communication.png"
            alt="communication"
            className="contact-image"
          />
          <div className="contact-name-position">
            <h3>Jane Smith</h3>
            <p>Communication Officer</p>
          </div>
          <div className="contact-info">
            <p>janesmith@gmail.com</p>
            <p>+254720000000</p>
          </div>
        </div>

        <div className="contact-element">
          <img
            src="https://i.ibb.co/QYZL7hc/secretery.png"
            alt="secretery"
            className="contact-image"
          />
          <div className="contact-name-position">
            <h3>Mary Johnson</h3>
            <p>Secretary General</p>
          </div>
          <div className="contact-info">
            <p>maryjohnson@gmail.com</p>
            <p>+254720000000</p>
          </div>
        </div>

        <div className="contact-element">
          <img
            src="https://i.ibb.co/xQP8QQ9/system.png"
            alt="system"
            className="contact-image"
          />
          <div className="contact-name-position">
            <h3>David Wilson</h3>
            <p>System and Assistant System Admin</p>
          </div>
          <div className="contact-info">
            <p>davidwilson@gmail.com</p>
            <p>+254720000000</p>
          </div>
        </div>

        <div className="contact-element">
          <img
            src="https://i.ibb.co/94QHXPn/support.png"
            alt="support"
            className="contact-image"
          />
          <div className="contact-name-position">
            <h3>Emily Brown</h3>
            <p>Support Staff</p>
          </div>
          <div className="contact-info">
            <p>emilybrown@gmail.com</p>
            <p>+254720000000</p>
          </div>
        </div>
      </div>
      <h2>Contact Page</h2>
    </div>
  );
};

export default Contact;
