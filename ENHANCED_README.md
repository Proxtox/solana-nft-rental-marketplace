# solana-nft-rental-marketplace

NFT rental and leasing marketplace built on Solana with time-based escrows.

## Overview
Starter dApp showing how to implement NFT rentals on Solana using Anchor programs for secure time-based escrows.

## Tech Stack
- Solana + Anchor
- @solana/wallet-adapter
- React / Next.js

## Getting Started
```bash
git clone https://github.com/Proxtox/solana-nft-rental-marketplace.git
cd solana-nft-rental-marketplace
anchor build
```

## Key Files
- `programs/nft-rental/src/lib.rs` - Core rental listing and renting logic

## Next Steps
- Add proper escrow and time-lock logic
- Implement rental expiration & return
- Add frontend with wallet connection
- Support compressed NFTs for scale

## License
MIT