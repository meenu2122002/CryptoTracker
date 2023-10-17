import React, { useState,useEffect } from 'react'
import {useGetNewsCryptoQuery } from '../services/cryptonewsapi'
import Newitem from "./newsitem"

const News = ({count,category}) => {
  const {data}=useGetNewsCryptoQuery({newscategory:category,count:count})
  console.log("newsapi",data)
const [news,setnews]=useState([])
const [i,seti]=useState(0)
const defaultimage="https://tse1.mm.bing.net/th?id=OIP.bgvMu8vQcELlufCQPSZivgHaEK&pid=Api&rs=1&c=1&qlt=95&w=165&h=92";


useEffect(() => {

  if (!data) {
    seti(i + 1)
    console.log("m")

  }
  else {
    console.log("p",data.value)
    setnews(data.value)
  }
  
}, [i])




  return (
    <>
    <div style={{backgroundColor:"black",height:"60px",textAlign:"center",paddingTop:"10px",fontFamily:"Open Sans"}}>
    <div style={{fontSize:"20px",textAlign:"center",borderRadius:"5px",color:"black",backgroundColor:"white",height:"40px",padding:"5px",width:"866px",marginLeft:"62px"}}>Crypto Compass: Navigating the Ever-Evolving World of Digital Money</div>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",alignItems:"center",marginTop:"20px"}}>
     
     {
      // image={e.image.thumbnail.contentUrl
        // ?e.image.thumbnail.contentUrl:defaultimage} 
      news.map(e=>{
        return  <Newitem name={e.name} url={e.url}  description={e.description?e.description:""} datepublished={e.datePublished} image={e.image?e.image.thumbnail.contentUrl:defaultimage} provider={e.provider?e.provider[0]:""}/>
      })
     }
    </div>
    </>
    
  )
}

export default News
