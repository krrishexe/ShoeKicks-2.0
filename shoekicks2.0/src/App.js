import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import Hero1 from "./Components/Hero1";
import Hero2 from "./Components/Hero2";
import Hero3 from "./Components/Hero3";
import Navbar from "./Components/Navbar";
import Newsletter from "./Components/Newsletter";
import Products from "./Components/Products";
import Products2 from "./Components/Products2";
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

          {/* <Route exact path="/Home" key="Home" element={<News pageSize={pageSize} country={"In"} category={"business"} />} />
          <Route exact path="/Shop" key="Shop" element={<News pageSize={pageSize} country={"In"} category={"business"} />} />
          <Route exact path="/Blog" key="Blog" element={<News pageSize={pageSize} country={"In"} category={"business"} />} />
          <Route exact path="/About" key="About" element={<News pageSize={pageSize} country={"In"} category={"business"} />} />
          <Route exact path="/Contacts" key="Contacts" element={<News pageSize={pageSize} country={"In"} category={"business"} />} /> */}



        </Routes>

        <Hero1 />

        <Products head={"2022 Featured Products"} para={"You don't wanna miss this!"} />

        <Hero2 />

        <Products2 head={"New Launches"} para={"Its's NIKE time of the year !!!"} />

        <Hero3 />

        <Carousel />

        <Newsletter />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
