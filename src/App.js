import "./index.css";
import Navbar from "./Navbar";
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
      {/* <Home /> */}
      <Bio />
      <Journey />
      <Contact />
      <Portfolio />
    </div>
  );
}

export default App;
