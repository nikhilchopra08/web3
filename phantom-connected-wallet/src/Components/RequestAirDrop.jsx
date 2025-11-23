import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

export default function RequestAirDrop(){
    const wallet = useWallet();
    const { connection } = useConnection();
    const [amount, setAmount] = useState(0);

    console.log(wallet.publicKey);

    const solanaDevnet = new Connection("https://api.devnet.solana.com", "confirmed");

    async function airdrop(){
        if(!wallet.publicKey){
            alert("connect wallet first");
            return;
        }

        console.log(amount);
        const signature = await solanaDevnet.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
        await solanaDevnet.confirmTransaction(signature)
        alert("airDrop successfull")
    }
    return(
    <>
        <div>Request AirDrop</div>
        <input value={amount}
            onChange={(e) => {
                setAmount(e.target.value)
            }}
            />

        <button onClick={airdrop}>click me</button>
    </>
    )
}