import './App.css';

const user = {
  name: "abc",
  age: 18
};
function App() {
  return (
    <>
    <h1 className="heading">My first React app</h1>
    <ul>
      <li>apple</li>
      <li>banana</li>
      <li>guava</li>
    </ul>

    <p className="para">
      Hello, my name is {user.name} and I am {user.age} years old.
    </p>
    </>
  );
}

export default App;
