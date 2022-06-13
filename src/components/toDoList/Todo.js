import { useState } from "react"
import ToDoItem from "../toDoItem/ToDoItem";
import '../toDoItem/ToDoItem.css';
import downArrow from '../../resources/down-arrow.svg';

const ToDo = () => {
    const [name, setName] = useState('');
    const [todoList, setTodoList] = useState([
        {
            id:0,
            name: "Learn JS",
            isChecked: false
        }
    ]);

    const onKeyPressNameHandler = e => {
        if(e.key === 'Enter'){
            e.preventDefault();
            setTodoList(prev => [...prev, 
                {id: todoList.length, name: name, isChecked:false}])
            setName('');
        }
    }
    const toggleCheckedToDo = id => {
       const newArray = [].concat(todoList)
       newArray[id].isChecked = !newArray[id].isChecked
       setTodoList(newArray)
        
    }

    // const onAll = () => {

    // }

    return (
        <>
        <h1>todos</h1>
        <div className="container">
            <div className="todo-input">
                <img className = "iconSvg" src={downArrow}/>
                <input type="text" 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                    onKeyPress={onKeyPressNameHandler} 
                    placeholder="What needs to be done?"/>
            </div>
            {todoList && todoList.map(todo => (
                <ToDoItem 
                    key={`_todo_${todo.id}`} 
                    id={todo.id}
                    name={todo.name} 
                    isChecked={todo.isChecked}
                    setCheckedToDo={toggleCheckedToDo}/>
            ))}
            <div className="todo-panel">
                    <span>{todoList.length} items left</span>
                <div className="inner_buttons">
                    <button className="active">All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
                    <button>Clear completed</button>
            </div>
        </div>
        </>
    )
}

export default ToDo