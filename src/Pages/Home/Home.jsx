import React from 'react'
import Layout from '../../components/Layout/Layout'
import { useGetCryptosQuery } from '../../cryptoApi/CryptoApi'
import millify from 'millify';
import { Typography, Row, Col, Card , Statistic } from 'antd'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useGetNewsQuery } from '../../newsApi/NewsApi';
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies'
function Home() {

  const { Title } = Typography;
  const { data, isFetching } = useGetCryptosQuery();

  
  const globalStats = data?.data?.stats;
  const bestCoins = data?.data?.coins;

  return (
    <Layout>

      <Title level={2} className="heading ">Global Crypto Stats</Title>
      <Row className='px-8' gutter={[15, 20]}>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats?.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats?.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={`$${millify(globalStats?.totalMarketCap)}`} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={`$${millify(globalStats?.total24hVolume)}`} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats?.totalMarkets)} /></Col>
      </Row>
      <div className='flex flex-row justify-between items-center mx-8 my-4'>
        <Title level={2}>Top 10 cryptocurrencies</Title>
        <Title level={3}><Link to={'/cryptocurrencies'}>Show More</Link></Title>
      </div>


      <Row gutter={[32, 32]} className="crypto-card-container">
      {
        bestCoins && bestCoins.slice(0, 8).map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >

            {/* Note: Change currency.id to currency.uuid  */}
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
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
        ))
      } 
      </Row>
   
      
      <div className='flex flex-row justify-between items-center mx-8 my-4'>
        <Title level={2}>Latest cryptocurrency news</Title>
        <Title level={3}><Link to={'/cryptocurrencies'}>Show More</Link></Title>
      </div>



    </Layout>
  )
}

export default Home;
