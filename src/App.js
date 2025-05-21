import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
      </header>

      <section id="about-us">
        <h2>About Us</h2>
        <img src="%PUBLIC_URL%/assets/about-us-image.jpg" alt="About Us" />
        {/* You can add more descriptive text about yourself here */}
      </section>

      <section id="resume">
        <h2>Resume</h2>
        <a href="%PUBLIC_URL%/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
          View My Resume
        </a>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div>
          <h3>Project Alpha</h3>
          <p>A cool project I worked on.</p>
          <img src="%PUBLIC_URL%/assets/project-placeholder-1.jpg" alt="Project Alpha Placeholder" />
        </div>
        <div>
          <h3>Project Beta</h3>
          <p>Another interesting venture.</p>
          <img src="%PUBLIC_URL%/assets/project-placeholder-2.jpg" alt="Project Beta Placeholder" />
        </div>
        {/* Add more projects as needed */}
      </section>
    </div>
  );
}

export default App;
