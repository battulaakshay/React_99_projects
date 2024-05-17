import React from 'react'

const Box = () => {
  return (
    <div className='w-screen h-screen flex flex-wrap'>Box</div>
  )
}

export default Box



// import React, { useState, useEffect } from 'react';

// const generateRandomColor = () => {
//     // Function to generate a random hex color
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// };

// const App = () => {
//     // Number of boxes in the grid
//     const numBoxes = 16; // Adjust as needed

//     // State variable to store colors of boxes
//     const [boxColors, setBoxColors] = useState([]);

//     // Generate random colors for each box when the app loads
//     useEffect(() => {
//         const initialColors = Array.from({ length: numBoxes }, () => generateRandomColor());
//         setBoxColors(initialColors);
//     }, []);

//     // Handle click on a box
//     const handleBoxClick = (index) => {
//         // Generate a new random color
//         let newColor;
//         do {
//             newColor = generateRandomColor();
//         } while (newColor === boxColors[index]); // Ensure new color is different from the current color

//         // Update the color of the clicked box
//         const updatedColors = [...boxColors];
//         updatedColors[index] = newColor;
//         setBoxColors(updatedColors);
//     };

//     return (
//         <div className='w-screen h-screen flex flex-wrap'>
//             {boxColors.map((color, index) => (
//                 <div
//                     key={index}
//                     className='w-1/4 h-1/4' // Adjust the width and height as needed
//                     style={{ backgroundColor: color }}
//                     onClick={() => handleBoxClick(index)}
//                 ></div>
//             ))}
//         </div>
//     );
// };

// export default App;
