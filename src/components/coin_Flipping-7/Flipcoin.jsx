import React, { useState } from 'react'
const images = [
    'https://dl.dropboxusercontent.com/s/egq9qqomnxtrc38/tail2.png?dl=0',
    'https://dl.dropbox.com/s/njys8e0n32ho51a/back.png?dl=0'
];


const Flipcoin = () => {
    const [randomImage,setRandomImage] = useState(null)  ;
       function flipRandom() {
        const randomIndex = Math.floor(Math.random() * images.length);
        console.log(randomIndex);
        setRandomImage(randomIndex);
}
  return (
    <div>
        <button onClick={flipRandom}>Flip Coin</button>
        {
            images[randomImage]
        }

        <img src={images[randomImage]}></img>
        
    </div>
  )
}

export default Flipcoin









// import React, { useState, useRef } from 'react';
// // import tossSound from './path-to-your-audio-file.mp3';

// const images = [
//     'https://dl.dropboxusercontent.com/s/egq9qqomnxtrc38/tail2.png?dl=0',
//     'https://dl.dropbox.com/s/njys8e0n32ho51a/back.png?dl=0'
// ];

// const Flipcoin = () => {
//     const [storingRandom, setStoringRandom] = useState(0);
//     const [storingImage, setStoringImage] = useState(images[0]);
//     const [isFlipping, setIsFlipping] = useState(false);
    
//     const audioRef = useRef(); // Reference to the audio element

//     // Function to flip a random coin
//     const fliprandom = () => {
//         // Play the toss sound when the coin is flipped
//         if (audioRef.current) {
//             audioRef.current.play();
//         }

//         // Generate a random index for the images array
//         const randomIndex = Math.floor(Math.random() * images.length);
//         setStoringRandom(randomIndex);
//         setStoringImage(images[randomIndex]);
        
//         // Set the flipping state to true for the animation
//         setIsFlipping(true);
        
//         // Reset the flipping state after the animation completes (1 second)
//         setTimeout(() => {
//             setIsFlipping(false);
//         }, 1000);
//     };

//     return (
//         <div className='w-screen h-screen text-white font-extrabold flex flex-col justify-center items-center'>
//             <h1 className='text-5xl mb-6'>Quiz App</h1>
//             <button onClick={fliprandom} className='mb-4 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded'>Flip</button>
            
//             {/* Display the current image of the coin */}
//             <img
//                 src={storingImage}
//                 alt='Coin'
//                 style={{
//                     animation: isFlipping ? 'flipCoin 1s ease-in-out' : 'none',
//                     width: '200px',
//                     height: '200px'
//                 }}
//             />
            
//             <h1 className='mt-4 bg-green-300'>{storingRandom === 0 ? 'Heads' : 'tails'}</h1>
            
//             {/* Include the audio element with the reference */}
//             {/* <audio ref={audioRef} src={tossSound} /> */}
//         </div>
//     );
// };

// export default Flipcoin;









// const [storingRandom, setStoringRandom] = useState(0);
// const [storingImage, setStoringImage] = useState(images[0]);

// // Function to flip a random coin
// const fliprandom = () => {
//     const randomIndex = Math.floor(Math.random() * images.length);
//     setStoringRandom(randomIndex);
//     setStoringImage(images[randomIndex]);
// };

// return (
//     <div>
//         <button onClick={fliprandom}>Flip</button>
//         <h1 className='bg-green-300'>{storingRandom}</h1>
//         <img src={storingImage} alt='Coin' />
//     </div>
// );























// import React, { useState } from 'react'
// const image = [
//     'https://dl.dropboxusercontent.com/s/egq9qqomnxtrc38/tail2.png?dl=0',
//     'https://dl.dropbox.com/s/njys8e0n32ho51a/back.png?dl=0'
// ]

// const Flipcoin = () => {
//     const [storingRandom, setStoringRandom] = useState(0)
//     cont[storingImage, setStoringImage] = useState('https://dl.dropboxusercontent.com/s/egq9qqomnxtrc38/tail2.png?dl=0',
//     )

//     function fliprandom() {
//         const random = Math.floor(Math.random() * image.length);
//         console.log(random)
//         setStoringRandom(random)
//     }
//     return (
//         <div>


//             <button onClick={fliprandom}>Flip </button>
//             <h1 className='bg-green-300'>{storingRandom}</h1>
//             if(storingRandom === 0){
//                 setStoringImage(() => <img src={'https://dl.dropboxusercontent.com/s/egq9qqomnxtrc38/tail2.png?dl=0'
//                 }></img>)

//             }
//             else(
//               setStorImage(() => <img src={'https://dl.dropbox.com/s/njys8e0n32ho51a/back.png?dl=0'
//             })
//             )




//         </div>
//     )
// }

// export default Flipcoin