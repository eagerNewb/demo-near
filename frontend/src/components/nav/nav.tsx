import './Nav.css';

import {Link} from "react-router-dom";
import CSS from 'csstype';
import { useLocation } from "react-router-dom";
// import { tokenToString } from "typescript";

export const Nav = ({data}: any): any => {
    const location = useLocation().pathname;
    return (
        // <nav className={(location == '/') ? 'nav-home' : `nav-${location.replace('/','')}`}>
        <nav className="nav-rooms">
            <Link to="/" className='nav-links'>Home</Link>
            <Link to="/rooms" className='nav-links'>Rooms</Link>
            <Link to="/about" className='nav-links'>About</Link>
        </nav>
    );
}