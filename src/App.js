import './App.css';
import Navbar from './components/Navbar';

const user = {
  name: "TextUtility",
  about: "thisIsAbout",
  link: "http://www.google.com"
};
function App() {
  return (
    <>
    <Navbar name={user.name} about={user.about} aboutLink={user.link}/>
    </>
  );
}

export default App;
