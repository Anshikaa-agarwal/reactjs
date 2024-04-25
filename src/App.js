import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

const user = {
  name: "TextUtility",
  about: "About",
  link: "http://www.google.com",
  heading: "Enter text here to analysze"
};
function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if(mode==='dark'){
      setMode('light');
      setBodyStyle({
        backgroundColor: '#dfe5eb',
        height: '100vh'
      });
    } else {
      setMode('dark');
      setBodyStyle({
        backgroundColor: '#696969',
        height: '100vh'
      })
    }
  }

  const [bodyStyle, setBodyStyle] = useState({
    backgroundColor: '#dfe5eb',
    height: '100vh'
  })
  
  return (
    <div className='body' style={bodyStyle}>
    <Navbar name={user.name} about={user.about} aboutLink={user.link} mode={mode}/>
    <Alert alert="You have opened React App"/>
    <div className="container">
      {/* <TextForm heading={user.heading}/> */}
      <About toggleMode={toggleMode} mode={mode}/>
    </div>
    </div>
  );
}

export default App;
