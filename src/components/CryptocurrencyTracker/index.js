import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

const api = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {
    cryptoData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCrypto()
  }

  getCrypto = async () => {
    try {
      const response = await fetch(api)
      const data = await response.json()
      console.log(data)
      this.setState({
        cryptoData: data.map(eachItem => ({
          id: eachItem.id,
          currencyLogoUrl: eachItem.currency_logo,
          currencyName: eachItem.currency_name,
          usdValue: eachItem.usd_value,
          euroValue: eachItem.euro_value,
        })),
        isLoading: false,
      })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  renderList = () => {
    const {cryptoData} = this.state

    return <CryptocurrenciesList cryptoData={cryptoData} />
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        {isLoading ? this.renderLoader() : this.renderList()}
      </div>
    )
  }
}
export default CryptocurrencyTracker
