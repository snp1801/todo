import './App.css';
import Header from "./components/header";
import ToDoForm from "./components/toDoForm";
import DisplayTodos from './components/displayTodos';

function App() {
  return (
    <div>
      <Header/>
      <ToDoForm/>
      <DisplayTodos/>
    </div>
  );
}

export default App;
