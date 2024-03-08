import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact">
      <div className="margin_content">
        <h2>Contact Me</h2>
        <div className="contact_flex">
          <div className="contact_left">
            <h4>Let's make magic</h4>
            <p className="contact_par">
              Let’s work together to take your brand to the next level.
            </p>
            <div className="tablee_flex">
              <div className="tablee">
                <p>
                  <AiOutlineMail />
                  <Link to="mailto:osasirianele@gmail.com">Mail</Link>
                </p>
                <p>
                  <FaInstagram />
                  <Link to="https://instagram.com/virtuousi">Instagram</Link>
                </p>
              </div>

              <div className="tablee">
                <p>
                  <FaTwitter />
                  <Link to="https://twitter.com/virtuousii">Twitter</Link>
                </p>
                <p>
                  <FaLinkedin />
                  <Link to="https://linkedin.com/in/virtuous-irianele">
                    LinkedIn
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="contact_right">
            <h4>Get in touch</h4>
            <form action="">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Enter your email" />
              <input type="text" placeholder="Subject" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Your message"
              ></textarea>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
