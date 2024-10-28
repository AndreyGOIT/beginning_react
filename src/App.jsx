// import ParentComponent from './components/ParentComponent.jsx'

// function App() {
//   const users = [
//     { id: 1, name: 'Nathan', role: 'Web Developer' },
//     { id: 2, name: 'John', role: 'Web Designer' },
//     { id: 3, name: 'Jane', role: 'Team Leader' },
//   ]
//   return (
//     <>
//     <h1 className='text-lowercase'>Hello World</h1>
    
//     <p>The currently active users list:</p>
//       <ul>
//       {
//         users.map(function(user){
//           // returns Nathan, then John, then Jane
//           return (
//             <li key={user.id}> {user.name} as the {user.role} </li>
//           )
//         })
//       }
//       </ul>
//       <ParentComponent />
//     </>
//   )
// }

// export default App
import PropTypes from 'prop-types'

export default function App() {
  const handleClick = (event) => {
    console.log("Hello World!");
    console.log(event);
  }
  return (
    <button onClick={handleClick}>
      Click me
    </button>
  )
}

App.propTypes = {
  user: PropTypes.object
}