import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { Connection, PublicKey } from "@solana/web3.js"

const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

const publicKey = new PublicKey("DE9yV2jCAGsWDQoxUnNeidwT8Toa45nzfcKRupYBVfCa");
const tokenkey = new PublicKey("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb");

console.log(TOKEN_PROGRAM_ID.toBase58())

const accounts = await connection.getParsedTokenAccountsByOwner(
  publicKey,
  { programId: tokenkey }
);

for (const tokenAccount of accounts.value) {
  const info = tokenAccount.account.data.parsed.info;
  
  const mint = info.mint;
  const amount = info.tokenAmount.amount;
  const decimals = info.tokenAmount.decimals;
  const uiAmount = info.tokenAmount.uiAmount;

  console.log("Mint:", mint);
  console.log("Balance:", uiAmount);
  console.log("Raw Amount:", amount);
  console.log("Decimals:", decimals);
  console.log("---------------------------");
}


// for tokens before token 22 program 
const accounts1 = await connection.getParsedTokenAccountsByOwner(
  publicKey,
  { programId: TOKEN_PROGRAM_ID }
);

for (const tokenAccount of accounts1.value) {
  const info = tokenAccount.account.data.parsed.info;
  
  const mint = info.mint;
  const amount = info.tokenAmount.amount;
  const decimals = info.tokenAmount.decimals;
  const uiAmount = info.tokenAmount.uiAmount;

  console.log("Mint:", mint);
  console.log("Balance:", uiAmount);
  console.log("Raw Amount:", amount);
  console.log("Decimals:", decimals);
  console.log("---------------------------");
}
