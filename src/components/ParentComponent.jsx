import { useState } from "react"

 function ParentComponent() {
    const [name, setName] = useState('John');
    return (
        <>
        <h1>Hello {name}</h1>
        <button onClick={()=> setName('Mark')}>Change name</button>
        </>
    )
  }

  export default ParentComponent;
//   function ChildComponent(props){
//     return <p>Hello World! my name is {props.name}</p>
//   }