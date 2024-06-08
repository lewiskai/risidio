import { useState,useRef } from 'react'
import hei from '../../assets/hei.png'
import touxiang from '../../assets/头像.png'
import xing from '../../assets/bag6.png'
import './index.css'
import List6 from '../../components/list6'
import BottomNav from '../../components/bottomNav'
import { CopyOutlined, RightCircleFilled } from '@ant-design/icons';
import { Space } from 'antd';

function Proprietor() {
  let [porupBoxShow,setPorupBoxShow] = useState(false); //弹框显示隐藏状态
  const [items, setItems] = useState([]);
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

  /**
   * 弹框取消按钮点击事件
   * @porupBoxShowClick
   */
  const porupBoxShowClick = () => {
    setPorupBoxShow(false)
  }

  const parentMethod  = (item) => {
    setItems(prevArray => [...prevArray, item.imgStr])

  }

  const ImgshowClick = () => {
    setItems(prevArray => [...prevArray, 'bag6'])
  }

  const buyClick = () => {
    setItems(prevArray => [...prevArray, 'bag6'])
  }

  const SeeCollectionClick = () => {
    navigate('/ProprietorCopy')
  }

   /**
   * 顶部按钮点击事件  判断显示弹框
   * @paramValueClick
   */
   const paramValueClick = () => {
      setPorupBoxShow(true)
  }

  return (
    <>
      <div className='Proprietor_Box'>
        <div className='Proprietor_topBox'>
          <div className='Proprietor_titleBox'>
            <div className='Proprietor_titleLeft'>MARKETPLACE.</div>
            <div className='Proprietor_titleRight' onClick={paramValueClick}>Account</div>
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
                  <div className='Proprietor_conBox1Con1LeftCon5Btn1' onClick={buyClick}>Buy</div>
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
              <List6  pMsg={['Account',parentMethod]} />
            </div>
            
          </div>
        </div>
        <div className='Proprietor_porupBox' style={{display:porupBoxShow == false ? "none" : "flex"}}>
          <div className='Proprietor_porupBox_left' onClick={porupBoxShowClick}>{`>>`}</div>
        <div className='Proprietor_porupBox_right'>
          <div className='Proprietor_porupBox_right1'>
            <div className='Proprietor_porupBox_right1_left'>
              <div className='Proprietor_touxiang'></div>
              <span>STV6Q...4Z7WD</span>
              <Space>
              <CopyOutlined/>
              </Space>
            </div>
            <div className='Proprietor_porupBox_right1_right'>
            <Space>
              <RightCircleFilled  onClick={porupBoxShowClick}/>
              </Space>
            </div>
          </div>
          <div className='Proprietor_porupBox_right2'>In your wallet</div>
          <div className='Proprietor_porupBox_right3'>0.129 BTC</div>
          <div className='Proprietor_porupBox_right4'>Your NFTs</div>
          <div className='Proprietor_porupBox_right5' style={{display:items.length > 0 ? "none" : "block"}}>You don’t own any NFTs yet</div>
          <div className='Proprietor_porupBox_right6'  style={{display:items.length > 0 ? "none" : "flex"}} onClick={ImgshowClick}>Start shopping</div>
          {items.map((item,index) => {
            return  <div className='Proprietor_porupBox_right7'  key={index}>
              <img className='Proprietor_porupBox_right7' src={`/${item}.png`}/>
              
            </div>
          })}
        </div>
      </div>
      </div>
      <BottomNav />
    </>
  )
}

export default Proprietor