import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoNewsApiHeaders={
    'X-BingApis-SDK': 'true',
		'X-RapidAPI-Key': '0a32cfa0acmshd1c0b03c24d3091p1b9d51jsnade1295aa6fe',
		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}
const baseUrl='https://bing-news-search1.p.rapidapi.com';
const createRequest=(url)=>{
    return ({url,headers:cryptoNewsApiHeaders})
}
export const cryptoNewsApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery :fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getNewsCrypto:builder.query({
            query:({newscategory,count})=>  createRequest(`/news/search?q=${newscategory}&safeSearch=Off&textFormat=Raw&count=${count}`)
        })
    })
}) 
export const {
    useGetNewsCryptoQuery,
}=cryptoNewsApi
// // const options = {
// //   method: 'GET',
// //   url: 'https://coinranking1.p.rapidapi.com/coins',
// //   params: {
// //     referenceCurrencyUuid: 'yhjMzLPhuIDl',
// //     timePeriod: '24h',
// //     'tiers[0]': '1',
// //     orderBy: 'marketCap',
// //     orderDirection: 'desc',
// //     limit: '50',
// //     offset: '0'
// //   },
// //   headers: {
// //     'X-RapidAPI-Key': '0a32cfa0acmshd1c0b03c24d3091p1b9d51jsnade1295aa6fe',
// //     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
// //   }
// // };
