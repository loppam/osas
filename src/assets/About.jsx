import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="margin_content padding">
        <h2>About Me</h2>
        <div className="upper">
          <div className="left">
            {/* <h3>OSAS</h3> */}
            {/* <p>
              Hi, my name is Virtuous Oselumese Irianele (a flex right?), The
              egbon adugbo, Community lead and more.
            </p> */}
            <p id="stylep">
              <p>
                Osas is a creative story teller with a growing repute in the
                media and communications industry. She uses her platforms to
                share relatable and enjoyable content for young people. Osas is
                passionate about the wellbeing and personal development of her
                audience, hence the need to be a community manager.
              </p>
              <p>
                Over the past year, she has trained young people to be
                disciplined with whatever they do. She has hosted saving
                challenges for people to build discipline, hosted community
                events so members of the community come together to network and
                unwind, built a community of readers and people interested in
                bettering every part of their lives.
              </p>
              <p>
                Osas is also a brand and content strategist with a few brands in
                her bag. She is also an influencer marketing manager and she
                helps connect brands with the right influencers. Osas’
                authenticity and delivery is topnotch and she has been able to
                work with brands like coca- cola, Malta guinness, Molped,
                BayIce, Bankzhomes, Piggyvest amongst others.
              </p>
            </p>
            <div className="table">
              <div className="table1">
                <p>
                  Birthday:
                  <span> May 1</span>
                </p>
                <p>
                  Group:
                  <Link to="https://www.instagram.com/hypesquadng/">
                    HypeSquad NG
                  </Link>
                </p>
                <p>
                  Mail:
                  <Link to="mailto:osasirianele@gmail.com">
                    osasirianele@gmail.com
                  </Link>
                </p>
              </div>
              <div className="table2">
                <p>
                  Instagram:
                  <Link to="https://www.instagram.com/virtuousi/">
                    Virtuousi
                  </Link>
                </p>
                <p>
                  Twitter:
                  <Link to="https://twitter.com/virtuousii">Virtuousii</Link>
                </p>
                <p>
                  LinkedIn:
                  <Link to="https://linkedin.com/in/virtuous-irianele">
                    LinkedIn
                  </Link>
                </p>
                {/* <p>
                  What I do:
                  <span> A lot😁</span>
                </p> */}
              </div>
            </div>
          </div>
          {/* <div className="right"> */}
          {/* <div className="rtext">Hype Squad NG</div> */}

          {/* <img src="/saa.png" alt="" /> */}
          {/* </div> */}
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
              <img src="/osas3.png" alt="" />
            </li>
            <li>
              <img src="/osas4.png" alt="" />
            </li>
            <li>
              <img src="/osas2.png" alt="" />
            </li>
            <li>
              <img src="/osas5.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
