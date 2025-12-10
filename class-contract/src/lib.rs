use solana_program::{
    account_info::{AccountInfo, next_account_info},
    entrypoint::{ProgramResult}, 
    entrypoint,
    msg, 
    program::invoke_signed, 
    pubkey::Pubkey, system_instruction::create_account,
};

entrypoint!(process_instruction);

struct Data{
    user_name : String,
}

fn process_instruction(
    program_id: &Pubkey,
    accounts : &[AccountInfo],
    instruction_data : &[u8]
) -> ProgramResult{
    // create pda account
    // pda, userAcc, SystemProgram 

    let iter = &mut accounts.iter();
    
    let pda = next_account_info(iter)?;

    let user_account = next_account_info(iter)?;
    let system_account = next_account_info(iter)?;

    let seeds = &[user_account.key.as_ref(), b"user"];

    let ix = create_account(
        user_account.key, 
        pda.key, 
        1000000000, 
        8, 
        program_id
    );

    /*{in account_infos :  we have to maintain order account[1], account[0], account[3]}*/
    invoke_signed(&ix, accounts , &[seeds]);

    Ok(())
}