import { useState } from "react";
// import { Link } from "react-scroll";

const Home = () => {
  const [name, setName] = useState("mario");
  const [location, setLocation] = useState("cali");

  const handleClick = () => {
    setName("mariaaa");
    setLocation("italy");
  };
  return (
    <div className="Home" id="Home">
      <h2>Homepage</h2>
      <p>
        {name} lives in {location}
      </p>
      <button onClick={handleClick}> Click Me</button>
    </div>
  );
};

export default Home;
