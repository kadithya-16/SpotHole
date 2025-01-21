import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png'

export default function Navbar() {

    const location = useLocation()
    const [showImage, setShowImage] = useState(false);

    const handleScroll = () => {
        const titleElement = document.getElementById('title');
        const titleBottom = titleElement.getBoundingClientRect().bottom;

        if (titleBottom <= 0) {
            setShowImage(true);
        } else {
            setShowImage(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className="header">
            <div className="App">
                <div id="title" className="title">
                    {location.pathname == '/' && <span className="logo-text">SpotHole</span>}
                </div>
                <div className={`sticky-image ${showImage || location.pathname !== '/' ? 'visible' : ''} ${location.pathname === '/' ? 'sticky' : 'fixed'}`}>
                    <NavLink to='/'>
                        <img src={logo} alt="Sticky" className='logo' />
                    </NavLink>
                </div>
            </div>
            <nav className="navbar">
                <NavLink className={(e) => e.isActive ? "active" : ""} to='/'>HOME</NavLink>
                <NavLink className={(e) => e.isActive ? "active" : ""} to='/documentation'>DOCUMENTATION</NavLink>
                <NavLink className={(e) => e.isActive ? "active" : ""} to='/team'>ABOUT US</NavLink>
                <NavLink className={(e) => e.isActive ? "active" : ""} to='/profile'>PROFILE</NavLink>
            </nav>
            <div className="icon-container">
                <a href="#contact" className="contact"></a>
                <a aria-label="Lightmode">
                    <i className="fa-brands fa-github icon"></i>
                </a>
            </div>
        </header>
    )
}



// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar({ user, onLogout }) {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <Link to="/">SpotHole</Link>
//       </div>
//       <div className="menu">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/documentation">Docs</Link>
//         <Link to="/profile">Profile</Link>
//         {user ? (
//           <>
//             <span>Welcome, {user.username}!</span>
//             <button onClick={onLogout}>Logout</button>
//           </>
//         ) : (
//           <Link to="/login">Login</Link>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

