import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div className="border-b-4 border-green-700 text-centre fixed top-0 w-full bg-green-600
        font-bold text-lg text-white ">
            <ul>
            <li className='inline-block pt-4 pb-4'>
                    <Link to="/home" className="pt-4 pb-4" >
                        Home
                    </Link>
                </li> 

                <li className='inline-block pt-4 pb-4'>
                    <Link to="/about" className="pt-4 pb-4" >
                        About
                    </Link>
                </li>
                
                <li className='inline-block pt-4 pb-4'>
                    <Link to="/article" className="pt-4 pb-4" >
                        Article
                    </Link>
                </li>

                <li className='inline-block pt-4 pb-4'>
                    <Link to="/articles-list" className="pt-4 pb-4" >
                        ArticlesList
                    </Link>
                </li>

            </ul>

        </div>
    );
}

export default NavBar