import React, { useContext } from "react";
import ThemeContext from "../context.js/ThemeContext";
import AppTheme from "../colors";

const HeroSection = () => {
    const theme = useContext(ThemeContext) [0]
    const cirrentTheme = AppTheme [theme]

    return(
        <div
        style={{
            padding: "1rem",
            backgroundColor: `${cirrentTheme.backgroundColor}`,
            color: `${cirrentTheme.textColor}`,
            textAlign: "center"
        }}
        >
            <h1>
                context AIP
            </h1>
            <p> this is a nice paragraph</p>
            <button
            style={{
                backgroundColour: "#26ae60",
                padding: "10px 150px",
                fontSize: "20px",
                color:"#fff",
                border: `${cirrentTheme.border}`
            }}
            >Click me</button>
        </div>
    )
}

export default HeroSection;