import Navbar from "./components/navbar";
import Header from "./components/header";
import Projects from "./components/projects";
import About from "./components/about";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header /> 
      <Projects />
      <About />
    </main>
  );
}
