import './ErrorPage.css'
import { Link } from 'react-router-dom'
import React from 'react'
import ErrorHeader from './ErrorHeader';

const ErrorPage = () => {
    return (
        <div>
            <div className="bodyContainer">
                <ErrorHeader />
                <div className="errorText">
                    <h1>404</h1>
                    <p>We are sorry, but the page you requsted was not found</p>
                </div>

                <Link to="/" className="goHomeBtnTwo">Go Home</Link>
            </div>
        </div>
    )
}

export default ErrorPage;
