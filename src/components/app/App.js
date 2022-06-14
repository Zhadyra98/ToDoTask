import { useState } from "react"
import Filter from '../filter/Filter';
import ToDo from '../toDoList/Todo';
import '../../styles/ToDoItem.css';

import downArrow from '../../resources/down-arrow.svg';

let maxId=2;

const App = () => {
  const [name, setName] = useState('');
  const [data, setData] = useState([
    {id:1, name: "Learn JS", isChecked: false},
    {id:2, name: "Learn React", isChecked:true}
  ]);

  const [filter, setFilter] = useState('All');

  const filterList = (items, filter) => {
    switch (filter) {
        case 'Active':
            return items.filter(item => !item.isChecked);
        case 'Completed':
            return items.filter(item => item.isChecked)
        default:
            return items;
    }
  }

  const onKeyPressNameHandler = e => {
    if(e.key === 'Enter' && name){
        maxId+=1;
        e.preventDefault();
        setData(prev => [...prev, 
            {id: maxId, name: name, isChecked:false}])
        setName('');
    }
  }

  const onToggleDone = (id) => {
    setData(prev => prev.map(item => {
      if(item.id===id){
        return {...item, isChecked: !item.isChecked}
      }
      return item
    }))
  }

  const onFilterSelect = (filter) => {
    setFilter(filter);
  }

  const onClear = () => {
    setData(prev => prev.filter(item => !item.isChecked))
  }

  return (
    <>
      <h1>todos</h1>
      <div className="container">
        <div className="todo-input">
          <img className = "iconSvg" src={downArrow} alt="arrow" />
          <input type="text" 
            value={name} 
            onChange={e => setName(e.target.value)}
            onKeyPress={onKeyPressNameHandler} 
            placeholder="What needs to be done?"/>
        </div>
        <ToDo 
          data={filterList(data, filter)}
          onToggleDone={onToggleDone}/>
        <div className="todo-panel">
          <span>{data.filter(x => !x.isChecked).length} items left</span>
          <Filter filter ={filter} onFilterSelect2={onFilterSelect}/>
          <button onClick={onClear}>Clear completed</button>
        </div>
        </div>
    </>

  );
}

export default App;
