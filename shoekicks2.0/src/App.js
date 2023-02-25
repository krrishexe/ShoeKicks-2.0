// import Carousel from "./Components/Carousel";
// import Footer from "./Components/Footer";
// import Hero1 from "./Components/Hero1";
// import Hero2 from "./Components/Hero2";
// import Hero3 from "./Components/Hero3";
import Navbar from "./Components/Navbar";
// import Newsletter from "./Components/Newsletter";
// import Products from "./Components/Products";
// import Products2 from "./Components/Products2";
import Shop from "./Components/Shop";
import Blog from "./Components/Shop";
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
          <Route exact path="/Blog" key="Blog" element={<Blog  />} />
          {/* <Route exact path="/About" key="About" element={<About />} />
          <Route exact path="/Contacts" key="Contacts" element={<Contacts />} /> */}



        </Routes>

        
      </div>
    </Router>
  );
}

export default App;
