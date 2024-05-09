import React, { useState } from 'react';
import { Robot, } from "@phosphor-icons/react";
import ChatBot from './ChatBot';

const Drawer = ({ children }) => {

    {/* if drawer checkbox is checked, hide drawer button */}
    {/* if drawer checkbox is unchecked, show drawer button */ }
    const [drawerOpen, setDrawerOpen] = useState(false);
    

    return (
        <div className="drawer drawer-end">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={drawerOpen} onChange={() => setDrawerOpen(!drawerOpen)} />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className={`btn btn-primary drawer-button z-50 fixed bottom-10 z-50 right-10 ${drawerOpen ? 'hidden' : ''}`}>Chat &nbsp; 
                    <Robot size={32} />
                </label>
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ChatBot />
            </div>
        </div>
    );
}

export default Drawer;

// Drawer.propTypes = {
//     children: PropTypes.node.isRequired,
// };