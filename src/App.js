import "./index.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Bio from "./Bio";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function App() {
  // const title= 'sandra novi'
  return (
    <div className="App">
      <Navbar />
      <div className="content"></div>
      <Home id="Home" />
      <Bio id="Bio" />
      <Contact id="Contact" />
      <Portfolio id="Portolio" />
    </div>
  );
}

export default App;
