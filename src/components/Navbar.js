import React from "react";
import { useLocation } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

function Navbar({ titleColor, setTitleColor }) {
  const location = useLocation();
  const printResume = () => window.print();

  return (
    <AppBar position='static'>
      <Toolbar jus>
        <div className='title'>Resume Generator</div>
        {location.pathname === "/" ? null : (
          <>
            <div style={{ flex: 1 }}></div>
            <input
              style={{ marginRight: "1rem" }}
              type='color'
              value={titleColor}
              onChange={(e) => setTitleColor(e.target.value)}
            />
            <span onClick={printResume}>
              <i className='fas fa-print'></i>
              Print
            </span>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
