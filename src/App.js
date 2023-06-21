import './App.css';
import React from 'react';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el curso de introducción a React.js', completed: false},
  {text: 'Llorar con la Llorona', completed: false},
  {text: 'LALALALA', completed: false},
  {text: 'Usar estados derivados', completed: true}
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  // ----- Estado derivado para TodoCounter -----
  /* !! -> convierte la cosa en booleano */
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  // ----- Estado derivado para TodoList -----
  // ¿El filter busca en la cadena un ''?
  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  // ----- Función para completar la tarea -----
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    /* <> -> es lo mismo que React.Fragment */
    <> 
      <TodoCounter completed={completedTodos} total={totalTodos} />
      
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={() => completeTodo(todo.text)} 
            onDelete={() => deleteTodo(todo.text)} 
          />
        ))}
      </TodoList>   

      <CreateTodoButton />  
    </>
  );
}

export default App;
