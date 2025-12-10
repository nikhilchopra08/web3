use anchor_lang::prelude::*;

declare_id!("2vDBKU2o3d9NNG45CocinxHEXUgWGA9atn7fwZsEZCy8");

#[program]
pub mod calculator {
    use super::*;

    pub fn init(ctx : Context<Initialize>, init_value : u32) -> Result<()> {
        ctx.accounts.account.num = init_value;

    }

    pub fn double(ctx : Context<Double>) -> Result<()> {
        ctx.accounts.account.num = ctx.accounts.account.num * 2;
    }

    pub fn add(ctx : Context<Add>, num : u32) -> Result<()> {
        ctx.accounts.account.num += num;
    }
}

#[account]
struct DataShape{
    pub num: u32
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = signer, space = 8+4)]
    pub account: Account<'info, DataShape>,
    pub system_program: Program<'info ,System>,
    #[account(mut)]
    pub signer: Signer<'info>
}

#[derive(Accounts)]
pub struct Double<'info> {
    #[account(mut)]
    pub account : Account<'info, DataShape>,
    #[account(mut)]
    pub signer : Signer<'info>
}

#[derive(Accounts)]
pub struct Add<'info> {
    #[account(mut)]
    pub account = Account<'info, DataShape>,
    #[account(mut)]
    pub signer : Signer<'info>
}