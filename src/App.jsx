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
// 

// import { useState } from 'react';

// function App() {
//   // State to hold the visibility status of the paragraph
//   const [isParagraphVisible, setIsParagraphVisible] = useState(true);

//   // Function to toggle the visibility status of the paragraph
//   const toggleStatus = () => {
//     setIsParagraphVisible(!isParagraphVisible);
//   };

//   return (
//     <>
//       <h1>Change UI based on click</h1>
//       {isParagraphVisible && (
//         <p>This paragraph will be shown/hidden on click</p>
//       )}
//       <button onClick={toggleStatus}>
//         {isParagraphVisible ? 'Hide' : 'Show'} Paragraph
//       </button>
//     </>
//   );
// }

// export default App;

// function App() {
//   return (
//     <h1 style={{ color: 'red', textAlign: 'center' }}>Hello World</h1>
//   );
// }
// export default App;

import styles from "../styles/App.module.css";
import Form from "./components/Form.jsx";

function App() {
  return (
    <>
      <p className={styles.BlueParagraph}>
        The weather is sunny today.
      </p>
      <p className={styles.GreenParagraph}>
        Still, do not forget to bring your umbrella!
      </p>
      <Form/>
    </>
  )
}
export default App;