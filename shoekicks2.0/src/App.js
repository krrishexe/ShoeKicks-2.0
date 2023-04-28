import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";
import Blog from "./Components/Blog";
import Content from "./Components/Content";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import About from "./Components/About";
import Cart from "./Components/Cart";
import SingleProduct from "./Components/SingleProduct";
import Footer from "./Components/Footer";
import appContext from "./Utils/Context";

function App() {
  return (
    <Router>
      <appContext>
        <div>
          <Navbar />

          <Routes>

            <Route exact path="/" key="Home" element={<Content />} />
            <Route exact path="/Shop" key="Shop" element={<Shop />} />
            <Route exact path="/Blog" key="Blog" element={<Blog />} />
            <Route exact path="/Products" key="Products" element={<About />} />
            <Route exact path="/Cart" key="Cart" element={<Cart />} />
            <Route exact path="/SingleProduct/:id" key="SingleProduct" element={<SingleProduct />} />

          </Routes>
          <Footer />
        </div>
      </appContext>
    </Router>
  );
}

export default App;
