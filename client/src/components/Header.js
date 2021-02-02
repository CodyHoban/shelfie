import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Shelfer
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Shelfs
                </Link>
                <GoogleAuth />
            </div>
        </div>
    )
};

export default Header;