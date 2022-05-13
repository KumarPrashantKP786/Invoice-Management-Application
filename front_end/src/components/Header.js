import React from 'react';
import './Header.css';
import ABCLogoFull from "../../src/assets/ABCLogoFull.svg";
import hrcLogo from "../../src/assets/hrcLogo.svg";

const Header = () => {
  return (
    <div className='header' style={{marginBottom:"3px",height:"80px"}}>
        <div className='ABCContainer'  style={{marginleft:"20px"}}>
            <div className='ABCLogo'>
                <img src={ABCLogoFull}  style={{marginleft:"20px"}}/>
            </div>
        </div>
        <div className="HRCLogo">
            <img src={hrcLogo}/>
        </div>
        <div style={{marginTop:"4px"}}>
        <h2 style={{color:"white",fontWeight:"normal",marginLeft:"20px"}}>Invoice List</h2>
        </div>
    </div>
  )
}

export default Header

