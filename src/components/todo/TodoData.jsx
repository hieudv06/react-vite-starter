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
        console.log("Check item", item, index);

        return (
          <div className="todo-item">
            {item.name}
            <button>Delete</button>
          </div>
        );
      })}
      <div>Learning React</div>
      <div>Watching Youtube</div>
      <div> data is {JSON.stringify(todoList)}</div>
    </div>
  );
};
export default TodoData;
