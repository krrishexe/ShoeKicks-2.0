import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";
import Blog from "./Components/Blog";
import Content from "./Components/Content";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>

          <Route exact path="/" key="Home" element={<Content />} />
          <Route exact path="/Shop" key="Shop" element={<Shop />} />
          <Route exact path="/Blog" key="Blog" element={<Blog />} />
          {/* <Route exact path="/About" key="About" element={<About />} />
          <Route exact path="/Contacts" key="Contacts" element={<Contacts />} /> */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
