import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar w-[1000px] mx-auto">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl" to="/">Coffees</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/create-coffee">Create</Link></li>
                    <li><Link to="/coffees">Coffees</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;