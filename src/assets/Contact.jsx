import React from "react";
import { FaTiktok, FaInstagram, FaSnapchat } from "react-icons/fa";
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
              I am open to dicussing about how to make your brand global. A town
              hall different from bala blu, blue blu bulaba. broom broom broom
              brooooooooom.
            </p>
            <div className="tablee">
              <p>
                <AiOutlineMail /> <Link>@osas</Link>
              </p>
              <p>
                <FaSnapchat /> <Link>@osas</Link>
              </p>
              <p>
                <FaInstagram /> <Link>@osas</Link>
              </p>
              <p>
                <FaTiktok /> <Link>@osas</Link>
              </p>
            </div>
          </div>
          <div className="contact_right">
            <h4>Get in touch</h4>
            <form action="">
              <input type="text" placeholder="Fullname"/>
              <input type="email" placeholder="Enter your email" />
              <input type="text" placeholder="Subject" />
              <textarea name="" id="" cols="30" rows="5" placeholder="Your message"></textarea>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
