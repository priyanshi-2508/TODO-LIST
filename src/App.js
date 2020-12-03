import React, {useState,useEffect} from "react";
import './App.css';
//Imporitng components
import Form from './components/form.js';
import Todolist from './components/todolist.js';

function App() {
  //state
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos,setFilteredTodos] = useState([]);

  //Run once when the app starts
  useEffect(()=>{
    getLocalTodos();
  },[]);

  useEffect(() => {
    //console.log("hey");
    filterHandler();
  }, [todos,status]);


  //functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    
      }
  };

  const saveLocalTodos = () => {
        localStorage.setItem('todos',JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null)
    {
      localStorage.setItem('todos',JSON.stringify([]));
    }else{
      let TodofromLocal = JSON.parse(localStorage.getItem('todos',JSON.stringify(todos)));
      console.log(TodofromLocal);
      setTodos(TodofromLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1> MY TODO LIST </h1>
      </header>
      <Form 
      inputText={inputText}
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText} 
      setStatus={setStatus}
      
      />
      <Todolist
      setTodos={setTodos} 
      todos={todos}
      filteredTodos= {filteredTodos} />
    </div>
  );
}

export default App;
