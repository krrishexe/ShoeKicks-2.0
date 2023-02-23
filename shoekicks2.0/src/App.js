import Hero1 from "./Components/Hero1";
import Hero2 from "./Components/Hero2";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Products2 from "./Components/Products2";


function App() {
  return (
    <>
      <Navbar />

      <Hero1 />

      <Products head={"2022 Featured Products"} para={"You don't wanna miss this!"}/>

      <Hero2 />

      <Products2 head={"New Launches"} para={"Its's NIKE time of the year !!!"} />
    </>
  );
}

export default App;
