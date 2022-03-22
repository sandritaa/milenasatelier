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
            Creative and product driven Front End Developer located in the Bay
            Area. Previously based in New York City and London working on
            developing products throughout the entire life cycle with a focus on
            handling multiple accounts, liaising with logistics and improving
            user experience. Currently working on developing innovative digital
            products using web technologies such as Figma, React.js and Vue.js
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
