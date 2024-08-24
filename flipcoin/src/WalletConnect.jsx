import React, { useState } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';

function WalletConnect() {
    const [provider, setProvider] = useState(null);

    const connectWallet = async () => {
        const web3Modal = new Web3Modal();
        const instance = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(instance);
        setProvider(provider);
    };

    return (
        <div>
            <button onClick={connectWallet}>Connect Wallet</button>
        </div>
    );
}

export default WalletConnect;
