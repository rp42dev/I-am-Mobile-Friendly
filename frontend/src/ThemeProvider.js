import { useState, useEffect } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({ children }) => {
    const lightTheme = 'light';
    const darkTheme = 'dark';
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            return darkTheme;
        } else if (storedTheme === 'light') {
            return lightTheme;
        } else {
            return prefersDarkScheme ? darkTheme : lightTheme;
        }
    });

    const toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    };

    useEffect(() => {
        localStorage.setItem('theme', theme === lightTheme ? 'light' : 'dark');
        document.querySelector('html').dataset.theme = theme;
        document.querySelector('meta[name="theme-color"]').setAttribute('content', theme === lightTheme ?'#ECEEEE' : '#1f2937' );
    }, [theme]);

    // Check if the stored theme is different from the preferred theme and use that instead
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme && storedTheme !== 'light' && storedTheme !== 'dark' && storedTheme !== (prefersDarkScheme ? 'dark' : 'light')) {
            setTheme(storedTheme === 'dark' ? darkTheme : lightTheme);
            document.querySelector('html').dataset.theme = storedTheme;
        }
    }, [prefersDarkScheme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;