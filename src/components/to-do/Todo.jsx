import React, { useState } from 'react';

const Todo = () => {
    const [inputValue, setInputValue] = useState(''); // State variable for input value
    const [items, setItems] = useState([]); // State variable for the list of added items

    // Function to handle input changes
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // Function to add an item to the list
    const addItem = () => {
        if (inputValue.trim() !== '') {
            // Add the new item to the items array
            setItems((prevItems) => [...prevItems, inputValue]);
            setInputValue(''); // Clear the input field after adding the item
        }
    };

    // Function to delete an item from the list
    const deleteItem = (index) => {
        setItems((prevItems) => prevItems.filter((_, idx) => idx !== index));
    };

    // Function to update an item in the list (you can add your update logic here)
    const updateItem = (index) => {
        // Prompt the user for the new input
        const newInput = prompt('Please enter the new value for the item:', items[index]);
    
        // Check if the user provided a new input
        if (newInput !== null) {
            // Update the item in the list
            setItems((prevItems) => {
                const updatedItems = [...prevItems];
                updatedItems[index] = newInput;
                return updatedItems;
            });
        }
    };
    

    return (
        <div className='w-screen h-screen bg-green-400 flex flex-col justify-center items-center'>
            <div className='bg-yellow-200 w-1/3 px-4 py-4 rounded-md'>
                <input
                    className='px-4 py-4 rounded-md w-full'
                    type='text'
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder='Add item...'
                />
                <button
                    className='border bg-green-300 hover:bg-slate-500 hover:text-white mt-3 py-2 px-4 rounded-md'
                    onClick={addItem}
                >
                    Add item
                </button>
            </div>
            <div className='w-1/3'>
                {/* Display the list of added items */}
                {items.map((item, index) => (
                    <div key={index} className='bg-red-200 w-full h-20 flex justify-between px-4 mt-4 items-center rounded-md shadow-lg'>
                        {/* Display item text */}
                        <span>{item}</span>
                        {/* Container for Delete and Update buttons */}
                        <div>
                            <button
                                className='border bg-green-300 hover:bg-slate-500 hover:text-white px-4 py-3 rounded-md ml-2'
                                onClick={() => deleteItem(index)}
                            >
                                Delete
                            </button>
                            <button
                                className='border bg-green-300 hover:bg-slate-500 hover:text-white px-4 py-3 rounded-md ml-2'
                                onClick={() => updateItem(index)}
                            >
                                Update
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Todo;











































// import React, { useState } from 'react';

// const Todo = () => {
//     const [inputValue, setInputValue] = useState(''); // State variable for input value
//     const [items, setItems] = useState([]); // State variable for the list of added items

//     // Function to handle input changes
//     const handleInputChange = (event) => {
//         setInputValue(event.target.value);
//     };

//     // Function to add an item to the list
//     const addItem = () => {
//         if (inputValue.trim() !== '') {
//             // Add the new item to the items array
//             setItems((prevItems) => [...prevItems, inputValue]);
//             setInputValue(''); // Clear the input field after adding the item
//         }
//     };

//     return (
//         <div className='w-screen h-screen bg-green-400 flex flex-col justify-center items-center'>
//             <div className='bg-yellow-200 w-1/3 px-4 py-4 rounded-md'>
//                 <input
//                     className='px-4 py-4 rounded-md w-full'
//                     type='text'
//                     value={inputValue}
//                     onChange={handleInputChange}
//                     placeholder='Add item...'
//                 />
//                 <button
//                     className='border bg-green-300 hover:bg-slate-500 hover:text-white mt-3 py-2 px-4 rounded-md'
//                     onClick={addItem}
//                 >
//                     Add item
//                 </button>
//             </div>
//             <div className=' w-1/3'>
//                 {/* Display the list of added items */}
//                 {items.map((item, index) => (
//                     <div key={index} className='bg-red-200 w-full h-18 flex  px-4 mt-4 items-center rounded-md shadow-lg'>
//                         {item}
//                         <button className='border bg-green-300 hover:bg-slate-500 hover:text-white mt-3 py-2 px-4 rounded-md flex  justify-center m-auto mb-2 items-center'>Delete</button>
//                         <button className='border bg-green-300 hover:bg-slate-500 hover:text-white mt-3 py-2 px-4 rounded-md'>Update</button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Todo;














































// import React from 'react'
// import { useState } from 'react'

// const Todo = () => {
//     const [inputValue, setInputValue] = useState(''); // State variable for input value
//     const [showing, setShowing] = useState('');

//     function handleInputChange(event) {
//          setInputValue(event.target.value);
//          console.log(event.target.value);
//     }
//     function addItem() {
//         setShowing(inputValue);
//         setInputValue(''); 
//     }


//     return (
//         <div className='w-screen h-screen bg-green-400 flex flex-col justify-center items-center'>
//             <div className='bg-yellow-200 w-1/3 px-4 py-4  rounded-md'>
//                 <input
//                     className='px-4 py-4  rounded-md w-full'
//                     type='text'
//                     value={inputValue}
//                     onChange={handleInputChange} // Attach event handler for input changes
//                     placeholder='Add item...'

//                 />
//                 <button className='border bg-green-300 hover:bg-slate-500 hover:text-white mt-3 py-2 px-4 rounded-md' onClick={addItem}>Add item</button>

//             </div>
//             <div className='bg-red-200 w-1/3 h-10 flex justify-start px-4 mt-4 items-center rounded-md shadow-lg '>

//                 {showing}
//             </div>


//         </div>
//     )
// }

// export default Todo



















// import React, { useState } from 'react';

// const Todo = () => {
//     const [inputValue, setInputValue] = useState(''); // State variable for input value
//     const [showing, setShowing] = useState('');

//     // Function to handle input changes
//     const handleInputChange = (e) => {
//         setInputValue(e.target.value);
//         console.log(e.target.value);
//     };

//     // Function to handle adding an item
//     const addItem = () => {
//         setShowing(inputValue);
//         setInputValue(''); // Clear the input field after adding the item
//     };

//     return (
//         <div className='w-screen h-screen bg-green-300 flex flex-col justify-center items-center'>
//             <div className='flex items-center py-4 px-2 border rounded-md shadow-lg w-2/3'>
//                 {/* "Add" button placed at the left starting of the input box */}
//                 <button
//                     className='bg-white hover:bg-slate-600 hover:text-white px-4 py-2 border rounded-md shadow-lg'
//                     onClick={addItem}
//                 >
//                     Add
//                 </button>
//                 <input
//                     className='ml-2 flex-grow py-2 px-2 border rounded-md'
//                     type='text'
//                     value={inputValue}
//                     onChange={handleInputChange} // Attach event handler for input changes
//                     placeholder='Add item...'
//                 />
//             </div>
//             <div className='w-2/3 py-4 px-2 border rounded-md shadow-lg mt-5'>
//                 {/* Showing data div set to the full length of the input box */}
//                 {showing}
//             </div>
//         </div>
//     );
// };

// export default Todo;
