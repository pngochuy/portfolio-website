import "./style.css";
import Navbar from "./sections/nav-bar/Navbar";
import Header from "./sections/header/Header";
import Experience from "./sections/experience/Experience";
import Project from "./sections/project/Project";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";

function App() {
  return (
    <main>
      <Navbar></Navbar>
      <Header></Header>
      <Experience></Experience>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}

export default App;
