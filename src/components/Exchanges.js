import React from 'react'
import { useGetExchangesQuery } from '../services/cryptoapi'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import { Link } from 'react-router-dom'
import Spinner from "../images/spinner.gif"
import {Typography} from "antd"

const Exchanges = () => {
  const { coinId } = useParams()
  const { data, isFetching } = useGetExchangesQuery(coinId)
  console.log(data)
  if(isFetching){
    return <>

  <div style={{backgroundColor:"black",height:"60px",textAlign:"center",paddingTop:"10px",marginBottom:"20px",fontFamily:"Open Sans"}}>
    <div style={{fontSize:"20px",textAlign:"center",borderRadius:"5px",color:"black",backgroundColor:"white",height:"40px",padding:"5px",width:"866px",marginLeft:"62px"}}>Crypto Compass: Navigating the Ever-Evolving World of Digital Money</div>
    </div>
    <div style={{height:"500px",width:"500px",textAlign:"center"}}><img src={Spinner} alt="" style={{marginTop:"151px",marginLeft:"384px"}}/></div>
    </>
  }
  return (
    <>
    
     <div style={{backgroundColor:"black",height:"60px",textAlign:"center",paddingTop:"10px",marginBottom:"20px",fontFamily:"Open Sans"}}>
    <div style={{fontSize:"20px",textAlign:"center",borderRadius:"5px",color:"black",backgroundColor:"white",height:"40px",padding:"5px",width:"866px",marginLeft:"62px"}}>Crypto Compass: Navigating the Ever-Evolving World of Digital Money</div>
    </div>
      {
        !isFetching ? <>
        <div>
 <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", border: "1px solid black", fontFamily: "Open Sans", fontWeight: "800" }}>
            <div style={{ display: "flex", width: "200px",justifyContent:"space-between" }}>
              <span  >
                Image
              </span><span>Coin</span>
            </div>


            <span style={{ width: "60px" }}>Price</span>
            <span style={{ width: "60px" }}>NumberOfMarkets</span>
            <span style={{ width: "60px" }}>BtcPrice</span>
            <span style={{ width: "60px" }}>Rank</span>

          </div>
        </div>
         
          {
            data.data.exchanges.map(e => {
              return <>
<Link to={`/crypto/${coinId}`}>
<div style={{ display: "flex", justifyContent: "space-between", padding: "10px", border: "1px solid black" }}>
                  <div style={{ display: "flex", width: "200px",justifyContent:"space-between" }}>
                    <img src={e.iconUrl} style={{ height: "20px", width: "20px", borderRadius: "5px" }}>

                    </img><span>{e.name ? e.name : ""}</span>
                   
                  </div>


                  <span style={{ width: "60px" }}>{e.price ? millify(e.price) : "not present"}</span>
                  <span style={{ width: "60px" }}>{e.numberOfMarkets ? e.numberOfMarkets : "not present"}</span>
                  <span style={{ width: "60px" }}>{e.btcPrice ? parseFloat(e.btcPrice).toPrecision(4) : "nnn"
                  }</span>
                  <span style={{ width: "60px" }}>{e.rank ? e.rank : ""
                  }</span>

                </div></Link>
                

              </>
            })
          }


        </> : ""
      }
    </>
  )
}

export default Exchanges
