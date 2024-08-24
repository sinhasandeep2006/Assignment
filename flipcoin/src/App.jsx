import React from 'react';
import CoinFlip from './CoinFlip';
import WalletConnect from './WalletConnect'; 


function App() {
    return (
        <div>
            <h1>Coin Flip Game</h1>
            <WalletConnect />
            <CoinFlip />
        </div>
    );
}

export default App;
