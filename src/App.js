import "./index.css";
import Navbar from "./Navbar";
// import NewJourney from "./NewJourney";
import Journey from "./Journey";
import Bio from "./Bio";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function App() {
  // const title= 'sandra novi'
  return (
    <div className="App">
      <Navbar />
      <div className="content"></div>
      <Bio />
      <Journey />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
