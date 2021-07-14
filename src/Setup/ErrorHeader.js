import React from 'react'
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorHeader = () => {
    return (
        <div className="errorHeader">
            <Link to="/" className="errorLogo"> Muse </Link>
        </div>
    )
}

export default ErrorHeader;
