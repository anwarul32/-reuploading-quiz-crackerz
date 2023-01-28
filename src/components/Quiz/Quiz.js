import React from 'react';

const Quiz = ({ quiz, showQuiz }) => {
    const { id, name, logo, total } = quiz;
    return (
        <div className='my-4 w-full'>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
            <img src={logo} alt="" className="object-cover object-center w-full rounded-md h-72 bg-black" />
            <div className="mt-6 mb-2 flex justify-between">
                <h2 className="text-xl font-semibold tracking-wide py-3">{name}</h2>
                <p className='py-3'><small>Total: {total}</small></p>
                <button onClick={ () => showQuiz(id)}
                type="button" className="px-8 py-3 font-semibold rounded-full bg-blue-200 dark:text-gray-800 ">Start</button>
            </div>
        </div>
        </div>
    );
};

export default Quiz;