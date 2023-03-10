import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import Contact from"./components/contact/Contact";
import Testimonials from"./components/testimonials/Testimonials";
import Portfolio from"./components/portfolio/portfolio"


// import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio/>
      <Testimonials/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
