import React, { useState } from 'react'
import "./App.css"
import {Header} from "./Components/Header"
import {Todo} from "./Components/Todo"
import {Footer} from "./Components/Footer"
import { Addtodo } from './Components/Addtodo'



function App  () {
  const onDelete = (todos)=>{
    console.log("I am onDelete", todos);
    setTodo(todo.filter((e)=>{
      return e!==todos;
    }));
  }
 const [todo, setTodo] = useState([
    {
     id : 1,
     title: "Carrot",
     desc: "carrot improve eyesight"
  },

  {
    id : 2,
    title: "Bicycle",
    desc: "Bicycle make commuting easier"
 },



]);
  return (
    <div>
      <Header/>
      <Addtodo/>
      <Todo todo={todo} onDelete={onDelete}/>
     
      <Footer/>

    </div>
  );
}

export default App;
