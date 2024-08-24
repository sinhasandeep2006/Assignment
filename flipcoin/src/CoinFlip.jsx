import React, { useState } from 'react';

function CoinFlip() {
    const [betAmount, setBetAmount] = useState('');
    const [side, setSide] = useState('heads');

    const flipCoin = async () => {
        // Logic to interact with the smart contract
    };

    return (
        <div>
            <input
                type="number"
                value={betAmount}
                onChange={(e) => setBetAmount(e.target.value)}
                placeholder="Bet Amount"
            />
            <select value={side} onChange={(e) => setSide(e.target.value)}>
                <option value="heads">Heads</option>
                <option value="tails">Tails</option>
            </select>
            <button onClick={flipCoin}>Flip Coin</button>
        </div>
    );
}

export default CoinFlip;
