import React, { useContext, useEffect } from 'react';
import ThemeContext from '../ThemeContext';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const location = useLocation();

    useEffect(() => {
        const activeTab = document.querySelector('.tab-active');
        const tabs = document.querySelectorAll('.tab');

        tabs.forEach(tab => {
            if (tab.getAttribute('href') === location.pathname) {
                tab.classList.add('tab-active');
            } else {
                tab.classList.remove('tab-active');
            }
        });
    }, [location]);

    return (
        <div className="navbar px-4 sm:px-6 lg:px-12 xl:px-16">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">I'm Mobile Friendly</a>
            </div>

            <div className="hidden lg:flex me-6">
                <div className="tabs">
                    <Link to="/" className="tab tab-bordered tab-active">
                        Design
                    </Link>
                    <Link to="/transform" className="tab tab-bordered">
                        Transform
                    </Link>
                    <a
                        href="#contact"
                        className="ml-6 btn btn-outline btn-primary rounded-lg py-0"
                    >
                        <span
                            className={`${theme === 'dark' ? 'text-white' : 'text-primary hover:text-white'}`}
                        >
                            Get started
                        </span>
                    </a>
                </div>
            </div>

            <div className="flex-none">
                <label className="swap swap-rotate">
                    <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
                    <svg
                        className="swap-on fill-current w-10 h-10"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        {/* Swap On Icon SVG Path */}
                    </svg>
                    <svg
                        className="swap-off fill-current w-10 h-10"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        {/* Swap Off Icon SVG Path */}
                    </svg>
                </label>
            </div>
        </div>
    );
};

export default NavBar;