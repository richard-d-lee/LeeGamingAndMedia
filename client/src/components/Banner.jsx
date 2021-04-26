import React, { useState } from 'react';

function Banner(props) {
  return (
    <div className="banner">
      {/* <center>
        <label id="name" onClick={props.return}>Lee Gaming and Media</label>
      </center>
      <center>
        <label id="name" onClick={props.return}>Where Dreams Live in Code</label>
      </center> */}
      <div id="mySidebar" className="sidebar">
        <a href="javascript:void(0)" className="closebtn" onClick={props.close}>&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      <div id="main">
        <button class="openbtn" onClick={props.open}>&#9776; Open Sidebar</button>
        <h2>Collapsed Sidebar</h2>
        <p>Content...</p>
      </div>
    </div>
  )
}

export default Banner;