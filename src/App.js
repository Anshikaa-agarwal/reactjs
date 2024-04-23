import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

const user = {
  name: "TextUtility",
  about: "thisIsAbout",
  link: "http://www.google.com",
  heading: "Enter text here to analysze"
};
function App() {

  const [mode, setMode] = useState('dark');
  const toggleMode = () => {
    if(mode==='dark'){
      setMode('light');
    } else {
      setMode('dark');
    }
  }
  
  return (
    <>
    <Navbar name={user.name} about={user.about} aboutLink={user.link} mode={mode}/>
    <div className="container">
      {/* <TextForm heading={user.heading}/> */}
      <About toggleMode={toggleMode} mode={mode}/>
    </div>
    </>
  );
}

export default App;
