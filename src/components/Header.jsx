import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";


const Header = ({ onClick, darkMode }) => {
  return (
    <>
      <div>
        <nav className={`${darkMode?'darkMode': ' ' }`}>
          <div className="Title">
            <h2>Where In The World</h2>
          </div>
          <div className={`${darkMode?'darkMode': ' ' }`} onClick={onClick}>
            <DarkModeIcon   /> DarkMode
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
