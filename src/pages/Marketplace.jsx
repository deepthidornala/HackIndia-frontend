import React, { useState, useEffect } from "react";
import "./Marketplace.css";

const dummyNFTs = [
  {
    id: 1,
    title: "Futuristic Lion",
    creator: "ArtSmith",
    price: "1.8 ETH",
    category: "Animals",
    image: process.env.PUBLIC_URL + "/images/nft1.png",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Pixelverse Runner",
    creator: "PixelPro",
    price: "0.9 ETH",
    category: "Sci-fi",
    image: process.env.PUBLIC_URL + "/images/nft2.png",
    rating: 4.9,
  },
  {
    id: 3,
    title: "Mystic Landscape",
    creator: "DreamDraw",
    price: "2.4 ETH",
    category: "Nature",
    image: process.env.PUBLIC_URL + "/images/nft3.png",
    rating: 4.2,
  },
];

const categories = ["All", "Animals", "Sci-fi", "Nature"];
const priceRanges = ["All", "Under 1 ETH", "1 - 2 ETH", "Above 2 ETH"];
const sortOptions = ["Most Recent", "Top Rated"];

const Marketplace = () => {
  const [nfts, setNfts] = useState(dummyNFTs);
  const [category, setCategory] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Most Recent");

  useEffect(() => {
    let filtered = [...dummyNFTs];

    if (category !== "All") {
      filtered = filtered.filter(nft => nft.category === category);
    }

    if (priceFilter !== "All") {
      filtered = filtered.filter(nft => {
        const price = parseFloat(nft.price);
        if (priceFilter === "Under 1 ETH") return price < 1;
        if (priceFilter === "1 - 2 ETH") return price >= 1 && price <= 2;
        if (priceFilter === "Above 2 ETH") return price > 2;
        return true;
      });
    }

    if (sortBy === "Top Rated") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    setNfts(filtered);
  }, [category, priceFilter, sortBy]);

  return (
    <div className="marketplace-container">
      <h2 className="market-title">Explore NFTs</h2>

      <div className="filters">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map(cat => <option key={cat}>{cat}</option>)}
        </select>

        <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
          {priceRanges.map(range => <option key={range}>{range}</option>)}
        </select>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          {sortOptions.map(opt => <option key={opt}>{opt}</option>)}
        </select>
      </div>

      <div className="nft-list">
        {nfts.map(nft => (
          <div key={nft.id} className="nft-horizontal-card">
            <img src={nft.image} alt={nft.title} />
            <div className="nft-info">
              <h4>{nft.title}</h4>
              <p>By {nft.creator}</p>
              <p className="price">{nft.price}</p>
              <p className="rating">⭐ {nft.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
