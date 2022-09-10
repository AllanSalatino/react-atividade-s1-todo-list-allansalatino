import { useState } from 'react';
import './App.css';
import InputTodoList from './components/InputTodoList';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const handleTodo = (removeTodo) => {
    setTodos(todos.filter((el) => {
      return el !== removeTodo
    }))
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Tarefas</h1>
        <InputTodoList todos={todos} addTodo={addTodo}></InputTodoList>
        <TodoList todos={todos} handleTodo={handleTodo}></TodoList>
      </header>
    </div>
  );
}

export default App;
