import React from 'react'
import { Typography } from 'antd'
import { Link } from 'react-router-dom'



const Newitem = ({ name, description, url, image, datepublished, provider }) => {
    let months = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const d = new Date(datepublished);
    const defaultimage = "https://tse1.mm.bing.net/th?id=OIP.bgvMu8vQcELlufCQPSZivgHaEK&pid=Api&rs=1&c=1&qlt=95&w=165&h=92";
    return (
        <div style={{ border: "1px solid black", margin: "2px", width: "330px", height: "300px" }}>

            <Link to={url}>

                <div class="h-full bg-gray-100 bg-opacity-75 p-2 rounded-lg overflow-hidden text-center relative" >
                    <div style={{ display: "flex", justifyContent: "space-between" }}>

                        <Typography.Title level={5}>{name.slice(0, 75)}</Typography.Title>
                        <Link>
                            <img src={image} alt="cryptonews" style={{ borderRadius: "10px", height: "100px", width: "150px" }} /></Link>
                    </div>

                    <p style={{ padding: "2px" ,height:"100px"}}>{description.slice(0, 150)}</p>
                    <h3 style={{padding:"10px"}}>datePublished:{d.getDate()}{" "}{months[d.getMonth()]} {d.getFullYear()}{" "}{d.getHours()}:{d.getMinutes()}:{d.getSeconds()}</h3>
                    <div style={{display:"flex",marginBottom:"2px"}}>
                        <img src={provider?.image?.thumbnail?.contentUrl || defaultimage} alt="Content provider" style={{ borderRadius: "46px", height: "46px", width: "46px" }} />
                        <h1 style={{fontSize:"15px",padding:"2px"}}>{((provider?.name).charAt(0).toUpperCase()+(provider?.name).slice(1)) || "Content Provider information is currently not Available"} </h1>
                        </div>


                </div>

            </Link>

        </div>
    )
}

export default Newitem
