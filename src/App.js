// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import Navbar from "./hasnae-portfolio/navbar";
import Home from "./hasnae-portfolio/home";
import About from "./hasnae-portfolio/about";
import Projects from "./hasnae-portfolio/project";
import Resume from "./hasnae-portfolio/resume";
import Contact from "./hasnae-portfolio/conatct";
import Footer from "./hasnae-portfolio/footer";

import { Analytics } from "@vercel/analytics/react";

export default function HasnaePortfolio() {
  return(

    <>
      <Navbar />
      {/* <VideoBackground /> */}
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />

      <Analytics />
    </>
  )
}

