import React, { useContext, useEffect } from 'react';
import { X, ArrowBendRightDown } from "@phosphor-icons/react";
import { Link, useLocation } from 'react-router-dom';
import ThemeContext from '../ThemeContext';

const SideDrawer = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const location = useLocation();

    useEffect(() => {
        const tabs = document.querySelectorAll('.tab-bordered' );

        tabs.forEach(tab => {
            if (tab.getAttribute('href') === location.pathname) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }, [location]);

    const closeDrawer = () => {
        const drawerCheckbox = document.getElementById('my-drawer');
        drawerCheckbox.checked = false;
    };
    return (
        <div className="drawer z-0 drawer-end fixed top-0 right-0 h-screen lg:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content mt-4 container mx-auto">
                <label htmlFor="my-drawer" className="btn btn-ghost btn-sm relative z-20 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
            <div className="drawer-side h-screen -mt-3">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content space-y-4">

                    <li>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <button className="btn btn-ghost btn-sm rounded-btn ml-0 pl-0" onClick={closeDrawer}>
                                    <X size={32} />
                                </button>
                            </div>
                        </div>
                    </li>


                    <li>
                        <Link to="/" className="tab-bordered" onClick={closeDrawer}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/custom-web-development" className="tab-bordered" onClick={closeDrawer}>
                            Custom
                        </Link></li>
                    <li>
                        <Link to="/budget-web-development" className="tab-bordered" onClick={closeDrawer}>
                            Budget
                        </Link>
                    </li>
                    <li>

                        <Link to="/mobile-website-transformation" className="tab-bordered" onClick={closeDrawer}>
                            Transform
                        </Link>
                    </li>
                    
                    <li>
                        <a href="#contact" className="btn btn-outline btn-primary rounded-lg py-0 w-full" onClick={closeDrawer}>
                            <div className={`flex items-center justify-center hover:text-white ${theme === 'dark' ? 'text-white' : 'text-primary'}`}>
                                <span className="mr-2 mt-1">Get Started</span>
                                <ArrowBendRightDown size={22} weight="bold"></ArrowBendRightDown>
                            </div>
                            
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    )

}

export default SideDrawer