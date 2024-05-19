import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoIosAdd, IoMdArrowDropdown, IoMdArrowDropup, } from "react-icons/io";
import { LiaDatabaseSolid } from "react-icons/lia";
// import './Navbar.css';  // Ensure you import the CSS file

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Course builder</Link>
            </div>
            <div className="dropdown" ref={dropdownRef}>
                <button className="dropbtn" onClick={toggleDropdown}>
                    <IoIosAdd size={20} />
                    <span>Add</span>
                    {dropdownOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                </button>
                <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`} id="myDropdown">
                    <Link to="#"><LiaDatabaseSolid size={20} />Link 1</Link>
                    <Link to="#">Link 2</Link>
                    <Link to="#">Link 3</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
