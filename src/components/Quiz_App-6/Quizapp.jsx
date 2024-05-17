import React, { useState } from 'react';
import qBank from './Questionbank';

const Quizapp = () => {
    // State variable to track the user's selected options for each question
    const [selectedOptions, setSelectedOptions] = useState({});

    // Function to handle the selection of a radio button
    const handleOptionChange = (questionIndex, selectedOption) => {
        // Update the selected options state
        setSelectedOptions((prevSelectedOptions) => ({
            ...prevSelectedOptions,
            [questionIndex]: selectedOption,
        }));
    };

    // Function to check if the user's selection matches the correct answer
    const checkAnswer = (questionIndex) => {
        const selectedOption = selectedOptions[questionIndex];
        const correctAnswer = qBank[questionIndex].answer;
        
        // Compare the selected option with the correct answer
        if (selectedOption === correctAnswer) {
            console.log('hi');
        }
    };

    return (
        <div className='w-screen h-screen bg-black text-white font-extrabold flex flex-col justify-center items-center'>
            <h1 className='text-5xl'>Quiz App</h1>
            <ul>
                {qBank.map((question, index) => (
                    <li key={index}>
                        <div className='flex'>
                            <h1 className='mr-2'>{index + 1}</h1>
                            <p>{question.question}</p>
                        </div>
                        <ul>
                            {question.options.map((option, idx) => (
                                <li key={idx}>
                                    <input
                                        type='radio'
                                        name={`question-${index}`}
                                        value={option}
                                        checked={selectedOptions[index] === option}
                                        onChange={(e) => handleOptionChange(index, e.target.value)}
                                    />
                                    <label>{option}</label>
                                </li>
                            ))}
                        </ul>
                        {/* Check the answer and print "hi" in the console if it matches */}
                        <button onClick={() => checkAnswer(index)}>
                            Check Answer
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Quizapp;













































// import React, { useState } from 'react';
// import qBank from './Questionbank';

// const Quizapp = () => {
//     const [touchedOption, setTouchedOption] = useState('');

//     // Function to handle the selection of a radio button
//     const handleOptionChange = (event) => {
//         // Update the state variable with the selected value
//         setTouchedOption(event.target.value);
//         console.log('Selected option:', event.target.value); // Debugging output
//     };

//     return (
//         <div className='w-screen h-screen bg-black text-white font-extrabold flex flex-col justify-center items-center'>
//             <h1 className='text-5xl'>Quiz App</h1>
//             <ul>
//                 {qBank.map((question, index) => (
//                     <li key={index}>
//                         <div className='flex'>
//                             <h1 className='mr-2'>{index + 1}</h1>
//                             <p>{question.question}</p>
//                         </div>
//                         <ul>
//                             {question.options.map((option, idx) => (
//                                 <li key={idx}>
//                                     <input
//                                         type='radio'
//                                         name={`question-${index}`}
//                                         value={option}
//                                         checked={touchedOption === option}
//                                         onChange={handleOptionChange}
//                                     />
//                                     <label>{option}</label>
//                                 </li>
//                             ))}
//                         </ul>
//                         <ul>
//                             if(touchedOption === question.answer){
//                                 console.log(Akshay)

//                             }



//                         </ul>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Quizapp;

