import React from 'react'
import Layout from '../../components/Layout/Layout'
import { useGetCryptosQuery } from '../../cryptoApi/CryptoApi'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useState,useEffect } from 'react';


function Cryptocurrencies() {
  const{data: cryptoList,isFetching}=useGetCryptosQuery();

const[cryptos,setCryptos]=useState();
const[searchedItem,setSearchedItem]=useState('');

useEffect(()=>{
  setCryptos(cryptoList?.data?.coins);
  const searchedResult=cryptoList?.data?.coins.filter((item)=>item.name.toLowerCase().includes(searchedItem))
 
  setCryptos(searchedResult)
},[cryptoList,searchedItem])


  return (
   <Layout>


     <div>

     <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchedItem(e.target.value.toLowerCase())}
            value={searchedItem}
          />
        </div>
      
     <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >

            {/* Note: Change currency.id to currency.uuid  */}
            <Link key={currency.uuid} to={`/cryptoDetails/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    
      </div>
   </Layout>
  )
}

export default Cryptocurrencies