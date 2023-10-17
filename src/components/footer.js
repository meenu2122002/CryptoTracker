import React from 'react'
import { Space } from 'antd'
import Typography from 'antd/es/typography/Typography'
import Link from 'antd/es/typography/Link'


const Footer = () => {
    return (
        <div className='bg-blue-950 text-white text-center' >

            <Typography.Title level={5} >
                Cryptoverse <br />
                All Rights Reserved
            </Typography.Title>
            <Space>
                <Link to="/home">Home</Link>
                <Link to="/exchanges">Exchanges</Link>
                <Link to="/news">News</Link>
            </Space>
        </div>
    )
}

export default Footer
