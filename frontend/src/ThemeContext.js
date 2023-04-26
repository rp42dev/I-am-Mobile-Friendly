
import { createContext } from 'react';


const ThemeContext = createContext({
    theme: 'light', // 'light' | 'dark
    toggleTheme: () => { },
});

export default ThemeContext;
