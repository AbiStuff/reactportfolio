import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Page1 from './components/Page1';
import Projects from './components/Projects';
import Resume from './components/Resume';
function App() {
  return (
    <div className="App">
    
       <Header/>
       <Page1/>
       <About />
       <Projects />
       <Resume />
       <Contact />
       <Footer />

       
    </div>
  );
}

export default App;
