import React, { useContext, useEffect, useState } from 'react';
import { X, ArrowBendRightDown } from "@phosphor-icons/react";
import { Link, useLocation } from 'react-router-dom';
import ThemeContext from '../ThemeContext';

const SideDrawer = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const handleCloseDrawer = () => {
        setOpen(false);
    };

    useEffect(() => {
        const tabs = document.querySelectorAll('.tab-bordered');

        tabs.forEach(tab => {
            if (tab.getAttribute('href') === location.pathname) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }, [location]);

    return (
        <>
            <button className="fixed  left-4 z-10 btn pl-0 btn-ghost rounded-md" onClick={handleDrawerToggle}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>


            <div className={`fixed top-0 left-0 w-80 h-screen bg-base-100 shadow transform transition-transform ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="fixed top-0 right-0 py-4">
                    <div className="flex items-center">
                        <button className="btn btn-ghost btn-sm rounded-btn ml-0 pl-0" onClick={handleCloseDrawer}>
                            <X size={32} />
                        </button>
                    </div>
                </div>
                <nav className="p-4 w-full">
                    <ul className="menu text-base-content space-y-4 w-full">

                        <li>
                            <Link to="/" className="tab-bordered" onClick={handleCloseDrawer}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/custom-web-development" className="tab-bordered" onClick={handleCloseDrawer}>
                                Custom
                            </Link></li>
                        <li>
                            <Link to="/budget-web-development" className="tab-bordered" onClick={handleCloseDrawer}>
                                Budget
                            </Link>
                        </li>
                        <li>

                            <Link to="/mobile-website-transformation" className="tab-bordered" onClick={handleCloseDrawer}>
                                Transform
                            </Link>
                        </li>

                        <li>
                            <a href="#contact" className="btn btn-outline btn-primary rounded-lg py-0 w-full" onClick={handleCloseDrawer}>
                                <div className={`flex items-center justify-center hover:text-white ${theme === 'dark' ? 'text-white' : 'text-primary'}`}>
                                    <span className="mr-2 mt-1">Get Started</span>
                                    <ArrowBendRightDown size={22} weight="bold"></ArrowBendRightDown>
                                </div>

                            </a>
                        </li>

                    </ul>
                </nav>
            </div>
        </>
    )
}

export default SideDrawer