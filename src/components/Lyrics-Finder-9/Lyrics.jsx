import React, { useState } from 'react';
import axios from 'axios';

const Lyrics = () => {

    const [artist, setArtist] = useState('');
    const [title, setTitles] = useState('');
    const [storingSong, setStoringSong] = useState('');

    function changingInput(event) {
        console.log(event.target.value);
        setArtist(event.target.value);
    }

    function titleChange(event) {
        setTitles(event.target.value);
        console.log(event.target.value);
    }

    function getData() {
        axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`)
            .then(response => {
                // Handle the successful response
                console.log(response.data.lyrics);
                setStoringSong(response.data.lyrics);
            })
            .catch(error => {
                // Handle errors
                console.error(error);
            });
    }

    return (
        <div className='w-screen h-screen bg-green-200 flex justify-center items-center flex-col'>
            <div className='w-1/4 flex flex-col'>
                <input
                    className='mb-3 px-4 py-4 border shadow-lg rounded-lg'
                    value={artist}
                    onChange={changingInput}
                    type="text"
                    placeholder='Enter artist name'
                />
                <input
                    className='mb-3 px-4 py-4 border shadow-lg rounded-lg'
                    value={title}
                    onChange={titleChange}
                    type="text"
                    placeholder='Enter title of song'
                />
                <button onClick={getData} className='w-1/2 bg-red-300 hover:bg-blue-300 hover:text-white m-auto px-4 py-4 active:bg-yellow-300 rounded shadow-2xl animate-pulse'>Search</button>
            </div>
            <div className='w-[600px] h-screen'>
                <p>Artist: {artist}</p>
                <p>Title: {title}</p>

                {/* Display lyrics using a <pre> element to preserve formatting */}
                <pre>{storingSong}</pre>
            </div>
        </div>
    );
}

export default Lyrics;






































// import React, { useState } from 'react'
// import axios from 'axios';


// const Lyrics = () => {

//     const[artist,setartist] = useState('')
//     const[storingSong,setStoringSong] = useState('')
//     const [title,setTitles] = useState('')
//     function changingInput(event){
// console.log(event.target.value)          
// setartist(event.target.value)             
//     }
//     function titleChange(event){
//         setTitles(event.target.value)
//         console.log(event.target.value)
//     }
// function getData(){
//     {
//         axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`
//     )
//         .then(response => {
//             // Handle the successful response
//             console.log(response.data.lyrics);

//             setStoringSong(response.data.lyrics);

//         })
//         .catch(error => {
//             // Handle errors
//             console.error(error);
//         });
    
//     }

// }
//     return (
//         <div className='w-screen h-screen bg-green-200 flex justify-center items-center flex-col'>
//             <div className='w-1/4  flex flex-col'>
//                 <input
//                     className=' mb-3 px-4 py-4 border shadow-lg rounded-lg'
//                     input = {artist}
//                     onChange={changingInput}
//                     type="text"
//                     placeholder='Enter artist name'


//                 />
//                 <input
//                     className=' mb-3 px-4 py-4 border shadow-lg rounded-lg '
//                     input = {title}
//                     onChange={titleChange}

//                     type="text"
//                     placeholder='Enter artist of Song'



//                 />
//                 <button onClick={getData} className='w-1/2 bg-red-300 hover:bg-blue-300 hover:text-white m-auto px-4 py-4  active:bg-yellow-300 rounded shadow-2xl animate-pulse'>Search</button>




//             </div>
//             <div className='w-[600px] h-screen'>
//             <p>artist: {artist}</p>
//             <p>title: {title}</p>


//             <p>{storingSong}</p>
//             </div>
      


//         </div>
//     )
// }

// export default Lyrics













































// import React, { useState } from 'react';
// import axios from 'axios';

// const Lyrics = () => {
//     const [song, setSong] = useState('');
//     const [artist, setArtist] = useState('');
//     const [lyrics, setLyrics] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     // Handle the search input changes
//     const handleSongChange = (e) => setSong(e.target.value);
//     const handleArtistChange = (e) => setArtist(e.target.value);

//     // Function to fetch lyrics from the API
//     const fetchLyrics = async () => {
//         setLoading(true);
//         setError('');
//         setLyrics('');

//         try {
//             const response = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`);
//             setLyrics(response.data.lyrics);
//         } catch (error) {
//             setError('Lyrics not found or an error occurred');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <h1>Song Lyrics Finder</h1>

//             {/* Search inputs and button */}
//             <div>
//                 <input type='text' placeholder='Song' value={song} onChange={handleSongChange} />
//                 <input type='text' placeholder='Artist' value={artist} onChange={handleArtistChange} />
//                 <button onClick={fetchLyrics}>Search</button>
//             </div>

//             {/* Display loading state */}
//             {loading && <p>Loading...</p>}

//             {/* Display lyrics or error */}
//             {lyrics && <pre>{lyrics}</pre>}
//             {error && <p>{error}</p>}
//         </div>
//     );
// };

// export default Lyrics;
