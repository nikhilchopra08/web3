import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useState } from "react";

export default function SendTokens(){
    const wallet = useWallet();
    const { connection } = useConnection();

    const [to, setTo] = useState("");
    const [amount , setAmount] = useState("");

    async function sendTokens(){
        if(!wallet.publicKey){
            alert("connect to wallet first")
            return;
        }
        console.log(to);
        console.log(amount);
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey : wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports : amount * LAMPORTS_PER_SOL
        }));

        await wallet.sendTransaction(transaction, connection);
        alert("sent", amount, "to", to);
    }

    return(
        <>
            <input value={to} onChange={(e) => {
                setTo(e.target.value);
            }} placeholder="to"/>
            <input value={amount} onChange={(e) => {
                setAmount(e.target.value);
            }} placeholder="amount"/>

            <button onClick={sendTokens}>Send Sol</button>
        </>
    )
}