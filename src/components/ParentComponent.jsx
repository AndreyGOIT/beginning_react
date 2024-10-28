export default function ParentComponent() {
    return <ChildComponent 
    name="John"
      age={29}
      hobbies={["read books", "drink coffee"]}
      occupation="Software Engineer"
      />
  }

  function ChildComponent(props){
    return <p>Hello World! my name is {props.name}</p>
  }