import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrencyList extends Component {
  renderHeader = () => (
    <div className="list-header">
      <div className="list-coin-type-container">
        <p className="list-coin-type-heading">Coin</p>
        <p className="list-coin-type-heading">Type</p>
      </div>
      <div className="usd-and-euro-values-container">
        <p className="list-coin-value-heading">USD</p>
        <p className="list-coin-value-heading">EURO</p>
      </div>
    </div>
  )

  renderView = () => {
    const {cryptoData} = this.props

    return (
      <div className="cryptocurrencies-list-container">
        {this.renderHeader()}
        <ul className="cryptocurrencies-list">
          {cryptoData.map(eachCrypto => (
            <CryptocurrencyItem
              key={eachCrypto.id}
              cryptoDetails={eachCrypto}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptocurrency-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          className="cryptocurrency-img"
          alt="cryptocurrency"
        />
        {this.renderView()}
      </div>
    )
  }
}

export default CryptocurrencyList
