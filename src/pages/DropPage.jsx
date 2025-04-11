import React from "react";
import { Link } from "react-router-dom";

const DropPage = () => {
  const steps = [
    "Create a new NFT collection for your Drop",
    "Add metadata, title, description, and custom properties",
    "Set royalties, pricing, and supply",
    "Schedule the drop or launch it instantly",
  ];

  return (
    <div className="min-h-screen bg-[#15162b] text-white p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Create a Drop</h2>
      <div className="max-w-xl mx-auto space-y-4">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-[#1e2039] p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <p className="text-white font-medium">{step}</p>
          </div>
        ))}
        <Link
          to="/collection"
          className="block text-center bg-pink-600 hover:bg-pink-700 transition text-white py-2 rounded-lg font-semibold"
        >
          Start Drop →
        </Link>
      </div>
    </div>
  );
};

export default DropPage;