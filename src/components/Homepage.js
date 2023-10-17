import React, { useState } from 'react'
import { useGetCryptosQuery } from '../services/cryptoapi'
import { Typography, Row, Col, Statistic } from 'antd';
import millify from 'millify';
import { Link } from 'react-router-dom';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Spinner from "../images/spinner.gif"
const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  // console.log("meenu", data)
  // const [response,setresponse]=useState(d.response)
  let response = data ? (data.data) : { stats: { total24hVolume: 0, totalCoins: 0, totalExchanges: 0, totalMarketCap: 0, totalMarkets: 0 } }
  if(isFetching){
    return <>
    <Typography.Title level={2} >Global Crypto Stats</Typography.Title>
    <div style={{height:"500px",width:"500px",textAlign:"center"}}><img src={Spinner} alt="" style={{marginTop:"151px",marginLeft:"384px"}}/></div>
    </>
  }
  
  const st = {
    width: "300px",
    //  border:"2px solid black",
    padding: "4px",
    margin: "5px 2px 5px 5px"


  }

  return (
    <>
      <Typography.Title level={2} >Global Crypto Stats</Typography.Title>
      {/* <Row>
  <Col span={12}><Statistic title="Total Cryptocurrencies" value={millify(response.stats.total)}/></Col>
  <Col span={12}><Statistic title="Total Exchanges" value={millify(response.stats.totalExchanges)}/></Col>
  <Col span={12}><Statistic title="Total Market Cap" value={millify(response.stats.totalMarketCap)}/></Col>
  <Col span={12}><Statistic title="Total " value={millify(response.stats.total24hVolume)}/></Col>
  <Col span={12}><Statistic title="Total Markets " value={millify(response.stats.totalMarkets)}/></Col>
  
</Row> */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center",
        justifyContent: "space-evenly"
      }} >
        <div style={st} >
          <div   >Total Cryptocurrencies</div>
          <div >{millify(response.stats.total)}</div>

        </div>
        <div style={st}>
          <div  >Total 24h Volume</div>
          <div   >{millify(response.stats.total24hVolume)}</div>

        </div>
        <div style={st}>
          <div   >Total Coins</div>
          <div  >{millify(response.stats.totalCoins)}</div>

        </div>

        <div style={st}>
          <div  >Total Exchanges</div>
          <div  >{millify(response.stats.totalExchanges)}</div>

        </div>

        <div style={st}>
          <div  >TotalMarketCap</div>
          <div  >{millify(response.stats.totalMarketCap)}</div>

        </div>

        <div style={st}>
          <div  >Total Markets</div>
          <div >{millify(response.stats.totalMarkets)}</div>

        </div>



      </div>
      <div className=' '>
        <Row>
          <Col span={12}> <Typography.Title level={4} >Top 10 Cryptocurrencies in the World</Typography.Title></Col>

          <Col span={12} ><Link to="/cryptocurrencies" style={{ marginLeft: "250px" }} ><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
            Show More
          </button></Link></Col>
        </Row>
        <Cryptocurrencies count={10} name="homepage"/>
        <Row>
          <Col span={12}> <Typography.Title level={4} value={"Latest Crypto News"}>Latest Crypto News</Typography.Title></Col>
          <Col span={12} level={5}><Link to="/news" ><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" style={{ marginLeft: "250px" }}>Read More
          </button></Link></Col>
        </Row>
        <News category={"Cryptocurrency"} count={10} />
      </div>


    </>
  )
}

export default Homepage
