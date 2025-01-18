import "./App.css";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";

function App() {
  const person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Developer",
  };

  return (
    <div className="App">
      <header>
        <h1>This is React</h1>
      </header>
      {{/* Sending the person object as props */}}
      <MyStateComponent person={person} />
    </div>
  );
}

export default App;
