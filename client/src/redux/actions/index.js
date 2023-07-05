import axios from 'axios' ;
import { ADDNEW_TODO } from './type';



const API_URL ='http://localhost:8000' ;

export const addNewTodo = async(data) =>{

    try{
        console.log(data);
         await axios.post(`${API_URL}/todos`,  data ) ;
         console.log("Dev Tatsat")
     //  dispatch({type: ADDNEW_TODO , payload: res.data})
    } catch (error) {
        console.log('Error while calling addNewTodo API', error.message);
    }

}
