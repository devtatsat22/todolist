import { useState } from "react";

import { useDispatch } from "react-redux" ;

import { addNewTodo } from "../redux/actions"

const ToDoForm = () => {
    const [text, setText] = useState({}) ;

   // const dispatch = useDispatch() ;
    const onFormSubmit = async(e) => {
     // e.preventDefault();

    //  dispatch(addNewTodo(text)) ;
   await addNewTodo(text) ;

    } 
    const onInputChange = (e) => {
     setText(e.target.value) ;
    }
    return (
       <form className= "form" onSubmit= {onFormSubmit}>
           <input 
           placeholder="Enter new task..."
           onChange= {(e)=>onInputChange(e)} />
       </form>
    )
}
export default ToDoForm;