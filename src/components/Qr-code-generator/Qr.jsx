import React from 'react'

const Qr = () => {
    return (
        <div className='w-full h-full bg-slate-600 flex justify-center flex-col items-center '>

            <div className='flex justify-center flex-col'><h1 className='text-white text-2xl font-bold'>Qr Code Generator</h1>             </div>


            <div>
                <div>
                    <input
                        type="text"
                        className='px-4 py-4 border-black shadow rounded-l-0 w-[400px]'
                        placeholder='Enter your Text'
                    />
                    <button className=' bg-green-600 border shadow px-4 py-4 text-white'>Generate</button>
                </div>
                <div className='flex items-start justify-start'>
                    <label for="favcolor">Background color:</label>
                    <input type="color" id="favcolor" name="favcolor" value="#ff0000" />
                    <label for="favcolor">Dimension:</label>

                    <input type="range" min="1" max="100" value="50" />


                </div>
            </div>
        </div>
    )
}

export default Qr