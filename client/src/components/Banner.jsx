import React, { useState } from 'react';

function Banner(props) {
  return (
    <div className="banner" onClick={props.return}>
      <center>
        <label id="name" onClick={props.return}>Lee Gaming and Media</label>
      </center>
      <center>
        <label id="name" onClick={props.return}>Where Dreams Live in Code</label>
      </center>
    </div>
  )
}

export default Banner;