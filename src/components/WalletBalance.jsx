import React, { useState } from "react";
import { ethers } from "ethers";

const WalletBalance = () => {
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBalance = async () => {
    if (window.ethereum) {
      setLoading(true);
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        const bal = await provider.getBalance(address);
        const formatted = ethers.formatEther(bal);
        setBalance(Number(formatted).toFixed(4));
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center">
       {balance && (
        <button className="text-black font-bold text-lg cursor-default">
          Your Balance: {balance} ETH
        </button>
      )}
      <button className="btn btn-primary" onClick={fetchBalance} disabled={loading}>
        {loading ? "Fetching..." : "Show My Balance"}
      </button>

     
    </div>
  );
};

export default WalletBalance;

