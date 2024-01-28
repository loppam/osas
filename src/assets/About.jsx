import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="margin_content padding">
        <h2>About Me</h2>
        <div className="upper">
          <div className="left">
            <h3>OSAS</h3>
            <p>
              Hi, my name is Virtuous Oselumese Irianele (a flex right?), The
              egbon adugbo, Community lead and more.
            </p>
            <p>
              A results-oriented, enthusiastic and creative Brand Communications
              Strategist and Consultant with effective communication, digital
              and product marketing strategies to drive team and company growth
              in the long run. Over time, I have become invested in being
              value-driven by organising marketing campaigns to ensure that
              brands and users become connected through detailed storytelling. I
              collaborate with clients to develop a social media content
              calendar that defines the engagement needs at required times
              making use of my knowledge of content creation to create engaging
              photos, captions and graphics. SEO/Google Analytics, Product
              Marketing, Brand Storytelling and communication and content
              creation are some of my core strength areas as a Brand
              Communications Strategist.
            </p>
            <div className="table">
              <div className="table1">
                <p>
                  Birthday:
                  <span> May 1</span>
                </p>
                <p>
                  Group:
                  <Link to=""> HypeSquad NG</Link>
                </p>
                <p>
                  Mail:
                  <Link to="mailto:"> osas@gmail.com</Link>
                </p>
                <p>
                  Instagram:
                  <Link to="https://www.instagram.com/virtuousi/"> @osas</Link>
                </p>
              </div>
              <div className="table2">
                <p>
                  Snapchat:
                  <Link> @osas</Link>
                </p>
                <p>
                  TikTok:
                  <Link> @osas</Link>
                </p>
                <p>
                  LinkedIn:
                  <Link> @osas</Link>
                </p>
                <p>
                  What I do:
                  <span> A lot😁</span>
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            {/* <div className="rtext">Hype Squad NG</div> */}

            <img src="/saa.png" alt="" />
          </div>
        </div>
        <div className="lower">
          <h2 className="gallery">Gallery</h2>
          <ul>
            <li>
              <img src="/osas.png" alt="" />
            </li>
            <li>
              <img src="/bg.png" alt="" />
            </li>
            <li>
              <img src="/hs.png" alt="" />
            </li>
            <li>
              <img src="/osas.png" alt="" />
            </li>
            <li>
              <img src="/bg.png" alt="" />
            </li>
            <li>
              <img src="/hs.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
