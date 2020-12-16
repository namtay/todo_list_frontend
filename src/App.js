// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {Route,Switch} from "react-router-dom";
import TodoList from "./components/TodoList.js";
import EditTodo from "./components/EditTodo";
import CreateTodo from "./components/CreateTodo";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div> 
    <Navbar/>
    <Switch>
        <Route exact   path="/" component={TodoList}></Route>
        <Route  path="/edit/:id" component={EditTodo}></Route>
        <Route path="/create" component={CreateTodo}></Route>
    </Switch>
    </div>
   
  );
}

export default App;
