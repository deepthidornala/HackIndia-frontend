import React from "react";
import Install from "../components/Install";
import WalletBalance from "../components/WalletBalance";
import WalletConnect from "../components/WalletConnect";

const Login = () => {
  const isMetaMaskInstalled = typeof window.ethereum !== "undefined";

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        {!isMetaMaskInstalled ? (
          <Install />
        ) : (
          <>
            <h1 className="text-black text-3xl font-bold text-center mb-4">Login</h1>
            <p className="text-center text-gray-500 mb-6">
              Connect your wallet to continue
            </p>
            <div className="flex flex-col gap-4 items-center">
              <WalletConnect />
              <WalletBalance />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;