import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoapi";
import { cryptoNewsApi } from "../services/cryptonewsapi";
export default configureStore({
    reducer:{
       [ cryptoApi.reducerPath]:cryptoApi.reducer,
       [ cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer,


    },
    middleware:  (getDefaultMiddleware) =>  getDefaultMiddleware().concat(cryptoApi.middleware)
    .concat(cryptoNewsApi.middleware)
    
   
       
})