import React from "react";
import { Link } from "react-router-dom";
import {
  TbCircleDashedNumber1,
  TbCircleDashedNumber2,
  TbCircleDashedNumber3,
  TbCircleDashedNumber4,
  TbCircleDashedNumber5,
  TbCircleDashedNumber6,
  TbCircleDashedNumber7,
} from "react-icons/tb";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="margin_content">
        <h2>Services</h2>
        <div className="column">
          <div className="card">
            <TbCircleDashedNumber1 />
            <h4>Influencer partnerships</h4>
            <p>
              A town hall different from bala blu, blue blu bulaba. broom broom
              broom brooooooooom. Bala blu blue blu bulaba. The farmers will
              make more money.
            </p>
          </div>
          <div className="card">
            <TbCircleDashedNumber2 />
            <h4>Brand strategy</h4>
            <p>
              A town hall different from bala blu, blue blu bulaba. broom broom
              broom brooooooooom. Bala blu blue blu bulaba. The farmers will
              make more money.
            </p>
          </div>
          <div className="card">
            <TbCircleDashedNumber3 />
            <h4>Creative writing</h4>
            <p>
              A town hall different from bala blu, blue blu bulaba. broom broom
              broom brooooooooom. Bala blu blue blu bulaba. The farmers will
              make more money.
            </p>
          </div>
          <div className="card">
            <TbCircleDashedNumber4 />
            <h4>Copywriting</h4>
            <p>
              A town hall different from bala blu, blue blu bulaba. broom broom
              broom brooooooooom. Bala blu blue blu bulaba. The farmers will
              make more money.
            </p>
          </div>
          <div className="card">
            <TbCircleDashedNumber5 />
            <h4>Product collaborations</h4>
            <p>
              A town hall different from bala blu, blue blu bulaba. broom broom
              broom brooooooooom. Bala blu blue blu bulaba. The farmers will
              make more money.
            </p>
          </div>
          <div className="card">
            <TbCircleDashedNumber6 />
            <h4>Brand partnership</h4>
            <p>
              A town hall different from bala blu, blue blu bulaba. broom broom
              broom brooooooooom. Bala blu blue blu bulaba. The farmers will
              make more money.
            </p>
          </div>
          <div className="card">
            <TbCircleDashedNumber7 />
            <h4>Brand ambassadorship.</h4>
            <p>
              A town hall different from bala blu, blue blu bulaba. broom broom
              broom brooooooooom. Bala blu blue blu bulaba. The farmers will
              make more money.
            </p>
          </div>
        </div>
      </div>
      <div className="margin_content">
        <h2>Portfolio</h2>
        <div className="row">
          <div className="card">
            <img src="/piggy.png" alt="" />
            {/* <h4>Piggyvest</h4> */}
            {/* <p>
              A town hall different from bala blu, blue blu bulaba. broom broom
              broom brooooooooom. Bala blu blue blu bulaba. The farmers will
              make more money.
            </p> */}
          </div>
          <div className="card">
            <img src="/coke.png" alt="" />
            {/* <h4>Coca-cola</h4> */}
            {/* <p>
              A town hall different from bala blu, blue blu bulaba. broom broom
              broom brooooooooom. Bala blu blue blu bulaba. The farmers will
              make more money.
            </p> */}
          </div>
          <div className="card">
            <img src="/maltt.jpeg" alt="" />
            {/* <h4>Malta Guiness</h4> */}
            {/* <p>
              A town hall different from bala blu, blue blu bulaba. broom broom
              broom brooooooooom. Bala blu blue blu bulaba. The farmers will
              make more money.
            </p> */}
          </div>
        </div>
      </div>

      <div className="strap">
        <div className="margin_contentt">
          <div className="marquee">
            <span className="strip">
              Bankzhomes Baileys Terracubes KraksTV <span>Captain_Morgan</span>{" "}
              <span>Stanbic_IBTC</span> Filmone <span>Mr_Dowells</span>{" "}
              <span>Powerblack_energy_drink</span> <span>Lipton Icetea</span>{" "}
              Jumia Bolt Indrive KFC
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
