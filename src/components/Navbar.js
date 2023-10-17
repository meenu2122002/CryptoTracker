import React from 'react'
import "../App.css"
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from "../images/a.avif"



const Navbar = () => {
  const { Title } = Typography;
  return (
    <>

      <div className=" bg-blue-950 h-screen "  >
        <div className='logo-container'>
          {/* <img src={icon}  style={{height:"300px",width:"600px"}} /> */}
          <Avatar src={icon} size="large"></Avatar>
          <Title level={2} style={{textAlign:"center"}}>
            <Link to="/">Cryptoverse</Link>
          </Title>
        </div>
        <div>
          <Menu theme="dark">
            <Menu.Item icon={<HomeOutlined />}>
              <Link to="/home">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />}>
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined />}>
              <Link to="/coin/exchange/65PHZTpmE55b">Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
              <Link to="/news">News</Link>
            </Menu.Item>
          </Menu>
        </div>


      </div>
    </>

  )
}

export default Navbar
