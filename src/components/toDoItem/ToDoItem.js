import './ToDoItem.css';
import './CheckBox.css';

const ToDoItem = ({name, onToggleDone, isChecked}) => {
    return (
        <div className="todo-item" onClick={onToggleDone}>
            <input type='checkbox' className='checkbox' checked={isChecked} readOnly/>
            <label><span className="name">{name}</span></label>
        </div>
    )
}

export default ToDoItem