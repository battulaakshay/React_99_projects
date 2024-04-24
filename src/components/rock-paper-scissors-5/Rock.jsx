import React, { useState } from 'react';

const Rock = () => {
    const [userChoice, setUserChoice] = useState('rock');
    const [computerChoice, setComputerChoice] = useState('scissors');
    const [userScore, setUserScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [yourPoint, setYourPoint] = useState('');
    const [finalResult, setFinalResult] = useState('');
    const choices = ['rock', 'paper', 'scissors'];

    // Function to reset the game state
    const resetGame = () => {
        setUserChoice('rock');
        setComputerChoice('scissors');
        setUserScore(0);
        setComputerScore(0);
        setYourPoint('');
        setFinalResult('');
    };

    function handleOnClick(choice) {
        console.log('userChoice', choice);
        setUserChoice(choice);

        // Generate a random choice for the computer
        const randomIndex = Math.floor(Math.random() * choices.length);
        const computerChoiceValue = choices[randomIndex];
        console.log('ComputerChoice', computerChoiceValue);
        setComputerChoice(computerChoiceValue);

        // Check for a tie
        if (choice === computerChoiceValue) {
            console.log('Tie');
            setYourPoint("Tie!");
            return;
        }

        // Check the game result and update scores
        if (
            (choice === 'rock' && computerChoiceValue === 'scissors') ||
            (choice === 'scissors' && computerChoiceValue === 'paper') ||
            (choice === 'paper' && computerChoiceValue === 'rock')
        ) {
            // Increment the user score if the user wins
            setUserScore(prevUserScore => prevUserScore + 1);
            setYourPoint("You won!");
        } else {
            // Increment the computer score if the computer wins
            setComputerScore(prevComputerScore => prevComputerScore + 1);
            setYourPoint("Computer won!");
        }

        // Check if the user or computer has reached 5 points
        if (userScore + 1 === 5) {
            alert("User won the game!");
            resetGame();
        } else if (computerScore + 1 === 5) {
            alert("Computer won the game!");
            resetGame();
        }
    }

    return (
        <div className='bg-blue-400 w-screen h-screen flex flex-col items-center'>
            {/* h1 heading */}
            <div className='w-full flex justify-center'>
                <h1 className='text-2xl font-bold mt-5'>Rock-Paper-Scissors</h1>
            </div>

            {/* Div with max-width-md containing the h3 elements */}
            <div className='max-w-4xl p-6 flex justify-between w-full mt-10'>
                {/* Arrange the h3 elements apart using justify-between */}
                <h3 className='font-bold'>User Points: {userScore}</h3>
                <h3 className='font-bold'>Computer Points: {computerScore}</h3>
            </div>
            <div className='flex'>
                <img className='rotate-y-180' src={`src/components/rock-paper-scissors-5/images/${userChoice}.png`} alt={`${userChoice}`} />
                <img src={`src/components/rock-paper-scissors-5/images/${computerChoice}.png`} alt={`${computerChoice}`} />
            </div>
            <div className=''>
                {
                    choices.map((choice, index) =>
                        <button className='border rounded px-4 py-2 bg-pink-300 w-24 h-10' onClick={() => handleOnClick(choice)} key={index}>{choice}</button>
                    )
                }
            </div>
            <div className='mt-10'>
                <h1 className='font-bold'>Turn Result : {yourPoint}</h1>
                <h1 className='font-bold'>Final result : {finalResult}</h1>
            </div>
        </div>
    );
};

export default Rock;


















































// import React, { useState } from 'react'

// const Rock = () => {
//     const [userChoice, setUserChoice] = useState('rock')
//     const [computerChoice, setComputerChoice] = useState('scissors')
//     const [userScore, setUserScore] = useState(0)
//     const [computerScore, setComputerScore] = useState(0)
//     const [yourPoint, setYourPoint] = useState('')
//     const [finalResult, setFinalResult] = useState('')
//     const choices = [
//         'rock',
//         'paper',
//         'scissors'
//     ]
//     function handleOnClick(choice) {
//         console.log('userChoice', choice)
//         setUserChoice(choice)
//         const randomIndex = Math.floor(Math.random() * choices.length);
//         console.log('ComputerChoice', choices[randomIndex]);
//         setComputerChoice(choices[randomIndex]);











//         if (choice === (choices[randomIndex])) {
//             console.log('tie');
//             setYourPoint("tie!")
//             return;

//         }
//         else {


//             if (choice === 'rock' && (choices[randomIndex] === 'scissors') || (choice === 'scissors' && (choices[randomIndex] === 'paper')) || (choice === 'paper' && (choices[randomIndex] === 'rock'))) {
//                 setUserScore(userScore + 1)
//                 setYourPoint("You won!")
//             }
//             else {
//                 setComputerScore(computerScore + 1)
//                 setYourPoint("computer won!")

//             }
//         }
//         if(computerScore + 1 === 5){
//             setFinalResult("computer won!")
//         }
//         if(userScore + 1 === 5){
//             setFinalResult("user won!")
//         }


//     }


//     return (
//         <div className='bg-blue-400 w-screen h-screen flex flex-col items-center'>
//             {/* h1 heading */}
//             <div className='w-full flex justify-center'>
//                 <h1 className='text-2xl font-bold mt-5'>Rock-Paper-Scissors</h1>
//             </div>

//             {/* Div with max-width-md containing the h3 elements */}
//             <div className='max-w-4xl p-6 flex justify-between w-full mt-10'>
//                 {/* Arrange the h3 elements apart using justify-between */}
//                 <h3 className='font-bold'>User Points: {userScore}</h3>
//                 <h3 className='font-bold'>Computer Points: {computerScore}</h3>
//             </div>
//             <div className='flex'>
//                 <img className='rotate-y-180' src={`src/components/rock-paper-scissors-5/images/${userChoice}.png`} alt={`${userChoice}`} />
//                 <img src={`src/components/rock-paper-scissors-5/images/${computerChoice}.png`} alt={`${userChoice}`} />



//             </div>
//             <div className=''>
//                 {
//                     choices.map((choice, index) =>
//                         <button className='border rounded px-4 py-2 bg-pink-300 w-24 h-10' onClick={() => handleOnClick(choice)} key={index}>{choice}</button>
//                     )
//                 }

//             </div>
//             <div className='mt-10'>
//                 <h1 className='font-bold'>Turn Result : {yourPoint}</h1>
//                 <h1 className='font-bold'>Final result : {finalResult}</h1>


//             </div>

//         </div>)
// }

// export default Rock





