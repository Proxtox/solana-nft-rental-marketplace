"use client";

import { useState } from 'react';

export default function NFTRentalPage() {
  const [nftId, setNftId] = useState('');
  const [days, setDays] = useState('7');
  const [price, setPrice] = useState('0.5');

  const handleRent = () => {
    alert(`Renting NFT ${nftId} for ${days} days at ${price} SOL (demo)`);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 border rounded-3xl">
      <h1 className="text-3xl font-bold mb-8 text-center">NFT Rental Marketplace</h1>

      <div className="space-y-5">
        <div>
          <label className="block mb-2 text-sm font-medium">NFT ID / Address</label>
          <input
            type="text"
            value={nftId}
            onChange={(e) => setNftId(e.target.value)}
            className="w-full p-4 border rounded-2xl"
            placeholder="Enter NFT ID"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Rental Duration (days)</label>
            <input
              type="number"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              className="w-full p-4 border rounded-2xl"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Price per Day (SOL)</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-4 border rounded-2xl"
            />
          </div>
        </div>

        <button
          onClick={handleRent}
          className="w-full mt-6 bg-black text-white py-4 rounded-2xl text-lg font-semibold hover:bg-gray-800"
        >
          Rent NFT
        </button>
      </div>
    </div>
  );
}