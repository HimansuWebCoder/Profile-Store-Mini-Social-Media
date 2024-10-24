import { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
	const [isDarkMode, setIsDarkMode] = useState(false);

	function toggleTheme() {
		setIsDarkMode(!isDarkMode);
	}

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export { ThemeContext, ThemeProvider };
