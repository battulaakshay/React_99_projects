import React, { useState } from 'react'
import axios from 'axios';


const Filejoke = () => {
    const[storeJoke,setStoreJoke] = useState('')
 
    function showJoke(){
        axios.get("https://official-joke-api.appspot.com/random_joke")
        .then((response) => {
            response.data.type
            console.log(response.data.setup)
            setStoreJoke(response.data.setup);

        
        })
        .catch((error) => {
            console.error(error );
    })
    }
  return (
        <div className='bg-green-500 h-screen flex flex-col justify-center items-center'>
<h2>{storeJoke}</h2>
    <button onClick={showJoke} className='border px-4 py-2 rounded-lg bg-gray-300 hover:bg-blue-500 text-black hover:text-white shadow-lg mt-6'>click here to generate new Joke</button>
  </div>
  )
}

export default Filejoke

















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Filejoke = () => {
//     // State variable to store the joke from the API
//     const [store, setStore] = useState('');

//     // Fetch a random joke from the API when the component mounts
//    const  fetchJoke = ()=> {
//         useEffect(() => {
//             axios.get("https://official-joke-api.appspot.com/random_joke")
//                 .then((response) => {
//                     // Update the state variable with the joke setup
//                     setStore(response.data.setup);
//                 })
//                 .catch((error) => {
//                     console.error("Error fetching joke:", error);
//                 });
//         },
        
//         useEffect(() => {
//             fetchJoke();
//         }, []);
        
        
    
   
//     return (
//         <div className='bg-green-500 h-screen flex flex-col justify-center items-center'>
//             {/* Display the joke stored in the state variable */}
//             <h2>{store}</h2>

//             {/* Button to generate a new joke */}
//             <button
//                 onClick={fetchJoke}
//                 className='border px-4 py-2 rounded-lg bg-gray-300 hover:bg-blue-500 text-black hover:text-white shadow-lg mt-6'
//             >
//                 Click to generate a Joke
//             </button>
//         </div>
//     );
// };

// export default Filejoke;


























// import React, { useEffect, useState } from 'react'
// import jokes from './jokes'
// import axios from 'axios';
// const [store, setStore] = useState('akshay')


// const Filejoke = () => {

//     // useEffect(() => {
//     //     axios.get("https://official-joke-api.appspot.com/random_joke")
//     //         .then((response) => {
//     //             // Update the state variable with the joke setup
//     //             setStore(response.data.setup);
//     //         })
//     //         .catch((error) => {
//     //             console.error("Error fetching joke:", error);
//     //         });
//     // }, []);






//     useEffect(() => {
//         axios.get("https://official-joke-api.appspot.com/random_joke")
//             .then((response) => {
//                 console.log(response.data.setup)
//                 setStore(response.data.setup)
//             }
//             )
//             .catch((error) => {
//                 console.error("Error fetching joke:", error);
//             });
//     }, []);

//     return (
//         <div className=' bg-green-500 h-screen flex flex-col justify-center items-center'>

//             <button className='border px-4 py-2 rounded-lg bg-gray-300 hover:bg-blue-500 text-black hover:text-white shadow-lg mt-6 '>Click to generater a Joke</button>
//         </div>
//     )
// }

// export default Filejoke



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const JokeComponent = () => {
//     // State to store the joke
//     const [joke, setJoke] = useState('');

//     // Function to fetch a joke from the API
//     const fetchJoke = async () => {
//         try {
//             // Make a GET request to the joke API
//             const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
//             // Update the joke state with the joke from the API response
//             setJoke(`${response.data.setup} - ${response.data.punchline}`);
//         } catch (error) {
//             console.error('Error fetching joke:', error);
//         }
//     };

//     // Use the useEffect hook to fetch a joke when the component mounts
//     useEffect(() => {
//         fetchJoke();
//     }, []);

//     // Return JSX to display the joke and a button to fetch a new joke
//     return (
//         <div>
//             <h2>Random Joke</h2>
//             <p>{joke}</p>
//             <button onClick={fetchJoke}>Get a new joke</button>
//         </div>
//     );
// };

// export default JokeComponent;

