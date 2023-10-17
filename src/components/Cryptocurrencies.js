import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { useGetCryptosQuery } from '../services/cryptoapi'
import { Row, Col } from 'antd'
import Cryptodetails from './cryptodetails'
import { useRef } from 'react';
import {Typography} from "antd"
import Spinner from "../images/spinner.gif"

const Cryptocurrencies = ({ count ,name}) => {

  const { data, isFetching } = useGetCryptosQuery(count)
  console.log("cryptocurrency",data)
  const [querycrypto, setquerycrypto] = useState("")
  const [cryptocurrencies, setcryptocurrencies] = useState(data ? data.data.coins : [])

  // console.log(name,cryptocurrencies)

  const [i, seti] = useState(0)

  // if(!isFetching){
  //   setcryptocurrencies(data.data.coins)
  // }
  // const [ip,setip]=useState(0)
  const handlequery = (e) => {
    setquerycrypto(e.target.value)
    console.log("handle")
    let a=querycrypto.trim();
    if (a.length == 0){
      console.log("empty")
      setcryptocurrencies([]);
      return;
    }
   

    const filtereddata = (data.data.coins)?.filter(e => {
      console.log(querycrypto)
      return (e.name.toLowerCase().startsWith(querycrypto.toLowerCase()));
    })
    console.log("filt", filtereddata)
   
      setcryptocurrencies(filtereddata);
   

  }

  useEffect(() => {
    if (!data) {
      seti(i + 1)
      console.log("m")

    }
    else {
      console.log("k",(data?.data?.coins||"k"))
      setcryptocurrencies(data.data.coins)
    }
    




  }, [i])


  if(isFetching){
    return <>
    <Typography.Title level={2} >Global Crypto Stats</Typography.Title>
    <div style={{height:"500px",width:"500px",textAlign:"center"}}><img src={Spinner} alt="" style={{marginTop:"151px",marginLeft:"384px"}}/></div>
    </>
  }

  return (
    <>
      {
        (name=="cryptocurrencies")?<div style={{border:"1px solid black"}}>
        <input type="text"  style={{width: "891px",height:"50px",padding:"5px"}} placeholder='Search' onChange={handlequery} />
        <button style={{backgroundColor:"black",padding:"5px",color:"white",width:"100px",height:"50px"}} onClick={handlequery}>Search</button>
      </div>:""
      }

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", justifyContent: "space-between" }} >
        {cryptocurrencies.map((e, i) => {
          console.log("called")
          return <Cryptodetails btcPrice={e.btcPrice ? millify(e.btcPrice) : ""} name={e.name ? (e.name) : ""} price={e.price ? millify(e.price) : ""} rank={e.rank ? millify(e.rank) : ""} marketcap={e.marketCap ? millify(e.marketCap) : ""} iconUrl={e.iconUrl ? e.iconUrl : ""} coinrankingUrl={e.coinrankingUrl ? (e.coinrankingUrl) : ""} change={e.change ? parseFloat(e.change) : ""} num={i + 1}
uuid={e.uuid}
          />
        })

        }
      </div>
    </>

  )
}

export default Cryptocurrencies
