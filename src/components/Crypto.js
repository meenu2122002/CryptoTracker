import React, { useState, useEffect } from 'react'
import { useGetCoinQuery } from "../services/cryptoapi"
import { useParams } from 'react-router-dom'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import millify from 'millify';
import Avatar from 'antd/es/avatar/avatar';
import Exchanges from './Exchanges';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import HTMLReactParser from 'html-react-parser';
import Linechart from "./linechart"
import { useGetCoinHistoryQuery } from '../services/cryptoapi';
import Spinner from "../images/spinner.gif"



const { Title } = Typography
const Crypto = () => {
  const { coinId } = useParams()
const [timeperiod,setperiod]=useState('7d')
  const { data } = useGetCoinQuery(coinId)
  const time=["24h","7h","7d","12h","23d","27d"]
  const {data:coinHistory,isFetching}=useGetCoinHistoryQuery({timeperiod,coinId})
  console.log("history",coinHistory)
  const [cryptodetails, setcryptodetails] = useState(data?.coin)
  const [cryptohist, setcryptohist] = useState(coinHistory)
  const [stats, setstats] = useState()
  const [general, setgeneral] = useState()
  const [i, seti] = useState(0)

  // console.log("res", data);

  useEffect(() => {
    if (!data) {
      seti(i + 1)


    }
    else if(data){
      console.log("k", (data.data.coin))
      setcryptodetails(data.data.coin)
      
      
    }


  }, [i])
  if(isFetching){
    return <>
    <div style={{ height: "100px" }}>
        <h1 style={{ fontSize: "25px", textAlign: "center", color: "blue", fontWeight: "900" }}>
          {`${cryptodetails?.name || ""} (${(cryptodetails?.name)?.toLowerCase() || ""}-${(cryptodetails?.symbol) || ""})`}Price
        </h1>
        <p style={{ textAlign: "center", fontWeight: "500" }}>{cryptodetails?.name || ""} live price in US Dollars.View value statistics and Market cap </p>
      </div>
    <div style={{height:"500px",width:"500px",textAlign:"center"}}><img src={Spinner} alt="" style={{marginTop:"151px",marginLeft:"384px"}}/></div>
    </>
  }

  const handlechange=(e)=>{
setperiod(e.target.value)
  }
  return (
    <>
   
      <div style={{ height: "100px" }}>
        <h1 style={{ fontSize: "25px", textAlign: "center", color: "blue", fontWeight: "900" }}>
          {`${cryptodetails?.name || ""} (${(cryptodetails?.name)?.toLowerCase() || ""}-${(cryptodetails?.symbol) || ""})`}Price
        </h1>
        <p style={{ textAlign: "center", fontWeight: "500" }}>{cryptodetails?.name || ""} live price in US Dollars.View value statistics and Market cap </p>
      </div>
      <div >
      <select style={{width:"300px",border:"1px solid black",padding:"5px"}} onChange={handlechange}>
      <option value={timeperiod}>{timeperiod}</option>
        { 
          time.map(e=>{
            return  <option value={e}>{e}</option>
          })
        }
   
    
  </select>
      </div>
      {
    (cryptodetails && coinHistory)?<><Linechart coinHistory={coinHistory} coinName={cryptodetails.name} currentPrice={cryptodetails.price}/></>:""
   }
      <div style={{display:"flex",justifyContent:"space-between",padding:"20px"}}>
      {
        cryptodetails?<>
        <div >

        <h1 style={{fontSize:"20px",fontWeight:"800",fontFamily:"Open Sans"}}>{`${cryptodetails.name} Value Statistics`}</h1>
        <p style={{fontFamily:"Open Sans"}}>An overview showing the stats of {cryptodetails.name}</p>
        <div style={{ width: "300px", height: "300px" }}>
      
      <div style={{display:"grid",gridTemplateColumns:"30px 200px 70px",justifyContent:"space-between",alignItems:"center",marginTop:"10px"}}>
      <Avatar size={30} icon={<DollarCircleOutlined />} />
     <Title level={5} style={{padding:"2px"}}>Price of Coin</Title>
     <div style={{paddingBottom:"9px"}}>{`$${cryptodetails.price ? millify(cryptodetails.price) : ""}`}</div>

      </div>
      <div style={{display:"grid",gridTemplateColumns:"30px 200px 70px",justifyContent:"space-between",alignItems:"center",marginTop:"10px"}}>
      <Avatar size={30} icon={<NumberOutlined />} />
     <Title level={5} style={{padding:"2px"}}>Rank</Title>
     <div style={{paddingBottom:"9px"}}>{`${cryptodetails.rank ? millify(cryptodetails.rank) : ""}`}</div>

      </div>
      <div style={{display:"grid",gridTemplateColumns:"30px 200px 70px",justifyContent:"space-between",alignItems:"center",marginTop:"10px"}}>
      <Avatar size={30} icon={ <ThunderboltOutlined />} />
     <Title level={5} style={{padding:"2px"}}>24th Volume</Title>
     <div style={{paddingBottom:"9px"}}>{`${cryptodetails.volume ? millify(cryptodetails.volume) : ""}`}</div>

      </div>
      <div style={{display:"grid",gridTemplateColumns:"30px 200px 70px",justifyContent:"space-between",alignItems:"center",marginTop:"10px"}}>
      <Avatar size={30} icon={<DollarCircleOutlined />} />
     <Title level={5} style={{padding:"2px"}}>Market Cap</Title>
     <div style={{paddingBottom:"9px"}}>${`${cryptodetails.marketCap ? millify(cryptodetails.marketCap) : ""}`}</div>

      </div>
      <div style={{display:"grid",gridTemplateColumns:"30px 200px 70px",justifyContent:"space-between",alignItems:"center",marginTop:"10px"}}>
      <Avatar size={30} icon={<TrophyOutlined />} />
     <Title level={5} style={{padding:"2px"}}>All-time-high(daily avg.)</Title>
     <div  style={{paddingBottom:"9px"}}>{`$ ${cryptodetails?.supply?.circulating && millify(cryptodetails?.supply?.circulating)}`}</div>

      </div>
      
  </div>
        </div>
        
        </>:""
      }
      {
        cryptodetails?<>
        <div>

        <h1 style={{fontSize:"20px",fontWeight:"800",fontFamily:"Open Sans"}}>{` Other Statistics`}</h1>
        <p style={{fontFamily:"Open Sans"}}>An overview showing the stats of {cryptodetails.name}</p>
        <div style={{ width: "300px", height: "300px" }}>
      
      <div style={{display:"grid",gridTemplateColumns:"30px 200px 70px",justifyContent:"space-between",alignItems:"center",marginTop:"10px"}}>
      <Avatar size={30} icon={<FundOutlined />} />
     <Title level={5} style={{padding:"2px"}}>Number Of Markets</Title>
     <div style={{paddingBottom:"9px"}}>{`${cryptodetails.numberOfMarkets ? (cryptodetails.numberOfMarkets) : ""}`}</div>

      </div>
      <div style={{display:"grid",gridTemplateColumns:"30px 200px 70px",justifyContent:"space-between",alignItems:"center",marginTop:"10px"}}>
      <Avatar size={30} icon={<MoneyCollectOutlined />} />
     <Title level={5} style={{padding:"2px"}}>Number Of Exchanges</Title>
     <div style={{paddingBottom:"9px"}}>{`${cryptodetails.numberOfExchanges ? (cryptodetails.numberOfExchanges) : ""}`}</div>

      </div>
      <div style={{display:"grid",gridTemplateColumns:"30px 200px 70px",justifyContent:"space-between",alignItems:"center",marginTop:"10px"}}>
      <Avatar size={30} icon={ <ExclamationCircleOutlined />} />
     <Title level={5} style={{padding:"2px"}}>Aprroved Supply</Title>
     <div style={{paddingBottom:"9px"}}>{cryptodetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />}</div>

      </div>
      <div style={{display:"grid",gridTemplateColumns:"30px 200px 70px",justifyContent:"space-between",alignItems:"center",marginTop:"10px"}}>
      <Avatar size={30} icon={<ExclamationCircleOutlined />} />
     <Title level={5} style={{padding:"2px"}}>Total Supply</Title>
     <div style={{paddingBottom:"9px"}}>{`$ ${cryptodetails?.supply?.total && millify(cryptodetails?.supply?.total)}`}</div>

      </div>
      <div style={{display:"grid",gridTemplateColumns:"30px 200px 70px",justifyContent:"space-between",alignItems:"center",marginTop:"10px"}}>
      <Avatar size={30} icon={<ExclamationCircleOutlined />} />
     <Title level={5} style={{padding:"2px"}}>Circulating Supply</Title>
     <div  style={{paddingBottom:"9px"}}>{`$ ${cryptodetails?.supply?.circulating && millify(cryptodetails?.supply?.circulating)}`}</div>

      </div>
      
  </div>
        </div>
        
        </>:""
      }
    
      </div>
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <div>
      {cryptodetails?.description?<>
   <div style={{color:"blue",fontFamily:"Open Sans",fontWeight:"800",fontSize:"20px",paddding:"20pcx"}}>What is {cryptodetails.name}</div>
   <div>{HTMLReactParser(cryptodetails.description)}</div>
   </>:""}
      </div>
      <div >
        <h1 style={{fontSize:"20px",fontFamily:"Open Sans",fontWeight:"800"}}>{cryptodetails?.name} Links</h1>
<div >
{
  cryptodetails?.links.map(e=>{
    return <>
    <div style={{display:"flex",justifyContent:"space-between",width:"400px",padding:"15px"}}>
      <span>{e.type}</span>
     <Link to={e.url} style={{color:"blue"}}> <span>{e.name}</span></Link>
    </div>
    
    </>
  })
}

</div>

      </div>
      
      </div>
      
  
      
    </>
  )
}

export default Crypto
