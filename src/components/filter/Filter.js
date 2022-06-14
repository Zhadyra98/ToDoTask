const Filter = (props) => {
  const buttonsData = [
      {name: 'All'},
      {name: 'Active'},
      {name: 'Completed'},
  ];

  const buttons = buttonsData.map(({name}) => {
      const isActive = props.filter === name;
      const clazz = isActive ? 'active' : null;
      return (
          <button className={`btn ${clazz}`}
          type="button"
          key={name}
          onClick={() => props.onFilterSelect2(name)}>
              {name}
          </button>
      )
  })
  return (
      <div className="inner_buttons">
          {buttons}
      </div>
  )
}

export default Filter;
