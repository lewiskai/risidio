import { useState, useEffect, useRef } from 'react'
import touxiang from '../../assets/头像.png'
import xing from '../../assets/bag6.png'
import listImg2 from "../../assets/listImg2.png";
import './index.css'
import List3 from '../../components/list3'
import BottomNav from '../../components/bottomNav'
import { useLocation ,useNavigate } from 'react-router-dom';
import { CopyOutlined, RightCircleFilled } from '@ant-design/icons';
import { Space } from 'antd';

function Home() {
  const location = useLocation();
  // 2. 调用 useNavigate，会返回一个对象，返回的对象是一个函数
  const navigate = useNavigate()
  const params = new URLSearchParams(location.search);
  const paramValue = params.get('param');

  /**
   * 顶部按钮点击事件  判断显示弹框
   * @paramValueClick
   */
  const paramValueClick = () => {
    if(paramValue == 'Account'){
      setPorupBoxShow(true)
    }else{
      setPorupBoxShow(false)
      navigate('/Content')
    }
  }

  const [items, setItems] = useState([...Array(6).keys()]); // 初始化一个包含6个数字的数组作为列表项
  const colors  = [
      `#23252B`,`#23252B`,`#23252B`, `#23252B`,`#23252B`,`#23252B`
  ]
  const [colorIndex, setColorIndex] = useState(0); // 当前应用颜色的索引
  const intervalRef = useRef(); // 保存计时器引用
  // 更新颜色的函数
  const updateColor = () => {
    setColorIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % items.length;
      return nextIndex;
    });
  };

  // 组件挂载时开始计时器
  useEffect(() => {
    intervalRef.current = setInterval(updateColor, 3000); // 每3000毫秒调用一次updateColor
    return () => clearInterval(intervalRef.current); // 组件卸载时清除计时器
  }, []);

  let [imgShow,setImgShow] = useState(0); //图片显示隐藏状态
  let [porupBoxShow,setPorupBoxShow] = useState(false); //弹框显示隐藏状态

  /**
   * 弹框里边的按钮的点击事件
   * @ImgshowClick
   */
  const ImgshowClick = () => {
    setImgShow(1);
  }

  /**
   * 弹框取消按钮点击事件
   * @porupBoxShowClick
   */
  const porupBoxShowClick = () => {
    setPorupBoxShow(false)
  }

  /**
   * 切换弹框里边的图片click
   * @BuyBtnClick
   */
  const BuyBtnClick = () => {
    if(paramValue == 'Account'){
      setImgShow(2);
    }else{
      navigate('/Content')
    }
  }

  const SeeCollectionClick = () => {
    if(paramValue == 'Account'){
      navigate('/ProprietorCopy')
    }else{
      navigate('/Proprietor')
    }
    
  }

  const HomeClick = () => {
    navigate('/ProprietorCopy')
  }

  return (
    <>
      <div className='Home_Box'>
        <div className='Home_topBox'>
          <div className='Home_titleBox'>
            <div className='Home_titleLeft' onClick={HomeClick}>MARKETPLACE.</div>
            <div className='Home_titleRight' onClick={paramValueClick}>{paramValue == null?'Connect Wallet':paramValue}</div>
          </div>
          <div className='Home_titListBox'>
            {items.map((item,index) => {
              return <div className='Home_liCla' key={index}
              style={{ backgroundColor: index === colorIndex ? colors[colorIndex % colors.length] : '#e6e9f2' }}></div>
            })}
          </div>
          <div className='Home_conBox1'>
            <div className='Home_conBox1Con1'>
              <div className='Home_conBox1Con1Left'>
                <div className='Home_conBox1Con1LeftCon1'>Trending Now</div>
                <div>
                <div className='Home_conBox1Con1LeftCon2'>Night sky collection</div>
                <div className='Home_conBox1Con1LeftCon3'>With the stars</div>
                </div>
                <div className='Home_conBox1Con1LeftCon4'>
                  <div className='Home_conBox1Con1LeftCon4Left'>
                    <img src={touxiang} alt="" />
                  </div>
                  <div className='Home_conBox1Con1LeftCon4Right'>
                    <div className='Home_conBox1Con1LeftCon4RightText1'>Artist</div>
                    <div className='Home_conBox1Con1LeftCon4RightText2'>Léa Jacquot</div>
                  </div>
                </div>
                <div className='Home_conBox1Con1LeftCon5'>
                  <div className='Home_conBox1Con1LeftCon5Btn1' onClick={BuyBtnClick}>Buy</div>
                  <div className='Home_conBox1Con1LeftCon5Btn2' onClick={SeeCollectionClick}>See collection</div>
                </div>
              </div>
              <div className='Home_conBox1Con1Right'>
                <img src={xing} alt="" />
              </div>
            </div>
          </div>
          <div className='Home_collectionsBox'>
            <div className='Home_collectionsBoxTitle'>Collections</div>
            <div>
              <List3  pMsg={paramValue} />
            </div>
            
          </div>
        </div>
        <div className='Home_porupBox' style={{display:porupBoxShow == false ? "none" : "flex"}}>
          <div className='Home_porupBox_left'  onClick={porupBoxShowClick}>{`>>`}</div>
        <div className='Home_porupBox_right'>
          <div className='Home_porupBox_right1'>
            <div className='Home_porupBox_right1_left'>
              <div className='Home_touxiang'></div>
              <span>STV6Q...4Z7WD</span>
              <Space>
              <CopyOutlined/>
              </Space>
            </div>
            <div className='Home_porupBox_right1_right'>
            <Space>
              <RightCircleFilled onClick={porupBoxShowClick} />
              </Space>
            </div>
          </div>
          <div className='Home_porupBox_right2'>In your wallet</div>
          <div className='Home_porupBox_right3'>0.129 BTC</div>
          <div className='Home_porupBox_right4'>Your NFTs</div>
          <div className='Home_porupBox_right5' style={{display:imgShow !== 0 ? "none" : "block"}}>You don’t own any NFTs yet</div>
          <div className='Home_porupBox_right6' style={{display:imgShow !== 0 ? "none" : "flex"}} onClick={ImgshowClick}>Start shopping</div>
          <img className='Home_porupBox_right7' src={listImg2} alt=""  style={{display:imgShow == 1 ? "block" : "none"}}/>
          <img className='Home_porupBox_right7' src={xing} alt="" style={{display:imgShow == 2 ? "block" : "none"}}/>
        </div>
      </div>
      </div>
      <BottomNav/>
      
    </>
  )
}

export default Home
