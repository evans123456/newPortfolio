import React from "react";

const AboutContent = () => {
  return (
    <div id="about" className="block">
      <h2>
        <span className="line">A passionate</span>
        <br /> frontend developer and backend developer, data scientist, IT
        consultant.
      </h2>

      <div className="row bg-half-ring-left gutter-width-lg">
        <div className="col align-self-top pl-0">
          <div className="img object-fit">
            <div className="object-fit-cover">
              <img
                src="assets/img/me.jpg"
                alt="wahome gichuki"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="col align-self-center description">
          <h4>I’m Wahome Gichuki</h4>

          <p>
            Hard-working full stack developer with a flair for creating elegant
            solutions in the least amount of time. Currently pursuing a Masters
            in Data Science from the University of Surrey. Experienced and
            specialized in Web development using Django and Reactjs frameworks,
            Postgres, git etc.{" "}
          </p>

          <p>
            As a freelance programmer, ive been able to create websites for
            various clients ranging from churches to event booking platforms and
            construction companies . Looking to leverage my development
            skills/newly formed data science skills to produce seamless and
            profitable software for your company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
