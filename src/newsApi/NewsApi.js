import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const options = {
    method: 'GET',
    url: 'https://real-time-finance-data.p.rapidapi.com/search',
    params: {
      query: 'Apple',
      language: 'en'
    },
    headers: {
      'X-RapidAPI-Key': '83562a4277msh95ced091b9f94f8p1644dajsn8dd40410f16f',
      'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
    }
  };

  


  

    export const NewsApi=createApi({
    reducerPath:'NewsApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://newsapi90.p.rapidapi.com/',
      prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', '83562a4277msh95ced091b9f94f8p1644dajsn8dd40410f16f');
        headers.set('X-RapidAPI-Host', 'newsapi90.p.rapidapi.com');
        return headers;
      },
    }),
    endpoints: (builder) => ({
      getNews: builder.query({
        query: ({ query, language, region }) => ({
          url: 'search',
          params: {
            query,
          },
        }),
      }),
    }),
  });
  export const {useGetNewsQuery}=NewsApi;
  