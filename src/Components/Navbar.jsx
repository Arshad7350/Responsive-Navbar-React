import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
        <header>
            <div className='container'>
                <nav>
                    <div className="logo">
                        <h2>DesignStudio</h2>
                    </div>
                    <ul className={isOpen ? "nav-link active" : "nav-link"}>
                        <li>
                            <a href="/home" className='active'>Home</a>
                        </li>
                        <li>
                            <a href="/About">About</a>
                        </li>
                        <li>
                            <a href="/services">Services</a>
                        </li>
                        <li>
                            <a href="/contact">Contact Me</a>
                        </li>
                    </ul>
                    <div className="icon" onClick={toggleMenu}>
                        <FaBars />
                    </div>
                </nav>
            </div>
        </header>
        <section>
            <div className="container">
                <div className="content">
                    <h2>Responsive Navbar</h2>
                </div>
            </div>
        </section>
        </>
    )
}

export default Navbar