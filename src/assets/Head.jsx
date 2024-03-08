import React from "react";
import Atropos from "atropos/react";
import { ReactTyped } from "react-typed";
const Head = () => {
  return (
    <div className="head">
      <div className="margin_content">
        <div className="flex">
          <div className="text">
            <h3>
              Hi it's me, <span>Osasbaby...</span>
            </h3>
            <div className="text_span">
              I am{" "}
              <ReactTyped
                strings={[
                  "a Brand and content strategist.",
                  "a Community manager.",
                  "an Influencer marketing strategist",
                  "a Talent manager",
                  "a Content creator",
                ]}
                typeSpeed={50}
                backSpeed={40}
                loop
              />
            </div>
            <p>Welcome to my page.</p>
          </div>
          <Atropos activeOffset={40} shadowScale={1.05}>
            <img
              src="/bg.png"
              data-atropos-offset="-5"
              data-atropos-opacity="1;0.6"
              alt=""
            />
          </Atropos>
        </div>
      </div>
    </div>
  );
};

export default Head;
