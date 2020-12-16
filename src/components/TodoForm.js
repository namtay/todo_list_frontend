import React from 'react';
import { useForm }  from "react-hook-form";
// import { useHistory } from "react-router-dom";

function TodoForm({todo,onSubmit}) {    
    const {register,handleSubmit}= useForm({
        defaultValues:{text:todo?todo.text:" "},
    });
    // const history = useHistory();
    
    const submitHandler =(data)=>{
        console.log(data);
       let val=   JSON.stringify(data);
       console.log(val);
       onSubmit(data);
    //    history.push("/");
    }
    return ( <form onSubmit={handleSubmit(submitHandler)}>
                            <div className="form-group">
                                <label htmlFor="text">
                                    Text:
                                </label>
                                <input name="text"  ref={register} className="form-control" type="text" id="text"/>
                            </div>
                            <div className="form-group">
                                <button  type="submit" className="btn btn-primary">Save Todo</button>
                            </div>
            </form>
                   
            )
}


export default TodoForm;
