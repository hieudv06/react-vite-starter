import { useState } from "react"

const TodoNew = (props) =>{


  //useState. hook
  // const valueInput = "hieudv"
  const [valueInput,setValueInput] = useState("hieudv")

  const {addNewTodo} = props

  // addNewToDo()  // fire
  const handleClick =  () =>{
    console.log(">>>> check valueInput : ",valueInput)
  }

  const handleOnChange = (name) =>{
    console.log(">>> handleOnChange",name)
    setValueInput(name)
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
      <div>My text input is = {valueInput}</div>
    </div>
    )
}

export default TodoNew;