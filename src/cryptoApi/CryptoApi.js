import React from "react";
import {createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react';



  export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://coinranking1.p.rapidapi.com',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key','83562a4277msh95ced091b9f94f8p1644dajsn8dd40410f16f'),
            headers.set('X-RapidAPI-Host', 'coinranking1.p.rapidapi.com')
            
            return headers;
        }
    }),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:()=>`/coins`
        }),
        getCryptoDetails:builder.query({
            query:(coinId)=>`/coin/${coinId}`
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => `coin/${coinId}/history?timeperiod=${timeperiod}`,
        })
    })

   
  })
  
  export const {useGetCryptosQuery}=cryptoApi;
  export const {useGetCryptoDetailsQuery}=cryptoApi;
  export const {useGetCryptoHistoryQuery}=cryptoApi;