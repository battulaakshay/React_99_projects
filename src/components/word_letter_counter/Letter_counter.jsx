import React from 'react'

const Letter_counter = () => {
    handleInputChange(() => {
        
    });
    return (
        <div>
            <div className='flex flex-col justify-center bg-slate-500 h-screen w-screen font-medium '>
                <h1 className='flex justify-center font-medium '>Word and Letter Counter</h1>
                <textarea className='' 
                onChange={handleInputChange}
                ></textarea>
                <h1> word count :</h1>
            <h1>Letter Count :</h1>
            
            </div>

        </div>
    )
}

export default Letter_counter