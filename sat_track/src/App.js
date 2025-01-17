import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Main from "./Components/Main";
import About from "./Components/About";
import SatInfo from "./Components/SatInfo";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/satTrack" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/satInfo" element={<SatInfo />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
