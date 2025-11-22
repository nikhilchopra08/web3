const { createMint } = require('@solana/spl-token');
const { Keypair, Connection, clusterApiUrl,  TOKEN_PROGRAM_ID } = require('@solana/web3.js');

const payer = Keypair.fromSecretKey(Uint8Array.from([240,161,172,160,33,184,3,171,161,148,203,39,96,194,180,203,71,144,81,209,5,88,122,12,190,192,7,12,223,31,246,18,181,170,240,189,239,204,59,62,54,179,27,105,253,6,12,79,32,75,94,82,55,151,133,59,145,76,104,89,153,163,115,23]));

const mintAthority = payer;

const connection = new Connection(clusterApiUrl('devnet'));

async function createMintForToken(payer, mintAuthority) {
    const mint = await createMint(
        connection,
        payer,
        mintAuthority,
        null,
        6,
        TOKEN_PROGRAM_ID
    );
    console.log('Mint created at', mint.toBase58());
    return mint;
}

async function main() {
    const mint = await createMintForToken(payer, mintAthority.publicKey);
}

main();