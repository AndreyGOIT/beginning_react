export default function ParentComponent() {
    return <ChildComponent name='John'/>
  }

  function ChildComponent(props){
    return <p>Hello World! my name is {props.name}</p>
  }