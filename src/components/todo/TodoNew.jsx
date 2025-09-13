const TodoNew = (props) =>{

  const {addNewTodo} = props

  // addNewToDo()  // fire
  const handleClick =  () =>{
    alert("click me")
  }

  const handleOnChange = (name) =>{
    console.log(">>> handleOnChange",name)
  }

  // addNewTodo("hieudv");

    return(
        <div className='todo-new'>
      <input type="text"
        onChange={(event) =>handleOnChange(event.target.value)}

      />
      <button
      style={{cusor: "pointer"}}
      onClick={handleClick}
      >Add</button>
    </div>
    )
}

export default TodoNew;