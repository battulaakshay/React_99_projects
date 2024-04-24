
import React, { useState } from 'react';
import JokeComponent from './components/Random_joke_app-2/Filejoke';
import Filejoke from './components/Random_joke_app-2/Filejoke';
import Map from './components/Ip_address_finder-3/Map';
import Rock from './components/rock-paper-scissors-5/Rock';
import Formsample from './components/Form-1/FormSample';
import DiceRoller from './components/Dice-4/DiceRoller';


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
    <Rock/>
      
/     </div>
    );
};

export default App;


