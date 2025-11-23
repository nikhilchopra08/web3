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
        <div style={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginTop: '20px',
            marginBottom: '10px'
        }}>
            Request AirDrop
        </div>
        <input 
            value={amount}
            onChange={(e) => {
                setAmount(e.target.value)
            }}
            style={{
                padding: '10px',
                fontSize: '16px',
                border: '2px solid #ccc',
                borderRadius: '5px',
                marginRight: '10px',
                width: '200px'
            }}
            placeholder="Enter amount in SOL"
        />
        <button 
            onClick={airdrop}
            style={{
                padding: '10px 20px',
                fontSize: '16px',
                backgroundColor: '#512da8',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
            }}
        >
            Request Airdrop
        </button>
    </>
    )
}