import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cryptocurrencies from './Pages/Cryptocurrencies/Cryptocurrencies'
import CryptoDetails from './Pages/CryptoDetails/CryptoDetails'
import Exchanges from './Pages/Exchanges/Exchanges'
import News from './Pages/News/News'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='exchanges' element={<Exchanges/>} />
          <Route path='cryptocurrencies' element={<Cryptocurrencies/>} />
          <Route path='cryptodetails/:coinId' element={<CryptoDetails/>} />
         
          <Route path='news' element={<News/>} />
        </Routes>
      
    </>
  )
}

export default App
