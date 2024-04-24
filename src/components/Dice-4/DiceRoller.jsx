import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';

const DiceRoller = () => {
    // Array of Font Awesome dice icons
    const diceImages = [
        faDiceOne,
        faDiceTwo,
        faDiceThree,
        faDiceFour,
        faDiceFive,
        faDiceSix
    ];

    // State variable to store the current dice face
    const [currentDice, setCurrentDice] = useState(diceImages[0]);

    // Function to roll the dice
    const rollDice = () => {
        // Randomly select an index from 0 to 5
        const randomIndex = Math.floor(Math.random() * 6);
        // Update the state variable with the selected icon
        setCurrentDice(diceImages[randomIndex]);
    };

    return (
        <div className="dice-roller">
            <h1>Dice Roller</h1>
            {/* Display the current dice face */}
            <div className="dice-face">
                <FontAwesomeIcon icon={currentDice} size="4x" />
            </div>
            {/* Button to roll the dice */}
            <button onClick={rollDice}>Roll Dice</button>
        </div>
    );
};

export default DiceRoller;



























