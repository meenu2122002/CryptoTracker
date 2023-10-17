import Chart from 'chart.js/auto';
import React from 'react'
import { Line } from 'react-chartjs-2'




const Linechart = ({coinHistory,coinName,currentPrice}) => {
    const coinPrice=[]
    const coinTimestamp=[]
    for(let i=0;i<coinHistory?.data?.history?.length;i++){
coinPrice.push(coinHistory?.data?.history[i].price)
coinTimestamp.push(new Date((coinHistory?.data?.history[i].timestamp))?.toLocaleDateString())
// 
    }
    const data={
        labels: coinTimestamp,
        datasets: [{
          label: 'Price in USD',
          data: coinPrice,
         fill:false,
         backgroundColor:"#0071bd",
         borderColor:"##0071bd"
        }]
      }
      const options={
        scales: {
          yAxes: {
           ticks:{
            
beginAtZero:true
           }
          }
        }
      }
  return (
    <div>
      <Line data={data} options={options}/>
    </div>
  )
}

export default Linechart