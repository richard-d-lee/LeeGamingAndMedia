import React, { useState } from 'react';
import Sidebar from './Sidebar.jsx';

function Topbar(props) {
    console.log(props)
    return (
        <div className="topbar">
            <Sidebar open={props.open} close={props.close} />
            <div className="banner">
                Welcome to Lee Gaming and Media!
            </div>
            <label className="login">
                login
            </label>
        </div>
    )
}

export default Topbar;