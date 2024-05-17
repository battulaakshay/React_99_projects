

import React, { useState } from 'react';
import axios from 'axios';

const Food = () => {
    const [inputDishName, setInputDishName] = useState('');
    const [recipes, setRecipes] = useState([]); // State variable to store the list of recipes

    const appId = '92363dd4';
    const appKey = '4c59623230b48e6d26101234956c80cf';

    // Handle input change for the dish name
    const handleDishNameChange = (event) => {
        setInputDishName(event.target.value);
    };

    // Fetch recipes from the Edamam API
    const fetchRecipes = () => {
        axios.get(`https://api.edamam.com/search?q=${inputDishName}&app_id=${appId}&app_key=${appKey}`)
            .then(response => {
                // Access the hits array from the API response
                const hits = response.data.hits;
                // Update the recipes state variable with the list of recipes
                setRecipes(hits);
                console.log(hits);
            })
            .catch(error => {
                console.error('Error fetching recipes:', error);
            });
    };

    return (
        <div className='bg-red-200 w-screen h-screen flex flex-col justify-center items-center'>
            {/* Input and button for searching recipes */}
            <div className='w-1/2 flex flex-col mb-6'>
                <input
                    className='px-4 py-4 border rounded shadow mb-3'
                    type='text'
                    placeholder='Enter Dish Name'
                    value={inputDishName}
                    onChange={handleDishNameChange}
                />
                <button
                    onClick={fetchRecipes}
                    className='w-1/2 bg-red-300 hover:bg-blue-300 hover:text-white px-4 py-4 rounded shadow'
                >
                    Search
                </button>
            </div>

            {/* Display the list of recipes */}
            <div className='w-1/2'>
                {recipes.map((hit, index) => (
                    <div key={index} className='mb-4 p-4 bg-white border rounded'>
                        <h3>{hit.recipe.label}</h3> {/* Display recipe name */}
                        <img src={hit.recipe.image} alt={hit.recipe.label} className='w-40 h-40 rounded' /> {/* Display recipe image */}
                        <ul>
                            {

                                hit.recipe.ingredients.map((i,idx)=>(
                                    <li key={idx}> {i.text} </li>
                                ))
                            }

                        </ul>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Food;





// import React, { useState } from 'react'
// import axios from 'axios'

// const Food = () => {
//     const [inputDishName, setInputDishName] = useState('')
//     const [query, setQuery] = useState('chicken')
//     const [stringifiedData, setStringifiedData] = useState('');

//     const appId = '92363dd4'
//     const appKey = '4c59623230b48e6d26101234956c80cf'
//     function changingDishName(event) {
//         setInputDishName(event.target.value)

//     }
//     function requestApi() {
//         {
//             axios.get(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`)
//             .then(response =>{
//                 console.log(response.data.hits)
//                 const dataString = JSON.stringify(response.data.hits, null, 2);
//                 // Store the stringified data in a state variable
//                 setStringifiedData(dataString);
//             })
//         }

//     }
//     return (
//         <div className='bg-red-200 w-screen h-screen flex justify-center items-center'>

//             <div className='bg-green-300 ' >
//                 <input
//                     className='px-4 py-4 border rounded shadow '
//                     type="text"
//                     placeholder='Enter Dish Name'
//                     input={inputDishName}
//                     onChange={changingDishName}


//                 />
//             </div>
//             <div>
//                 <button onClick={requestApi}>Search</button>
//                 {inputDishName}
//                 {stringifiedData}
//             </div>





//         </div>
//     )
// }

// export default Food
























// // 92363dd4 App ID

// // 4c59623230b48e6d26101234956c80cf	— App key
// //https://api.edamam.com/search?q=&app_id=92363dd4&app_key=4c59623230b48e6d26101234956c80cf


// import React, { useState } from 'react';
// import axios from 'axios';

// const Food = () => {
//     // Replace with your own application ID and API key from Edamam
//     const appId = '92363dd4';
//     const appKey = '4c59623230b48e6d26101234956c80cf';

//     // State variables
//     const [query, setQuery] = useState('');
//     const [recipes, setRecipes] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     // Handle search input change
//     const handleQueryChange = (event) => {
//         setQuery(event.target.value);
//     };

//     // Fetch recipes from the Edamam API
//     const fetchRecipes = () => {
//         setLoading(true);
//         setError(null);

//         const apiUrl = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;

//         axios.get(apiUrl)
//             .then(response => {
//                 // Update state with the fetched recipes
//                 setRecipes(.recipe);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 // Handle errors
//                 setError('Failed to fetch recipes');
//                 setLoading(false);
//             });
//     };

//     return (
//         <div className='w-screen h-screen flex flex-col justify-center items-center bg-green-200'>
//             {/* Search input and button */}
//             <div className='w-1/2 flex flex-col'>
//                 <input
//                     className='mb-3 px-4 py-4 border shadow-lg rounded-lg'
//                     type='text'
//                     placeholder='Enter dish name'
//                     value={query}
//                     onChange={handleQueryChange}
//                 />
//                 <button
//                     onClick={fetchRecipes}
//                     className='w-1/2 bg-red-300 hover:bg-blue-300 hover:text-white m-auto px-4 py-4 rounded shadow-2xl animate-pulse'
//                 >
//                     Search
//                 </button>
//             </div>

//             {/* Display loading state */}
//             {loading && <p>Loading...</p>}

//             {/* Display error message */}
//             {error && <p className='text-red-500'>{error}</p>}

//             {/* Display recipes */}
//             <div className='w-1/2'>
//                 {recipes.map((recipe, index) => (
//                     <div key={index} className='mb-4'>
//                         <h2 className='text-lg font-semibold'>{recipe.recipe.label}</h2>
//                         <img src={recipe.recipe.image} alt={recipe.recipe.label} className='w-40 h-40 rounded' />
//                         <p>Calories: {Math.round(recipe.recipe.calories)}</p>
//                         <a href={recipe.recipe.url} target='_blank' rel='noopener noreferrer' className='text-blue-500'>
//                             View Recipe
//                         </a>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Food;
