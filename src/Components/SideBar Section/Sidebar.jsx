import React from 'react'
import './sidebar.css'

// imported image ##############>
import logo from '../../Assets/logo1.png'

// imported menu icon ##############>
import {IoMdSpeedometer} from 'react-icons/io'
import {MdDeliveryDining} from 'react-icons/md'
import {MdOutlineExplore} from 'react-icons/md'
import {BsTrophy} from 'react-icons/bs'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BiTrendingUp} from 'react-icons/bi'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import {BsCreditCard2Front} from 'react-icons/bs'



const Sidebar = () => {
  return (
    <div className='sideBar grid'>
      {/* *************************Logo section start*******************  */}
      <div className="logoDiv flex">
        <img src= {logo} alt="logo" /> 
        <h2>Plants.</h2>
      </div>
      {/* ************************Logo section end**********************  */}

      {/* *************************Menu Section Start******************** */}
      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK ACCESS
        </h3>
        <ul className='menuList grid'>

          <li className="listItem">
            <a href="" className='menuLink flex'>
              <IoMdSpeedometer  className='icon'/>
              <span className='smallText'>
                Dash Board
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="" className='menuLink flex'>
              <MdDeliveryDining  className='icon'/>
              <span className='smallText'>
                My Order
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="" className='menuLink flex'>
              <MdOutlineExplore  className='icon'/>
              <span className='smallText'>
                Explor
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="" className='menuLink flex'>
              <BsTrophy  className='icon'/>
              <span className='smallText'>
                Products
              </span>
            </a>
          </li>

        </ul>
      </div>
      {/* ************************Menu Section End************************ */}

      {/* ************************Setting section Start*********************************** */}
      <div className="settingDiv">
        <h3 className="divTitle">
          SETTINGS
        </h3>
        <ul className='menuList grid'>

          <li className="listItem">
            <a href="" className='menuLink flex'>
              <AiOutlinePieChart  className='icon'/>
              <span className='smallText'>
                Charts
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="" className='menuLink flex'>
              <BiTrendingUp  className='icon'/>
              <span className='smallText'>
                Trends
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="" className='menuLink flex'>
              <MdOutlinePermContactCalendar  className='icon'/>
              <span className='smallText'>
                Contact
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="" className='menuLink flex'>
              <BsCreditCard2Front  className='icon'/>
              <span className='smallText'>
                Billing
              </span>
            </a>
          </li>

        </ul>
      </div>
      {/* ************************Setting section End************************************* */}
    </div>
  )
}

export default Sidebar
