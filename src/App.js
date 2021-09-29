import React, { useState, useEffect } from 'react'
import Balance from './components/Balance/Balance'
import CoinList from './components/Coin/CoinList';
import Header from './components/Header/Header';
import styled from 'styled-components'
import axios from 'axios'

const Div = styled.div`
  text-align: center;
  background-color: #25375a;
  color: #cccccc;
`

const COIN_COUNT = 5
const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/'
const formatPrice = (price) => parseFloat(price.toFixed(4))

function App() {

  const [balance, setBalance] = useState(10000);
  const [coinData, setCoinData] = useState([]);
  const [showBalance, setShowBalance] = useState(true);

  const componentDidMount = async () => {

    try {

      const response = await axios.get('https://api.coinpaprika.com/v1/coins')

      const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
      const coinPricesData = await Promise.all(coinIds.map(id => axios.get(tickerUrl + id)))
      const coinData = coinPricesData.map((response) => {
        const coin = response.data
        return {
          key: coin.id,
          name: coin.name,
          ticker: coin.symbol,
          balance: null,
          price: formatPrice(coin.quotes.USD.price)
        }
      })

      setCoinData(coinData)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (coinData.length === 0) {
      componentDidMount()
    }
  })

  const handleRefresh = async (changedTicker) => {
    const response = await axios.get(tickerUrl + changedTicker)

    const newCoinData = coinData.map(function (values) {
      let newValues = { ...values }
      if (changedTicker === values.key) {

        const newPrice = response.data.quotes.USD.price
        newValues.price = formatPrice(newPrice)

      }
      return newValues
    })

    setCoinData({ coinData: newCoinData })
  }

  const handleBalanceVisibility = () => {
    setShowBalance(oldValue => !oldValue)
  }

  return (
    <Div>
      <Header />
      <Balance amount={balance} handleBalanceVisibility={handleBalanceVisibility} showBalance={showBalance} />
      <CoinList showBalance={showBalance} coinData={coinData} handleRefresh={handleRefresh} />
    </Div>
  );

}

export default App;