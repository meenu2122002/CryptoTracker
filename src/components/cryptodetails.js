import Typography from 'antd/es/typography/Typography';
import React from 'react'
import { Link } from 'react-router-dom';

const Cryptodetails = (props) => {
  const {iconUrl,name,rank,price,num,change,marketcap,uuid}=props;
  console.log(uuid,"uuid")
  return (

    <div style={{border:"1px solid black" ,margin:"2px",width:"245px"}}>
      <Link to={`/crypto/${uuid}`}>
      <div >
        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-4 pb-4 rounded-lg overflow-hidden text-center relative" >
         <Link> <img src={iconUrl} alt="" style={{position:"absolute",right:"4px",borderRadius:"6px",height:"20px",width:"20px",backgroundImage:'url('}}/></Link>
        <Typography.Title level={5} value={name}>{name}</Typography.Title>
          <h2 >Rank of Coin:{rank}</h2>
          <h3 >Price of Coin:{price}</h3>
          <h3 >Daily Change:{change}%</h3>
          <h3 >Market Cap:{marketcap}</h3>
       
          
        </div>
      </div>
      </Link>
      <Link to={`/coin/exchange/${uuid}`}>
      <div style={{textAlign:"center",padding:"5px"}}>
      <button className='bg-blue-500' style={{border:"1px solid black",borderRadius:"3px",textAlign:"center"}}>Exchange</button>
      </div>
      </Link>
      
      
      
    </div>
  )
}

export default Cryptodetails
