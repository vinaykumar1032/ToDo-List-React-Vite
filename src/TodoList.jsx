import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import "./style.css";
function TodoList(){

    let [todo,setTodo] = useState([{task: "Sample task: Wake up at 7'O Clock",id: uuidv4(), isDone: false}])
    let [newtodo,setnewtodo] = useState("");

    let addNew=()=>{
        setTodo((currVal)=>{
            return [...currVal, {task: newtodo, id: uuidv4(), isDone: false}];
        })
        setnewtodo("")
    }

    let newText=(event)=>{
        setnewtodo(event.target.value)
    }

    let delEle=(id)=>{
        setTodo((currVal)=>currVal.filter((todo)=>todo.id != id))
    }

    let updateEle=(id)=>{
        setTodo((currVal)=>currVal.map((todo)=>{
            if(todo.id==id){
                return {...todo, task : todo.task.toUpperCase() }
            }else{
                return todo
            }
        }))
    }

    let markDone=(id)=>{
        setTodo((currVal)=>currVal.map((todo)=>{
            if(todo.id===id){
                return{...todo, isDone: true}
            }else{
                return todo
            }
        }))
    }



    return(
        <div>
            <h1>To-Do List <i className="fa-solid fa-list-ul"></i></h1>
            <input type="text" placeholder="add new task" value={newtodo} onChange={newText}></input>
            <button onClick={addNew}>Add task</button>
            <br></br><br></br>
            <hr/>
            <h2>Tasks:</h2>
            <ul>
                {
                    todo.map((todo)=>(
                        <li key={todo.id}>
                        <span style={todo.isDone ?  {textDecoration: "line-through"}: {} }>{todo.task}</span> &nbsp;<button onClick={()=>delEle(todo.id)}><i className="fa-solid fa-trash"></i></button> &nbsp;
                        <button onClick={()=>updateEle(todo.id)}>U</button> &nbsp;

                        <button onClick={()=>markDone(todo.id)}><i className="fa-solid fa-circle-check"></i></button>
                        </li>
                    ))
                }
            </ul>
            <hr/>
            <br></br>
        </div>
    )
}
export default TodoList;