import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import Show from '../show/Show';


const Topics = () => {
    const questions = useLoaderData([]);
    
    const showQuiz = (id) => {
        // console.log(id);
        fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
            .then(rsp => rsp.json())
            .then(data => data)
            // .then(data => console.log(data))
    }
    return (
        <div>
            <div className='my-8 lg:grid grid-cols-3 mx-20'>
                {
                    questions.data.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                        showQuiz={showQuiz}
                    ></Quiz>)
                }
            </div>
            <div>
                {
                    <Show
                    showQuiz={showQuiz}
                    ></Show>
                }
            </div>
        </div>
    );
};

export default Topics;