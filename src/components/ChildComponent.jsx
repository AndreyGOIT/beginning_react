function ChildComponent(props) {
    return (
      <>
        <h1>Hello {props.name}</h1>
        <button onClick={() => props.setName('Mark')}>Change Name</button>
      </>
    )
  }
  export default ChildComponent