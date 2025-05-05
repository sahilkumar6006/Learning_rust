use borsh::{BorshDeserialize, BorshSerialize}; 
use solana_program::{
    account_info::{next_account_info, AccountInfo},
    pubkey::Pubkey,
    entrypoint,
    entrypoint::ProgramResult,
};

#[derive(BorshDeserialize, BorshSerialize)]
pub enum InstructionType {
    Increment(u32),
    Decrement(u32)
}

#[derive(BorshDeserialize, BorshSerialize)]
pub struct Counter {
    pub count: u32,
}

entrypoint!(counter_contract);

pub fn counter_contract(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8]
) -> ProgramResult {
    let accounts_iter = &mut accounts.iter();
    let account = next_account_info(accounts_iter)?;
    
    let mut counter_data = Counter::try_from_slice(&account.data.borrow())?;
    
    match InstructionType::try_from_slice(instruction_data)? {
        InstructionType::Increment(val) => {
            counter_data.count += val;
        }
        InstructionType::Decrement(val) => {
            counter_data.count -= val;
        }
    }
    
    counter_data.serialize(&mut *account.data.borrow_mut())?;
    
    Ok(())
}