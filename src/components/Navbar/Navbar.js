import React, { useContext } from "react";
import useOnline from "../../hooks/useOnline";
import { ThemeContext } from "../../Contexts/ThemeContext";
import brightness from "../../images/brightness.png";
import moon from "../../images/moon.png";

export default function Navbar() {
  const isOnline = useOnline();

  const [{ isDarkMode }, toggleTheme] = useContext(ThemeContext);

  const style = {
    display: "flex",
    justifyContent: "space-around",
    background: "darkkhaki",
    height: "40px",
    padding: "2px",
    fontSize: "18px",
    borderRadius: "5px",
    alignItems: "center",
    position: "sticky",
    zIndex: "1",
    top: "2px",
  };

  return (
    <div id="navbar" style={style}>
      <a
        href="/"
        onClick={(e) =>
          window.location.pathname === "/"
            ? e.preventDefault()
            : (window.location.href = "/")
        }
      >
        Home
      </a>
      <div>
        System Status: <b>{isOnline ? "Online" : "Offline"}</b>
      </div>
      <div>
        Time/Date: <b>{new Date().toLocaleString()}</b>
      </div>
      <div onClick={toggleTheme} style={{ cursor: "pointer" }}>
        <img
          src={`${isDarkMode ? moon : brightness}`}
          alt="sun"
          style={{ width: "32px", height: "32px" }}
        />
      </div>
    </div>
  );
}
