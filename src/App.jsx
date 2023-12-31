import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Modal from "./components/modal/Modal";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  return (
    <div className="layout">
      <Header />
      <Skills />
      <Projects />
      <Contact modal={modal} setModal={setModal} />
      <svg
        className="rings header__rings"
        xmlns="http://www.w3.org/2000/svg"
        width="530"
        height="129"
      >
        <g fill="none" fillRule="evenodd" stroke="#FFF" opacity=".25">
          <ellipse cx="265" cy="40" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="52" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="65" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="77" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="89" rx="264.5" ry="39.5" />
        </g>
      </svg>
      <svg
        className="rings skills__rings"
        xmlns="http://www.w3.org/2000/svg"
        width="530"
        height="129"
      >
        <g fill="none" fillRule="evenodd" stroke="#FFF" opacity=".25">
          <ellipse cx="265" cy="40" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="52" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="65" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="77" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="89" rx="264.5" ry="39.5" />
        </g>
      </svg>
      <svg
        className="rings footer__rings"
        xmlns="http://www.w3.org/2000/svg"
        width="530"
        height="129"
      >
        <g fill="none" fillRule="evenodd" stroke="#FFF" opacity=".25">
          <ellipse cx="265" cy="40" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="52" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="65" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="77" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="89" rx="264.5" ry="39.5" />
        </g>
      </svg>
      <svg
        className="rings circle"
        xmlns="http://www.w3.org/2000/svg"
        width="129"
        height="129"
      >
        <circle
          cx="830.5"
          cy="585.5"
          r="64"
          fill="none"
          stroke="#FFF"
          transform="translate(-766 -521)"
        />
      </svg>
      <Modal modal={modal} setModal={setModal} />
    </div>
  );
}

export default App;
