use anchor_lang::prelude::*;

declare_id!("NftRentalMarketplace111111111111111111111111111");

#[program]
pub mod nft_rental {
    use super::*;

    pub fn list_for_rent(ctx: Context<ListForRent>, price_per_day: u64) -> Result<()> {
        msg!("NFT listed for rent at {} per day", price_per_day);
        Ok(())
    }

    pub fn rent_nft(ctx: Context<RentNft>, duration_days: u64) -> Result<()> {
        msg!("NFT rented for {} days", duration_days);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct ListForRent<'info> {
    #[account(mut)]
    pub lister: Signer<'info>,
}

#[derive(Accounts)]
pub struct RentNft<'info> {
    #[account(mut)]
    pub renter: Signer<'info>,
}