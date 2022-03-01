import React, {useState} from "react";
import Todo from './Todo';
import TodoForm from './TodoForm';

function MainContainer(){

    const [todos, setTodos] = useState([
        {text: 'Take out trash.', 
            isCompleted: false },
        {text: 'Wash the dishes.', 
            isCompleted: false },
        {text: 'Do laundry.', 
            isCompleted: false },
        {text: 'Clean kitchen.', 
            isCompleted: false },
        {text: 'Blow out leaves.', 
            isCompleted: false }
    ])

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
      };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        alert("Todo deleted!")
      };
    

    return(
        <div className = "main-container">
                <div className = "todo-list">
                    <>
                       <table>
                            <thead>
                                Todo's
                            </thead>
                            <tbody>
                                {todos.map((todo, index) => (
                                    <tr> 
                                        <td>{<Todo
                                                key={index}
                                                index = {index}
                                                todo={todo}
                                                completeTodo = {completeTodo}
                                                removeTodo = {removeTodo}
                                            />}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                </div>
                <TodoForm addTodo = {addTodo}/>
        </div>
    )
}

export default MainContainer;