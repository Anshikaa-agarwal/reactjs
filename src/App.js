import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

const user = {
  name: "TextUtility",
  about: "thisIsAbout",
  link: "http://www.google.com",
  heading: "Enter text here to analysze"
};
function App() {
  return (
    <>
    <Navbar name={user.name} about={user.about} aboutLink={user.link}/>
    <div className="container">
      <TextForm heading={user.heading}/>
    </div>
    </>
  );
}

export default App;
