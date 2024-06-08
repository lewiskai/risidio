import React, { Component, useState, useCallback } from "react";
import { Link, useNavigate  } from 'react-router-dom';
import "./index.css";
import listImg1 from "../../assets/listImg1.png";
import listImg2 from "../../assets/bag2.png";
import listImg3 from "../../assets/bag3.png";
import listImg4 from "../../assets/bag4.png";
import listImg5 from "../../assets/bag5.png";
import listImg6 from "../../assets/bag6.png";

function list6(data) {
  const navigate = useNavigate()
  const list = [
    {
      text2: "0.12 BTC",
      text1: "Night is coming",
      img: `${listImg1}`,
      imgStr:'listImg1'
    },
    {
      text2: "0.12 BTC",
      text1: "With the stars",
      img: `${listImg2}`,
      imgStr:'bag2'
    },
    {
      text2: "0.12 BTC",
      text1: "Summer",
      img: `${listImg3}`,
      imgStr:'bag3'
    },
    {
      text2: "0.14 BTC",
      text1: "Quiet",
      img: `${listImg4}`,
      imgStr:'bag4'
    },
    {
      text2: "0.12 BTC",
      text1: "Travel",
      img: `${listImg5}`,
      imgStr:'bag5'
    },
    {
      text2: "0.18 BTC",
      text1: "The rain",
      img: `${listImg6}`,
      imgStr:'bag6'
    },
  ];
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHighlightedIndex(index);
  };

  const handleMouseLeave = () => {
    setHighlightedIndex(null);
  };

  const BuyClick = (item,index) => {
    if(data.pMsg[0] == 'Account'){
      console.log(data.pMsg[1](item),'11111111111');
    }else{
      navigate('/Content')
    }
  }

  return (
    <>
      <div className="list6_con_Box">
        {list.map((item, index) => {
          return (
            <div className="list6_con_box" key={index}>
              <div>
                <div
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className="list6_con_list6ImgCla"
                  style={{ background: `url(${item.img}) no-repeat` }}
                >
                  <div
                    className="list6_con_list6BtnBox"
                    style={{
                      display:
                        highlightedIndex === index ? "block" : "none",
                    }}
                  >
                    {/* <Link to={'/Content'}> */}
                    <div className="list6_con_list6BtnCla" onClick={()=> BuyClick(item,index) } >Buy  {` —>`}</div>
                    {/* </Link> */}
                  </div>
                </div>
              </div>

              <div className="list6_con_list6ItemBox">
                <div className="list6_con_list6ItemBoxLeft">{item.text1}</div>
                <div className="list6_con_list6ItemBoxRight">{item.text2}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default list6;
