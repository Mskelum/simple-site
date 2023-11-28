import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Button } from './Button';
import './Navbar.css';


const Navbar = () => {

    library.add(fas);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [button, setButton] = useState(true);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <div className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                    NaturalEra
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item' >
                            <Link to='/' className='nav-links' onClick={closeMobileMenu} >
                                Home
                            </Link>
                        </li>
                        <li className='nav-item' >
                            <Link to='/categories' className='nav-links' onClick={closeMobileMenu} >
                                Categories
                            </Link>
                        </li>
                        <li className='nav-item' >
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu} >
                                About
                            </Link>
                        </li>
                        <li className='nav-item' >
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu} >
                                Contact
                            </Link>
                        </li>
                        <li className='nav-item' >
                            <Link to='/help' className='nav-links' onClick={closeMobileMenu} >
                                Help
                            </Link>
                        </li>
                        <li className='nav-item' >
                            <Link to='/Signup' className='nav-links-mobile' onClick={closeMobileMenu} >
                                Sign up
                                <br></br>
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </div>
        </>
    )
}

export default Navbar