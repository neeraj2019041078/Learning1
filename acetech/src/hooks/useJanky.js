/// Janky ui and smooth ui

// import React, { useState } from 'react'

// const useJanky = () => {
//     const [value, setValue] = useState('');
//     const [res,setRes]=useState(null);
//     const handleClick=()=>{
//         let sum=0;
//         for(let i=0;i<10;i++){
//             sum+=i;       
//          }
//          setRes(sum);
//     }

//     const handleval=(e)=>{
//       setValue(e.target.value)
//     }
//   return (
//    <>
//     <input type='text' value={value} onChange={handleval} placeholder='Enter a Vale' />
//     <button onClick={handleClick} > Click</button>
//     <h1>Res:::::::::{res}</h1>

//    </>
//   )
// }

// export default useJanky;
// import React, { useState } from 'react';

// function SmoothUI() {
//     const [input, setInput] = useState('');
//     const [result, setResult] = useState(null);

//     const handleChange = (e) => {
//         setInput(e.target.value);
//     };

//     const handleCalculation = () => {
//         setResult('Calculating...');
//         // Offloading heavy calculation using setTimeout
//         setTimeout(() => {
//             let sum = 0;
//             for (let i = 0; i < 1000000000; i++) {
//                 sum += i;
//             }
//             setResult(sum);
//         }, 100000000000000000);
//     };

//     return (
//         <div>
//             <h1>Smooth UI</h1>
//             <input 
//                 type="text" 
//                 value={input} 
//                 onChange={handleChange} 
//                 placeholder="Type while calculating..." 
//             />
//             <button onClick={handleCalculation}>Calculate</button>
//             <p>Result: {result}</p>
//         </div>
//     );
// }

// export default SmoothUI;
