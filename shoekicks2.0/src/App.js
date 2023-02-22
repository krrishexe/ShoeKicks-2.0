import Hero1 from "./Components/Hero1";
import Hero2 from "./Components/Hero2";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";


function App() {
  return (
    <>
      <Navbar />

      <Hero1 />

      <Products price1={"150$"} price2={"720$"} price3={"550$"} />

      <Hero2 />
    </>
  );
}

export default App;
