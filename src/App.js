// import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Section />
      </BrowserRouter>
    </>
  );
}

export default App;
