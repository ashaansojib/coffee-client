import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar w-[1000px] mx-auto">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Coffees</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/create-coffee">Create</Link></li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;