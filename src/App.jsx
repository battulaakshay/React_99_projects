
import React, { useState } from 'react';
import JokeComponent from './components/Random_joke_app-2/Filejoke';
import Filejoke from './components/Random_joke_app-2/Filejoke';
import Map from './components/Ip_address_finder-3/Map';
import Rock from './components/rock-paper-scissors-5/Rock';
import Formsample from './components/Form-1/FormSample';
import DiceRoller from './components/Dice-4/DiceRoller';
import Todo from './components/to-do/Todo';
import Quizapp from './components/Quiz_App-6/Quizapp';
import Flipcoin from './components/coin_Flipping-7/Flipcoin';
import Box from './components/color-Box-app/Box';
import Lyrics from './components/Lyrics-Finder-9/Lyrics';
import Food from './components/Food-recipe-app/Food';
import Qr from './components/Qr-code-generator/Qr';
import Word_letter from './components/word_letter_counter/word_letter';


const App = () => {
  const [fm,setFm]=useState(true);
   function toggleForm(){
    setFm( prev => prev === false ? true : false);
    // setFm(prev=>!prev);
   }

    return (
     <div>
    {/* <Filejoke/> */}
      {/* <JokeComponent/> */}

      {/* <Formsample/> */}


      {/* <button onClick={toggleForm} className='border px-2 py-4 bg-yellow-400'>Toggle</button>
      {fm ? <Formsample /> : <Form/>} */}
{/* <DiceRoller/> */}
      {/* <Map/> */}



      {/* project-5 */}
    {/* <Rock/> */}
    {/* project-6 */}
    {/* <Todo/> */}
    {/* project-7 */}
    {/* <Quizapp/> */}
    {/* project-8 */}
    {/* <Flipcoin/> */}
    {/* project-9 */}
    {/* <Box/> */}
    {/* project-9 */}
    {/* <Lyrics/> */}
    {/* project-10 */}
    {/* <Food/> */}
    {/* project-11 */}
    {/* <Qr/> */}
    {/* project-12 */}
    <Word_letter/>
      
     </div>
    );
};

export default App;


