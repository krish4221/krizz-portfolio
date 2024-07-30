
import './App.css';
import './home.css'
import './res.css'
import './media.css'
import './contact.css'
import Header from './component/header';
import Home from './component/home';
import Education from './component/education';
import Skills from './component/skills';
import Portfolio from './component/portfolio';
import Contact from './component/contact';

function App() {
  return (
    <div >
      <Header />
      <Home />
      <Education />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
