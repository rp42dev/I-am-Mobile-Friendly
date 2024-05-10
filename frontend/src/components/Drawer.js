import React, { useContext } from 'react';
import { Context } from '../ContextProvider';
import { Robot, } from "@phosphor-icons/react";
import ChatBot from './ChatBot';

const Drawer = ({ children }) => {
    const { drawerOpen, setDrawerOpen } = useContext(Context);

    return (
        <div className="drawer drawer-end h-dvh">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={drawerOpen} onChange={() => setDrawerOpen(!drawerOpen)} />
            <div className="drawer-content h-dvh ">
                <label htmlFor="my-drawer" className={`btn btn-primary drawer-button fixed bottom-8 z-30 right-8 ${drawerOpen ? 'hidden' : ''}`}>Chat &nbsp; 
                    <Robot size={32} />
                </label>
                {children}
            </div>
            <div className="drawer-side z-50 ">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ChatBot />
            </div>
        </div>
    );
}

export default Drawer;