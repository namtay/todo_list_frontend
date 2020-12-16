export const getTodos =()=>fetch('http://localhost:5000').then(res=>res.json())


export const createTodos=(todo)=>fetch('http://localhost:5000/create',{
    method:"POST",
    headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
    },
    body:todo
})


export const editTodo=(todo,id)=>fetch(`http://localhost:5000/${id}`,{
    method:"POST",
    headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
    },
    body: todo
})


export const getTodo=(id)=>fetch(`http://localhost:5000/${id}`).then(res=>res.json())