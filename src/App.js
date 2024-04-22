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

  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
    <Navbar name={user.name} about={user.about} aboutLink={user.link}/>
    <div className="container">
      {/* <TextForm heading={user.heading}/> */}
      <About/>
    </div>
    </>
  );
}

export default App;
