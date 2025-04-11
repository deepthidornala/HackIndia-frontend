import React from "react";
import { useNavigate } from "react-router-dom";

const InitiateNFTPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#15162b] flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
        What would you like to initiate?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        <div
          className="cursor-pointer rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 p-8 text-center shadow-lg"
          onClick={() => navigate("/drop")}
        >
          <h2 className="text-2xl font-semibold mb-2">Drop</h2>
          <p>Start a new NFT drop with details, image, and price.</p>
        </div>
        <div
          className="cursor-pointer rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 p-8 text-center shadow-lg"
          onClick={() => navigate("/collection")}
        >
          <h2 className="text-2xl font-semibold mb-2">Collection</h2>
          <p>View and manage your existing NFT collections.</p>
        </div>
      </div>
    </div>
  );
};

export default InitiateNFTPage;