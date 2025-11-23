import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

export default function ShowBalance(){
    const { connection } = useConnection();
    const wallet = useWallet();

    const [balance, setBalance] = useState(null);

    async function getBalance() {
        if(wallet.publicKey){
            const bal = await connection.getBalance(wallet.publicKey);
            setBalance(bal / LAMPORTS_PER_SOL);
        }
    }
    getBalance()
    return(
        <>
            <p>SOL Balance:</p>
            <div>{balance !== null ? balance : "Loading..."}</div>
        </>
    )
}