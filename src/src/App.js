import "./App.css";
import Header from './Components/Header/Header.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Slider from './Components/Slider/Slider.jsx'
import Compare from './Components/Compare/Compare.jsx'
import Products from "./Components/Products/Products.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
  <Header/>
  <Hero/>
  <Slider/>
  <Compare/>
  <Products/>
  <Testimonials/>
  <Footer/>
    </div>
  );
}

export default App;
