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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            sapiente, obcaecati nemo fugit id, odio non nesciunt suscipit ipsum
            officiis numquam accusantium quae perferendis quisquam?
            Exercitationem, non? Reprehenderit, ad maxime! Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Aperiam eos distinctio unde!
            Obcaecati molestias inventore, aspernatur necessitatibus, sunt
            incidunt nisi non laborum laboriosam ipsum voluptates quisquam quo
            nihil quas fugiat! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Excepturi impedit, expedita inventore repudiandae,
            earum in maxime accusamus quam vel eligendi nobis est nihil facilis
            illum ab incidunt ullam vitae perferendis. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Dolor porro assumenda voluptas
            labore, nam nulla architecto in quaerat ex sequi.
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
