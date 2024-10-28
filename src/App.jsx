

function App() {
  const users = [
    { id: 1, name: 'Nathan', role: 'Web Developer' },
    { id: 2, name: 'John', role: 'Web Designer' },
    { id: 3, name: 'Jane', role: 'Team Leader' },
  ]
  return (
    <>
    <h1>Hello World</h1>
    {/* <h2>Learning to code with React</h2>*/}
    <p>The currently active users list:</p>
      <ul>
      {
        users.map(function(user){
          // returns Nathan, then John, then Jane
          return (
            <li> {user.name} as the {user.role} </li>
          )
        })
      }
      </ul>
    </>
  )
}

export default App
