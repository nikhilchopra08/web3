const { createMint, getOrCreateAssociatedTokenAccount, mintTo } = require('@solana/spl-token');
const { Keypair, Connection, clusterApiUrl, PublicKey } = require('@solana/web3.js');

const fs = require('fs');

const secret = JSON.parse(fs.readFileSync(
    "/Users/nikhil/.config/solana/cli/my-keypair.json"
));

const payer = Keypair.fromSecretKey(new Uint8Array(secret));

const mintAuthority = payer;
// const connection = new Connection(clusterApiUrl('devnet'));
const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

async function createMintForToken(payer, mintAuthority){
    const mint = await createMint(
        connection,
        payer,
        mintAuthority,
        null,
        6
    );

    console.log("Mint created at:", mint.toBase58());
    return mint;
}

async function mintNewTokens(mint, to, amount) { 
    const tokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        payer,
        mint,
        new PublicKey(to)
    );

    console.log('Token account created at', tokenAccount.address.toBase58());
    
    await mintTo(
        connection,
        payer,
        mint,
        tokenAccount.address,
        payer,
        amount
    );
    
    console.log('Minted', amount, 'tokens to', tokenAccount.address.toBase58());
}

async function main(){
    const mint = await createMintForToken(payer, mintAuthority.publicKey);

    // await mintNewTokens(mint, mintAuthority.publicKey, 100);
     await mintNewTokens(mint, mintAuthority.publicKey.toBase58(), 100);
}

main();