import { Connection, LAMPORTS_PER_SOL, clusterApiUrl, PublicKey, Keypair} from "@solana/web3.js";
import fs from "fs"

const connection = new Connection(clusterApiUrl("devnet"));

async function airDrop(publicKey, amount){
    const airDropSignature = await connection.requestAirdrop(new PublicKey(publicKey), amount);
    await connection.confirmTransaction({signature : airDropSignature});
    console.log("airdrop successfull");

    return airDropSignature;
}

const secret = JSON.parse(fs.readFileSync(
    "/Users/nikhil/.config/solana/cli/my-keypair.json"
));

const keypair = Keypair.fromSecretKey(new Uint8Array(secret));
console.log(keypair)
const publicKey = (keypair.publicKey).toBase58();

// airDrop(publicKey, LAMPORTS_PER_SOL).then(signature => {
//     console.log( "AirDrop Signature : ", signature);
// });