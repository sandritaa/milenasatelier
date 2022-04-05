// import "./index.css";
import Navbar from "./Navbar";
import Bio from "./Bio";
import Journey from "./Journey";
import Portfolio from "./Portfolio";
// import Skills from "./Skills";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content"></div>
      <Bio />
      <Journey />
      <Portfolio />
      {/* <Skills /> */}
      <Contact />
    </div>
  );
}

export default App;
