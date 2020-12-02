import React, {useState} from "react";
import './App.css';
//Imporitng components
import Form from './components/form.js';
import Todolist from './components/todolist.js';

function App() {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1> MY TODO LIST </h1>
      </header>
      <Form 
      inputText={inputText}
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText} />
      <Todolist  />
    </div>
  );
}

export default App;
