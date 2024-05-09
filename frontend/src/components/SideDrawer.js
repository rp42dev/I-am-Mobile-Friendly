import React, { useContext, useEffect } from 'react';
import { X, ArrowBendRightDown } from "@phosphor-icons/react";
import { Link, useLocation } from 'react-router-dom';
import ThemeContext from '../ThemeContext';

const SideDrawer = ({ open, setOpen }) => {
    const { theme } = useContext(ThemeContext);
    const location = useLocation();

    const handleCloseDrawer = () => {
        setOpen(false);
    };

    useEffect(() => {
        const tabs = document.querySelectorAll('.tab-bordered');

        tabs.forEach(tab => {
            if (tab.getAttribute('href') === location.pathname) {
                tab.classList.add('tab-active');
            } else {
                tab.classList.remove('tab-active');
            }
        });
    }, [location]);

    return (
        <>
            <div className="lg:hidden">
                <div className={`z-40 fixed top-0 left-0 w-full sm:w-1/2 h-screen bg-base-100/90 shadow transform transition-transform ${open ? 'translate-x-0' : '-translate-x-full'}`} onClick={handleCloseDrawer}>
                    <div className="fixed top-0 right-0 py-4">
                        <div className="flex items-center">
                            <button className="btn btn-ghost btn-sm rounded-btn ml-0 pl-0">
                                <X size={32} />
                            </button>
                        </div>
                    </div>
                    <nav className="p-4 w-full grid place-items-center h-screen">
                        <ul className="menu text-base-content space-y-4 w-full ">
                            <li>
                                <Link to="/" className="tab tab-bordered text-lg h-12">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/custom-web-development" className="tab tab-bordered text-lg h-12">
                                    Custom
                                </Link></li>
                            <li>
                                <Link to="/budget-web-development" className="tab tab-bordered text-lg h-12">
                                    Budget
                                </Link>
                            </li>
                            <li>

                                <Link to="https://www.coachautomationdone4you.com/" className="tab tab-bordered text-lg h-12">
                                    Funnels
                                </Link>
                            </li>

                            <li>
                                <Link to="/about-me" className="tab tab-bordered text-lg h-12">
                                    About Me
                                </Link>
                            </li>

                            <li>
                                <a href="#contact" className="btn btn-outline btn-primary rounded-lg py-0 mt-4 w-full" onClick={handleCloseDrawer}>
                                    <div className={`flex items-center justify-center hover:text-white ${theme === 'dark' ? 'text-white' : 'text-primary'}`}>
                                        <span className="mr-2 mt-1">Get Started</span>
                                        <ArrowBendRightDown size={22} weight="bold"></ArrowBendRightDown>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
                <div className={`z-30 fixed inset-0 w-screen bg-black/50 transform transition-transform ${open ? 'translate-x-0' : '-translate-x-full'}`} onClick={handleCloseDrawer}></div>
        </>
    )
}

export default SideDrawer