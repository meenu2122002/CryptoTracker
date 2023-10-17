import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders={
    'X-RapidAPI-Key': '0a32cfa0acmshd1c0b03c24d3091p1b9d51jsnade1295aa6fe',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl='https://coinranking1.p.rapidapi.com';
const createRequest=(url)=>{
    return ({url,headers:cryptoApiHeaders})
}
export const cryptoApi=createApi({
    reducerPath:'crypto',
    baseQuery :fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=>  createRequest(`/coins?limit=${count}`)
        }),
        getCoin:builder.query({
            query:(coinid)=>  createRequest(`/coin/${coinid}`)
        }),
        getCoinHistory:builder.query({
            query:({timeperiod,coinId})=>  createRequest(`/coin/${coinId}/history?timePeriod=${timeperiod}`)
        }),
        getExchanges:builder.query({
            query:(coinId)=>  createRequest(`/coin/${coinId}/exchanges?limit=50`)
        })
        // getCryptos and getCrypto has case sensitive i.e getcrypto instead of getCrypto will raise error
    })
}) 
export const {useGetCryptosQuery,useGetCoinQuery,useGetCoinHistoryQuery,useGetExchangesQuery}=cryptoApi
// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     'tiers[0]': '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'X-RapidAPI-Key': '0a32cfa0acmshd1c0b03c24d3091p1b9d51jsnade1295aa6fe',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// };
