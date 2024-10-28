import { useState } from "react"
export default function ParentComponent() {
    const [name, setName] = useState('John')
    return <ChildComponent 
    name={name}
    //   age={29}
    //   hobbies={["read books", "drink coffee"]}
    //   occupation="Software Engineer"
      />
  }

  function ChildComponent(props){
    return <p>Hello World! my name is {props.name}</p>
  }