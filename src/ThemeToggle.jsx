import React from "react";
import {BiSolidSun, BiSolidMoon} from "react-icons/bi";
import {useGlobalContext} from "./context";

const ThemeToggle = () => {
    const {isDarkTheme, toggleDarkTheme} = useGlobalContext();
    return (
        <section className="toggle-container">
            <button className="dark-toggle" onClick={toggleDarkTheme}>
                {isDarkTheme ? (
                    <BiSolidMoon className="toggle-icon" />
                ) : (
                    <BiSolidSun className="toggle-icon" />
                )}
            </button>
        </section>
    );
};

export default ThemeToggle;
