import { useState, useEffect } from 'react';
import { BrowserProvider } from 'ethers';

const WalletConnect = () => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
      } catch (error) {
        if (error.code === 4001) {
          alert("Connection request was rejected. Please try again.");
        } else {
          console.error("Wallet connection error:", error);
          alert("An unexpected error occurred while connecting your wallet.");
        }
      }
    } else {
      alert("MetaMask not detected!");
    }
  };

  const disconnectWallet = () => {
    // Just clear the account state
    setAccount(null);
    alert("Wallet disconnected.");
  };

  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        const provider = new BrowserProvider(window.ethereum);
        const accounts = await provider.listAccounts();
        if (accounts.length > 0) {
          setAccount(accounts[0].address);
        }
      }
    };
    checkConnection();
  }, []);

  return (
    <div className="text-black flex items-center gap-4">
      {account ? (
        <>
          <div className="badge badge-success">
            Connected: {account.slice(0, 6)}...{account.slice(-4)}
          </div>
          <button className="btn btn-outline btn-error" onClick={disconnectWallet}>
            Logout
          </button>
        </>
      ) : (
        <button className="btn btn-primary" onClick={connectWallet}>
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletConnect;
