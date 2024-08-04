// ContextProvider.js
import React, { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <Context.Provider value={{ drawerOpen, setDrawerOpen }}>
            {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider};

