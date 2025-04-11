import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const featuredNFTs = [
  {
    image: "/images/nft1.png",
    title: "Celestial Beast",
    creator: "AuroraArt",
    price: "1.2 ETH",
  },
  {
    image: "/images/nft2.png",
    title: "Cyber Samurai",
    creator: "TechnoBlade",
    price: "0.9 ETH",
  },
  {
    image: "/images/nft3.png",
    title: "Neon Jungle",
    creator: "NeonNova",
    price: "2.1 ETH",
  },
];

const keyFeatures = [
  "Creator-Owned Contracts",
  "Custom Royalties",
  "Decentralized Trading",
];



const HomePage = () => {
  
const navigate = useNavigate();
const handleConnectWallet = () => {
  navigate("/login"); // ← Redirect on button click
}

  return (
    <>
      {/* Hero Image Section */}
      <div className="hero-banner">
        <div className="hero-text">
          <h1 className="hero-title">THE VAULT</h1>
          <p className="hero-subtitle">Discover, collect, and sell extraordinary NFTs</p>
        </div>
      </div>

      {/* Featured Collections */}
      <div className="homepage-container">
        <h2 className="section-title">Featured Collections</h2>
        <div className="nft-grid">
          {featuredNFTs.map((nft, index) => (
            <div className="nft-card" key={index}>
              <img src={nft.image} alt={nft.title} />
              <div className="nft-card-info">
                <h4>{nft.title}</h4>
                <p>By {nft.creator}</p>
                <span className="nft-price">{nft.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Start Creating, Start Collecting</h2>
        <p>Connect your wallet to mint, sell, and discover new NFTs.</p>
        <button className="cta-btn" onClick={handleConnectWallet}>Connect Wallet</button>
      </div>

      {/* Key Features */}
      <div className="key-features">
        <h3>Key Features</h3>
        <div className="features-list">
          {keyFeatures.map((feature, index) => (
            <div className="feature-tag" key={index}>
              {feature}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
