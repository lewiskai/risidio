import './index.css'
import { Link  } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';
function Content() {
  const navigate = useNavigate()
  const imgList=[
    {
      text:''
    },
    {
      text:''
    },
    {
      text:''
    },
  ]

  const ConnectWalletClick= () => {
    navigate('/?param=Account')
  }

  return (
    <>
      <div className='Content_con_Box'>
        <div className='Content_con_topBox'>
          <div className='Content_con_titleBox'>
            <div className='Content_con_titleLeft'>MARKETPLACE.</div>
            <div className='Content_con_titleRight' onClick={ConnectWalletClick}>Connect Wallet</div>
          </div>
        </div>
        <div className='Content_con_container_Box'>
          <div className='Content_con_container_Box_text'>Choose the wallet to connect</div>
          <div className='Content_con_container_Box_box3'>
          {imgList.map((item,index) => {
              return <Link to={`/?param=Account`}><div className='Content_con_li'></div></Link>
            })}
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
