import './App.css'
import { Transaction, Connection, PublicKey, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js"
import axios from "axios"

const conneciton = new Connection("https://solana-devnet.g.alchemy.com/v2/mRNVIzf44k3YCI1_eQPoO");
const fromPubkey = new PublicKey("DE9yV2jCAGsWDQoxUnNeidwT8Toa45nzfcKRupYBVfCa");
function App() {

  async function sendSol(){
    const ix = SystemProgram.transfer({
      fromPubkey : fromPubkey,
      toPubkey: new PublicKey("HBSWeeJ6wJknhAfoUmR4Z4VCx2EkBRndLvcvzmJnbhEh"),
      lamports: 0.001 * LAMPORTS_PER_SOL
    });

    const tx = new Transaction().add(ix);
    const { blockhash } = await conneciton.getLatestBlockhash();

    tx.recentBlockhash = blockhash;

    tx.feePayer = fromPubkey;

    const serialized_tx = tx.serialize({
      requireAllSignatures: false,
      verifySignatures: false
    });

    console.log(serialized_tx);

    await axios.post("/api/v1/txn/sign", {
      message : serialized_tx,
      retry : false
    })
  }
  return (
    <div>
      <input type='text' placeholder='Amount'></input>
      <input type='text' placeholder='Address'></input>
      <button onClick={sendSol}>Submit</button>
    </div>
  )
}

export default App
