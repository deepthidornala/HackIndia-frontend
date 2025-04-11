import React from "react";

const CollectionPage = () => {
  const nfts = [
    { id: 1, title: "Pixel Hero", description: "A rare digital warrior" },
    { id: 2, title: "Crypto Kitty", description: "Fluffy & on-chain" },
    { id: 3, title: "Space Ape", description: "From another galaxy" },
  ];

  return (
    <div className="min-h-screen bg-[#15162b] text-white p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Your NFT Collection</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {nfts.map((nft) => (
          <div
            key={nft.id}
            className="bg-[#1e2039] p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-1">{nft.title}</h3>
            <p className="text-sm text-gray-300">{nft.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;