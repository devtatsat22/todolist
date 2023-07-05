import Todo from '../model/Todo.js' ;


export const addTodo = async (request, response) => {
 try{  
     const newTodo = new Todo(request.body); /*await Todo.create({
          data: request.body,
          createdAt: Date.now()
      })*/
      await newTodo.save();

      response.status(200).json(newTodo);
      
    } catch(error){
        return response.status(500).json(error.message);
    }
}