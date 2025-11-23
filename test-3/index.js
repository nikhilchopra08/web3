const fs = require("fs");
const { Connection, Keypair, SystemProgram, Transaction} = require("@solana/web3.js")

const secret = JSON.parse(fs.readFileSync(
    "/Users/nikhil/.config/solana/cli/my-keypair.json"
));

const payer = Keypair.fromSecretKey(new Uint8Array(secret));

const connection = new Connection('https://api.devnet.solana.com');

async function main(){
    const newAccount = Keypair.generate();

    console.log(newAccount.publicKey.toBase58());
    
    const transaction = new Transaction();
    transaction.add(
        SystemProgram.transfer({
            fromPubkey: payer.publicKey,           // Remove .toBase58()
            toPubkey: newAccount.publicKey,        // Remove .toBase58() and fix property name
            lamports: 0.01 * 100000000
        })
    );

    await connection.sendTransaction(transaction, [payer]);
    console.log("Transaction sent successfully!");
}



// main();

async function create_with_data(){
    const newAccount = Keypair.generate();
    console.log(newAccount.publicKey);

    const TOTAL_BYTES = 165;
    const lamports = await connection.getMinimumBalanceForRentExemption(TOTAL_BYTES);

    const transaction = new Transaction();
    transaction.add(
        SystemProgram.createAccount({
            fromPubkey: payer.publicKey,
            newAccountPubkey: newAccount.publicKey,
            lamports: lamports,
            space: TOTAL_BYTES,
            programId: SystemProgram.programId
        }),
    )

    await connection.sendTransaction(transaction, [payer, newAccount]);
    console.log("new account created" , newAccount.publicKey.toBase58());
}

create_with_data();