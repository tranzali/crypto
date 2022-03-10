import { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.css';
import Coin from './component/Coin';

function App() {
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    // https://documenter.getpostman.com/view/5734027/RzZ6Hzr3 for api 
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=10")
      .then((res) => {
        setCrypto(res.data.coins);
      })

  },[])

  return (
    <div className="App">
      <div className="cryptoHead"></div>
      <div className="cryptoList">
      {crypto.map((coin) => {
        return (
          <Coin 
            key={coin.id.toString()}
            name={coin.name} 
            icon={coin.icon} 
            price={coin.price} 
            symbol={coin.symbol} 
          />
        )
      })}
      </div>
    </div>
  );
}

export default App;
