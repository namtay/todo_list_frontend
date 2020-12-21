import React ,{useState,useEffect} from 'react';
import { useHistory,useRouteMatch } from "react-router-dom";
import  TodoForm  from "./TodoForm";
import {  getTodo, editTodo } from "../api";


function EditTodo() {

    const match = useRouteMatch();
    const history = useHistory();
    const [todo,setTodo]=useState();
    useEffect(()=>{
    
    const fetchTodo = async()=>{
        const todo = await  getTodo(match.params.id)
        setTodo(todo);
    }
    fetchTodo()
    //    setTodo({
    //        text:"foo"
    //    })
    },[match.params.id])
    
    const onSubmit =async (data)=>{
        await editTodo(data,match.params.id)
        history.push("/")
        // alert(JSON.stringify(data))
    }
    return ( 
        <div className="container">
        <div className="mt-3">
             <h3>Create Todo</h3>
             {todo?<TodoForm todo={todo} onSubmit={onSubmit}></TodoForm>:<div>Login</div>}

        </div>
        </div>
    )
     
            
}
        
        
        
    


export default EditTodo;
