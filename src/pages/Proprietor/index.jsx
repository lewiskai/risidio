import { useState } from 'react'
import hei from '../../assets/hei.png'
import touxiang from '../../assets/头像.png'
import xing from '../../assets/bag6.png'
import './index.css'
import List6 from '../../components/list6'
import BottomNav from '../../components/bottomNav'
import { useNavigate } from 'react-router-dom';

function Proprietor() {
    // 2. 调用 useNavigate，会返回一个对象，返回的对象是一个函数
    const navigate = useNavigate()
  const imgList = [
    {
      background: `${hei}`
    },
    {
      background: `${hei}`
    },
    {
      background: `${hei}`
    },
    {
      background: `${hei}`
    },
    {
      background: `${hei}`
    },
    {
      background: `${hei}`
    },
  ]

  const BuyBtnClick = () => {
      navigate('/Content')
  }

  const SeeCollectionClick = () => {
    navigate('/Proprietor')
  }

  const ConnectClick = () => {
    navigate('/Content')
  }

  const HomeClick = () => {
    navigate('/Home')
  }

  return (
    <>
      <div className='Proprietor_Box'>
        <div className='Proprietor_topBox'>
          <div className='Proprietor_titleBox'>
            <div className='Proprietor_titleLeft' onClick={HomeClick}>MARKETPLACE.</div>
            <div className='Proprietor_titleRight' onClick={ConnectClick}>Connect Wallet</div>
          </div>
          <div className='Proprietor_conBox1'>
            <div className='Proprietor_conBox1Con1'>
              <div className='Proprietor_conBox1Con1Left'>
                <div className='Proprietor_conBox1Con1LeftCon1'>Trending Now</div>
                <div>
                <div className='Proprietor_conBox1Con1LeftCon2'>Collection</div>
                <div className='Proprietor_conBox1Con1LeftCon3'>Night Sky</div>
                <div className='Proprietor_conBox1Con1LeftCon5'>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem</div>
                <div className='Proprietor_conBox1Con1LeftCon5'>ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum</div>
                <div className='Proprietor_conBox1Con1LeftCon5'>dolor sit amet, consectetur adicing elit, sed do eiusmod tempo</div>
                </div>
                <div className='Proprietor_conBox1Con1LeftCon4'>
                  <div className='Proprietor_conBox1Con1LeftCon4Left'>
                    <img src={touxiang} alt="" />
                  </div>
                  <div className='Proprietor_conBox1Con1LeftCon4Right'>
                    <div className='Proprietor_conBox1Con1LeftCon4RightText1'>Artist</div>
                    <div className='Proprietor_conBox1Con1LeftCon4RightText2'>Léa Jacquot</div>
                  </div>
                </div>
                <div className='Proprietor_conBox1Con1LeftCon5'>
                  <div className='Proprietor_conBox1Con1LeftCon5Btn1' onClick={BuyBtnClick}>Buy</div>
                  <div className='Proprietor_conBox1Con1LeftCon5Btn2' onClick={SeeCollectionClick}>See collection</div>
                </div>
              </div>
              <div className='Proprietor_conBox1Con1Right'>
                <img src={xing} alt="" />
              </div>
            </div>
          </div>
          <div className='Proprietor_collectionsBox'>
            <div className='Proprietor_collectionsBoxTitle'>NFTs</div>
            <div>
              <List6 pMsg={'ConnectWallet'}/>
            </div>
            
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  )
}

export default Proprietor