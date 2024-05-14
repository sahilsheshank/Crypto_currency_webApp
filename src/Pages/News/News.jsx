import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { useGetNewsQuery } from '../../newsApi/NewsApi';
import axios from 'axios';
function News() {

  const[news,setNews]=useState();

  const { data:newsData, isFetching } = useGetNewsQuery({
    query: 'Crypto Currency',
  });

  
 
    const getData=async (query,e)=>{
      
      try{
        let response= await axios.get('https://api.currentsapi.services/v1/latest-news' +
        'language=us&' +
        'apiKey=7rYXFG2Y2B4G0gAQ-J_j2E_sNRiajr7jPIXiVY4qf7jJe_2A')
        console.log(response.data)
        setNews(response.data)
      }
      catch(error){
        console.error(error)
      }
    }
    
   
   
   
 
  
 
  

  // useEffect((e)=>{
    
  //   setNews(newsData)
  //   console.log(news)
  // },[newsData])
  // console.log(newsData);
  
  return (
   <Layout>
     <div>
       
      </div>
   </Layout>
  )
}

export default News
