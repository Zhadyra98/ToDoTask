import './ToDoItem.css';
import './CheckBox.css';

const ToDoItem = ({id, name, isChecked, setCheckedToDo}) => {
    return (
        <div className="todo-item" onClick={() => setCheckedToDo(id)}>
            <input type='checkbox' className='checkbox' checked={isChecked}/>
            <label><span className="name">{name}</span></label>
        </div>
    )
}

export default ToDoItem