import React, { Component,useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./index.css";
import listImg1 from "../../assets/listImg1.png";
import listImg2 from "../../assets/listImg2.png";
import listImg3 from "../../assets/listImg3.png";
import touxiang from "../../assets/头像.png";
import touxiang1 from "../../assets/头像1.png";
import touxiang2 from "../../assets/头像2.png";

function list3(data) {
  const navigate = useNavigate()
  console.log(data,'11111111111111111111');
  const list = [
    {
      img: `${listImg1}`,
      text1: "Night Sky",
      text2: "120 NTF",
      text3: "Price Range : 0.12BTC - 0.18BTC",
      text4: "Lorem ipsum dolor sit amet, consectetur adicing",
      text5: "elit, sed do eiusmod tempor...",
      userImg: `${touxiang}`,
      userArtist: `Artist`,
      userName: "Léa Jacquot",
    },
    {
      img: `${listImg2}`,
      text1: "Future",
      text2: "120 NTF",
      text3: "Price Range : 0.12BTC - 0.18BTC",
      text4: "Lorem ipsum dolor sit amet, consectetur adicing",
      text5: "elit, sed do eiusmod tempor...",
      userImg: `${touxiang1}`,
      userArtist: "Artist",
      userName: "Julien",
    },
    {
      img: `${listImg3}`,
      text1: "Mother nature",
      text2: "120 NTF",
      text3: "Price Range : 0.12BTC - 0.18BTC",
      text4: "Lorem ipsum dolor sit amet, consectetur adicing",
      text5: "elit, sed do eiusmod tempor...",
      userImg: `${touxiang2}`,
      userArtist: "Artist",
      userName: "Maria",
    },
  ];
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHighlightedIndex(index);
  };

  const handleMouseLeave = () => {
    setHighlightedIndex(null);
  };

  const GoToCollectionClick = () => {
    if(data.pMsg == 'Account'){
      navigate('/ProprietorCopy')
    }else{
      navigate('/Proprietor')
    }
  }


  return (
    <>
      <div className="list3_con_Box">
        {list.map((item, index) => {
          return (
            <div className="list3_con_box" key={index}>
              <div>
                <div
                  className="list3_con_titleImgCla"
                  style={{ background: `url(${item.img}) no-repeat` }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                    <div
                    className="list3_con_list6BtnBox"
                    style={{
                      display:
                        highlightedIndex === index ? "block" : "none",
                    }}
                  >
                    {/* <Link to={'/Proprietor'}> */}
                    <div className="list3_con_list6BtnCla" onClick={GoToCollectionClick}>Go to collection  {` —>`}</div>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
              {/* <img className='list3_con_titleImgCla' src={item.img} alt="" /> */}
              <div className="list3_con_con1">
                <div className="list3_con_con1Left">{item.text1}</div>
                <div className="list3_con_con1Right">{item.text2}</div>
              </div>
              <div className="list3_con_con2">{item.text3}</div>
              <div className="list3_con_con3">{item.text4}</div>
              <div className="list3_con_con3">{item.text5}</div>
              <div className="list3_con_con4">
                <img
                  src={item.userImg}
                  alt=""
                  className="list3_con_userImgCla"
                />
                <div className="list3_con_userNameBox">
                  <div className="list3_con_userArtistCla">
                    {item.userArtist}
                  </div>
                  <div className="list3_con_userNameCla">{item.userName}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default list3;
