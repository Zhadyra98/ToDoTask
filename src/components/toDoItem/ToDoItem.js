import './ToDoItem.css';

const ToDoItem = ({id, name, isChecked, setCheckedToDo}) => {
    return (
        <div className="todo-item" onClick={() => setCheckedToDo(id)}>
            <input type='checkbox' checked={isChecked}/>
            <span className="name">{name}</span>
        </div>
    )
}

export default ToDoItem