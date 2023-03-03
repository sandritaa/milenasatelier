import bioPic from "./portfolioIcons/pic.png";
const Bio = () => {
  return (
    <body className="bioBody">
      <div className="headerBioContainer" id="Bio">
        <h2> bio </h2>
      </div>
      <section className="bioHeader">
        <div className="container" id="bioContainer">
          {/* <div>
            <h2>Bio</h2> */}
          {/* <div id="imgTextContainer"> */}

          <p>
            Creative software developer and product manager with a business
            degree from the Fashion Institute of Technology who has spent almost
            a decade working in sales and product development for high end
            fashion companies in London and New York. While in London, she had
            the opportunity to work alongside many talented teams and experience
            first hand the positive impact of technology on sales and E-commerce
            businesses. Leveraging her creativity and problem solving ability
            she began her journey in software development and hopes to
            contribute to the development of user centric technologies that have
            real impact on the world by continuing to make products come to
            life, but this time, digital.{" "}
          </p>

          <img src={bioPic} alt="" />
        </div>
        {/* <img src={bioPic} alt="" />
        </div> */}
        {/* <img src={bioPic} alt="" /> */}
      </section>
    </body>
  );
};

export default Bio;
