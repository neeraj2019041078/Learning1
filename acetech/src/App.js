// // // // Question : imagine a simple react application that fetches a list of users from an api and display their names.

// // // // there will be button fetch the data and while the data is being fetched , a loader indicator will be shown

// // // // import React from 'react';
// // // // import useFetch from './hooks/useFetch';

// // // // const App = () => {
// // // //     const {
// // // //         products,loading,error,fetchData
// // // //       }=useFetch();

// // // //   return (
// // // //    <>
// // // //     {loading && <p>Loading ...............</p>}
// // // //     {error && <p>{error}</p>}
// // // //     {!loading && !error && (
// // // //         <ul>
// // // //             {products.map((product)=>(
// // // //                 <li key={product.id}>
// // // //                 <h2>{product.title}</h2>
// // // //               <img src={product.image} alt={product.title} />
// // // //               <p>{product.description}</p>
// // // //                 </li>

// // // //             ))}
// // // //         </ul>
// // // //     )}

// // // //     <button onClick={fetchData}>Click</button>
// // // //    </>
// // // //   )
// // // // }

// // // // export default App;

// // // // Question : Imagine we have react application that display a list of user profiles. Each uset profile has a "like" button
// // // // and clicking this button increments the like count for that specific user other remain unaffected

// import React from 'react';
// import useLikes from './hooks/useLikes';

// const App = () => {
//     const {users,UserProfile,handleLike}=useLikes();
//   return (
//     <>
//         <h1>User profiles</h1>
//         <ul>
//             {users.map((user)=>(
//                 <li key={user.id}>
//                 <UserProfile key={user.id} user={user} onLike={handleLike} />

//                 </li>
//             ))}
//         </ul>
//    </>
//   )
// }

// export default App;

// // // // VDOM concept

// // // // import React, { useState } from 'react';
// // // // const intialTask=[
// // // //     {id:1,title:"Task 1" , completed:false},
// // // //     {id:2,title:"Task 2" , completed:false},
// // // //     {id:3,title:"Task 3" , completed:false},

// // // // ]
// // // // const App = () => {
// // // //     const [tasks,setTasks]=useState(intialTask);
// // // //     const TaskProfile=({task,onToggle})=>{
// // // //         return(
// // // //             <>
// // // //                 <h1>{task.title}</h1>
// // // //                 <h1>{task.completed}</h1>
// // // //                 <button onClick={()=> onToggle(task.id)}> Toggle</button>
// // // //             </>
// // // //         )
// // // //     }
// // // //     const handleToggle=(taskId)=>{
// // // //         setTasks(
// // // //             tasks.map(task=>
// // // //                 task.id==taskId ? {...task,completed:!task.completed}:task
// // // //         )
// // // //     )
// // // //     }
// // // //   return (
// // // //   <>
// // // //     <h1> All Task</h1>
// // // //     <ul>
// // // //         {tasks.map((task)=>(
// // // //             <li key={task.id}>
// // // //             <TaskProfile key={task.id} task={task} onToggle={handleToggle} />

// // // //             </li>
// // // //         ))}
// // // //     </ul>
// // // //   </>
// // // //   )
// // // // }

// // // // export default App;

// // // // import React from 'react';
// // // // import useCountdown from './hooks/useCountdown';

// // // // const App = () => {
// // // //   const { time, active, start, stop, reset } = useCountdown(60);

// // // //   return (
// // // //     <>
// // // //       <p>{time ===0 ? 'hello' : time}</p>
// // // //       <button onClick={start}>Start</button>
// // // //       <button onClick={stop}>Stop</button>
// // // //       <button onClick={reset}>Reset</button>
// // // //     </>
// // // //   );
// // // // }

// // // // export default App;

// // // // import React, { useState } from 'react'

// // // // const App = () => {
// // // //     const [userName,setUsername]=useState(" ");
// // // //     const [password,setPassword]=useState(" ");
// // // //     const [data,setData]=useState([]);
// // // //     const handlechange1=(e)=>{

// // // //         setUsername(e.target.value);
// // // //     }
// // // //     const handlechange2=(e)=>{

// // // //         setPassword(e.target.value);
// // // //     }
// // // //     const handleSubmit=(e)=>{

// // // //         e.preventDefault();

// // // //         if (userName.trim() === "") {
// // // //             alert("Please enter a username");
// // // //             return;
// // // //         }

// // // //         if (password.trim() === "") {
// // // //             alert("Please enter a password");
// // // //             return;
// // // //         }

