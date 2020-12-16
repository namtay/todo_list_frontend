import React from 'react';
import { createTodos } from '../api';
import TodoForm from "./TodoForm";
import {useHistory} from "react-router-dom";

function CreateTodo() {
    const history =useHistory();
    const onSubmit =async (data)=>{        
     let val=   JSON.stringify(data);
     console.log(val);
     await  createTodos(val);
     history.push("/");
       
    }


    return (
        <div className="container">
           <div className="mt-3">
                <h3>Create Todo</h3>
                <TodoForm onSubmit={onSubmit}></TodoForm>
           </div>            
        </div>
    )
}

export default CreateTodo;
