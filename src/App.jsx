import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="layout">
      <Header/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
