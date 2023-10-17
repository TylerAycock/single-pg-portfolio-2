import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="layout">
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
