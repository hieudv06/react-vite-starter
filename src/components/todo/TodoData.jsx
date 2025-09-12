const TodoData = (props) => {


      // cach viet 1
      const {name,age,data} = props;
      //cach viet 2 : 
      // props.name
      //props.age

      console.log(">>> Check props: ",props)


    return(
           <div className='todo-data'>
      <div>Learning React</div>
      <div>Watching Youtube</div>
      <div>My name is {name}</div>
       <div> Age is {age}</div>
       <div> data is {JSON.stringify(data)}</div>

       
    

    
    </div>

    )
}
export default TodoData;