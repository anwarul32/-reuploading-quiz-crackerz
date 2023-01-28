import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className=''>
            <div className='bg-gray-400 py-2'>
            <div className='flex justify-between mx-20'>
                <div className='logo font-bold'>
                    <Link to='/'>Check-Quiz</Link>
                </div>
                <nav className="flex gap-x-3 font-bold">
                    <Link to='/'>Topics</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/about'>About</Link>
                </nav>
            </div>
            </div>
            <div className="header mx-20 my-6 grid grid-cols-2 ">
                <div className='header-bg'></div>
                <div className='header-text text-4xl '>
                    <p>A quiz is a form of game or mind sport in which players attempt to answer questions correctly about a certain or variety of subjects. Quizzes can be used as a brief assessment in education and similar fields to measure growth in knowledge, abilities, or skills</p>
                </div>
            </div>
        </div>
    );
};

export default Header;