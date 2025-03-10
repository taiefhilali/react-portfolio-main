import {  Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { ProjectCard } from "./components/Projects/ProjectCard";
import { Projects } from "./components/Projects/Projects";
import GalleryPage from "../public/projects/GalleryPage";

const projectData = {
  title: "Sou9ek",
  imageSrc: "projects/sou9ekbg.png",
  description: "Sou9ek is a powerful mobile and web application...",
  skills: ["Electron", "Express", "Node", "ReactNative", "PostgreSQL"],
  demo: [
    "/projects/register.png",
    "/projects/login.png",
    "/projects/homescreen.png",
    "/projects/products.png",
    "/projects/cart.png",
    "/projects/profile.png"
  ],
  sourceMobile: "https://github.com/taiefhilali/MobileApp_Products-Management.git",
  sourceWeb: "https://github.com/taiefhilali/Product-Management-Desktop-App.git"
};

function App() {
  return (
    <div className={styles.App}>
        <Routes>
          <Route path="/projects" element={<ProjectCard project={projectData} />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
