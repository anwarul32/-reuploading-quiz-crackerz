import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';


const Show = ({showQuiz}) => {
    const {id} = showQuiz;
    console.log(id);
    //  const shows = useLoaderData({id});
    return (
        <div>


            {/* {
                shows.filter(see => <Question
                key={see.id}
                shows={shows}
                ></Question>)
            } */}
        </div>
    );
};

export default Show;