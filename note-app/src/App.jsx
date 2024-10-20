import { useState } from "react";

import Header from "./components/Header.jsx";

import TextArea from "./components/TextArea.jsx";

import "./App.css";
import "./css/header.css";
import "./css/search.css";
import "./css/textarea.css";
import "./css/notes.css";

function App() {
  return (
    <>
      <Header />
      <TextArea />
    </>
  );
}

export default App;
