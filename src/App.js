// import "./index.css";
import Navbar from "./Navbar";
import Bio from "./Bio";
import Journey from "./Journey";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content"></div>
      <Bio />
      <Journey />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
