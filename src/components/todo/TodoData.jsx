const TodoData = (props) => {
  // cach viet 1
  const { todoList } = props;
  //cach viet 2 :
  // props.name
  //props.age

  console.log(">>> Check props----: ", props);

  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        console.log(">>> Check map: ", item, index);

        return (
          <div className={`todo-item`} key={item.id}>
            {item.name}
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};
export default TodoData;
