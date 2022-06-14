import ToDoItem from "../toDoItem/ToDoItem";
import '../../styles/ToDoItem.css';


const ToDo = ({data, onToggleDone}) => {
    return (
        <>
            {data && data.map(todo => (
                <ToDoItem 
                    key={`_todo_${todo.id}`} 
                    id={todo.id}
                    name={todo.name} 
                    isChecked={todo.isChecked}
                    onToggleDone={() => onToggleDone(todo.id)}/>
            ))}
        </>
    )
}

export default ToDo