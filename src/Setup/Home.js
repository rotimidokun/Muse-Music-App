import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Header from './Header';

const Home = () => {
    return (
        <div className="container">
            <Header />
            <div className="imageHolder">
                <img src="bg.jpg" alt="Background Image" className="bgImage" />
            </div>

            <div className="linkHolder">
                <Link to="/topalbum" className="footer">Top Albums</Link>
                <Link to="/topsong" className="footer">Top Songs</Link>
            </div>
            
        </div>
    );
}

export default Home;
