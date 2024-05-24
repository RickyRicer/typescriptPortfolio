import * as React from 'react';
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}


