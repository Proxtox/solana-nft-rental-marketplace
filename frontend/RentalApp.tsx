import React, { useState } from 'react';

function RentalApp() {
  const [nftId, setNftId] = useState('');
  const [duration, setDuration] = useState('7');

  const handleRent = () => {
    alert(`Renting NFT ${nftId} for ${duration} days (demo)`);
    // In real app: call Anchor program via wallet adapter
  };

  return (
    <div style={{ padding: '40px' }}>
      <h2>Solana NFT Rental Marketplace (Demo)</h2>
      <input
        placeholder="NFT ID or Address"
        value={nftId}
        onChange={(e) => setNftId(e.target.value)}
      />
      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        style={{ marginLeft: '10px' }}
      />
      <button onClick={handleRent} style={{ marginLeft: '10px' }}>
        Rent NFT
      </button>
    </div>
  );
}

export default RentalApp;