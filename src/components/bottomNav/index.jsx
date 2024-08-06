import './index.css'
import React, { Component } from "react";
import FFF from "../../assets/FFF.png";
import niao from "../../assets/niao.png";
import youxi from "../../assets/youxi.png";
import xiangji from "../../assets/xiangji.png";

function bottomNav() {
  return (
    <>
      <div className="bottomNav_con_bottomBox">
        <div className="bottomNav_con_bottomBoxLeft">MARKETPLACE</div>
        <div className="bottomNav_con_bottomBoxRight">
          <img src={FFF} alt="" className='bottomNav_con_imgCla'/>
          <img src={niao} alt="" className='bottomNav_con_imgCla' />
          <img src={youxi} alt="" className='bottomNav_con_imgCla' />
          <img src={xiangji} alt="" className='bottomNav_con_imgCla' />
        </div>
      </div>
    </>
  );
}

export default bottomNav;