// // // //         try {
// // // //             const userData = { userName, password };
// // // //             setData([...data, userData]);
// // // //             setUsername("");
// // // //             setPassword("");
// // // //             alert("Form submitted successfully");
// // // //         } catch (error) {
// // // //             console.log(error.message);
// // // //         }
// // // //     }
// // // //     const handleDel=(index)=>{
// // // //         const updatedData=data.filter((item,i)=>i!==index);
// // // //         setData(updatedData)
// // // //     }
// // // //   return (
// // // //     <>
// // // //         <form onSubmit={handleSubmit}>
// // // //             <div>
// // // //                 <input type='text' value={userName} placeholder='Enter a username ' onChange={handlechange1} />
// // // //             </div>
// // // //             <div>
// // // //                 <input type='text' value={password} placeholder='Enter a password ' onChange={handlechange2} />
// // // //             </div>
// // // //             <button onClick={handleSubmit}>onSubmit</button>
// // // //         </form>
// // // //         <ul>
// // // //             {data.map((datas,index)=>(
// // // //                 <li key={index}>
// // // //                     <h1>{datas.userName}</h1>
// // // //                     <h1>{datas.password}</h1>
// // // //                     <button onClick={()=> handleDel(index)}>Del</button>
// // // //                 </li>
// // // //             ))}
// // // //         </ul>
// // // //     </>

// // // //   )
// // // // }

// // // // export default App;

// // // ///////////////////////////////

// // // //// each typing show 5 sec

import React, { useState } from 'react'
import useDebouncevalue from './hooks/useDebouncevalue';

const App = () => {
    const [value,setValue]=useState("");
    const input=useDebouncevalue(value,5000)
    const handleval=(e)=>-{
        setValue(e.target.value);
    }
  return (
   <>
    <input type='text' value={value} onChange={handleval} placeholder='Enter a input'/>
    <h1>{input}</h1>
   </>
  )
}

export default App;

// // // // count from 10 to 1
// // // import React from 'react'
// // // import useCount from './hooks/useCount';

// // // const App = () => {
// // //     const {count,hello}=useCount(10);
// // //   return (
// // //     <>
// // //         <h1>{hello ? count : <p>"bye"</p>}</h1>
// // //     </>
// // //   )
// // // }

// // // export default App;

// // import { BulkWriteResult } from "mongodb";
// // import React, { useState } from "react";

// // const App = () => {
// //   const [input, setInput] = useState("");
// //   const [city, setCity] = useState("");
// //   const [data, setData] = useState([]);
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       setData([...data, { input, task: city }]);
// //       setInput(" ");
// //       setCity(" ");
// //     } catch (err) {
// //       console.log(err.message);
// //     }
// //   };
// //   const handleDel=(index)=>{
// //     const updatedData=data.filter((_,i)=>i!==index);
// //     setData(updatedData)
// //   }
// //   return (
// //     <>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <input
// //             type="text"
// //             value={input}
// //             placeholder="Enter your name"
// //             onChange={(e) => setInput(e.target.value)}
// //           />
// //           <select
// //             value={city}
// //             onChange={(e) => setCity(e.target.value)}
// //             placeholder="Enter your City"
// //           >
// //             <option value="">Select your city</option>
// //             <option value="Delhi">Delhi</option>
// //             <option value="Delhi1">Delhi1</option>
// //             <option value="Delhi2">Delhi2</option>
// //           </select>
// //           <button type="submit">Add</button>
// //         </div>
// //         {data.map((item, index) => (
// //           <li key={index}>
// //             {item.input} {item.task}
// //             <button onClick={() => handleDel(index)}>Del</button>
// //           </li>
// //         ))}
// //       </form>
// //     </>
// //   );
// // };

// // export default App;

// // import React from 'react';
// // import useCount from './hooks/useCount';

// // const App = () => {
// //     const {count,start,stop,reset,active}=useCount();
// //   return (
// //     <>
// //     {active ? count :"Bye"}
// //     <button onClick={start}>Start</button>
// //     <button onClick={stop}>Stop</button>
// //     <button onClick={reset}>reset</button>
// //     </>
// //   )
// // }

// // export default App



// import React from 'react';
// import useLikes from './hooks/useLikes';

// const App = () => {
//     const { users, handleLike, UserProfile } = useLikes();

//     return (
//         <>
//             <ul>
//                 {users.map((user) => (
//                     <UserProfile key={user.id} user={user} onLike={handleLike} />
//                 ))}
//             </ul>
//         </>
//     );
// };

// export default App;



// Implement a search bar component tha accepts an array of restarunt names as 'restaurants' prop and a 'setSearchTeam ' function prop. The component should render an input field that updates the searchTeam state using the 'setSearchTeam' function on every keystroke.The component should be less than 30 lines 
// write in javascript
// import React, { useState } from 'react';
// // import UseSearchBar from './hooks/UseSearchBar';
// import SearchBar from './components/SearchBar';

// const App = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const restaurants = ['Pizza Place', 'Burger House', 'Pasta Corner'];

//   return (
//     <>
//       <SearchBar setSearchTerm={setSearchTerm} />
//       <ul>
//         {restaurants
//           .filter(restaurant =>
//             restaurant.toLowerCase().includes(searchTerm.toLowerCase())
//           )
//           .map((restaurant, index) => (
//             <li key={index}>{restaurant}</li>
//           ))}
//       </ul>
//     </>
//   );
// };

// export default App;

