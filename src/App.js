import "./index.css";
import Navbar from "./Navbar";
// import NewJourney from "./NewJourney";
import Journey from "./Journey";
import Bio from "./Bio";
import Picture from "./Pic";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Projects from "./Projects";

function App() {
  // const title= 'sandra novi'
  return (
    <div className="App">
      <Navbar />
      <div className="content"></div>
      <Bio />
      <Picture />
      <Journey />
      <Portfolio />
      <Contact />
      <Projects />
    </div>
  );
}

export default App;
