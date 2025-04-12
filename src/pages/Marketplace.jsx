import React, { useState, useEffect } from "react";
import "./Marketplace.css";
import { contract } from "../components/thirdwebClient";
import { getNFTs, claimTo, getClaimConditions } from "thirdweb/extensions/erc721";
import { useSendTransaction } from "thirdweb/react";

const categories = ["All", "Animals", "Sci-fi", "Nature"];
const priceRanges = ["All", "Under 1 ETH", "1 - 2 ETH", "Above 2 ETH"];
const sortOptions = ["Most Recent", "Top Rated"];
const claimStatusOptions = ["All", "Unclaimed", "Claimed"];

const Marketplace = () => {
  const [nfts, setNfts] = useState([]);
  const [category, setCategory] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Most Recent");
  const [claimStatus, setClaimStatus] = useState("All");

  const { mutate: sendTransaction } = useSendTransaction();

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const rawNFTs = await getNFTs({ contract });

        const claimConditions = await getClaimConditions({ contract });
        const pricePerToken = parseFloat(claimConditions[0]?.pricePerToken.displayValue || "0");

        const formatted = rawNFTs.map((nft, i) => ({
          id: i,
          title: nft.metadata.name,
          creator: nft.owner,
          image: nft.metadata.image,
          claimed: nft.owner !== "0x0000000000000000000000000000000000000000",
          price: `${pricePerToken} ETH`,
          category: "Unknown",
          rating: Math.floor(Math.random() * 2) + 4,
        }));

        setNfts(formatted);
      } catch (err) {
        console.error("Error fetching NFTs:", err);
      }
    };

    fetchNFTs();
  }, []);

  const handleClaim = async (tokenId) => {
    try {
      const transaction = claimTo({
        contract,
        to: "0x4f6f5ab576545fb70ef552fecb245c69da71187e", // Replace with current user
        amount: 1,
        tokenId: tokenId,
      });
      sendTransaction(transaction);
    } catch (err) {
      console.error("Claim failed:", err);
    }
  };

  const filteredNFTs = nfts
    .filter(nft => {
      let pass = true;

      if (category !== "All" && nft.category !== category) pass = false;

      const priceValue = parseFloat(nft.price);
      if (priceFilter === "Under 1 ETH" && priceValue >= 1) pass = false;
      if (priceFilter === "1 - 2 ETH" && (priceValue < 1 || priceValue > 2)) pass = false;
      if (priceFilter === "Above 2 ETH" && priceValue <= 2) pass = false;

      if (claimStatus === "Claimed" && !nft.claimed) pass = false;
      if (claimStatus === "Unclaimed" && nft.claimed) pass = false;

      return pass;
    })
    .sort((a, b) => {
      if (sortBy === "Top Rated") return b.rating - a.rating;
      return 0;
    });

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

        <select value={claimStatus} onChange={(e) => setClaimStatus(e.target.value)}>
          {claimStatusOptions.map(status => <option key={status}>{status}</option>)}
        </select>
      </div>

      <div className="nft-list">
        {filteredNFTs.length > 0 ? filteredNFTs.map(nft => (
          <div key={nft.id} className="nft-horizontal-card">
            <img src={nft.image} alt={nft.title} />
            <div className="nft-info">
              <h4>{nft.title}</h4>
              <p>By {nft.creator}</p>
              <p className="price">{nft.price}</p>
              <p className="rating">⭐ {nft.rating}</p>
              {!nft.claimed && (
                <button onClick={() => handleClaim(nft.id)}>Claim</button>
              )}
            </div>
          </div>
        )) : <p>No NFTs found</p>}
      </div>
    </div>
  );
};

export default Marketplace;
