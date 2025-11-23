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
        alert(`Sent ${amount} SOL to ${to}`);
    }

    return(
        <>
            <div style={{
                marginTop: '30px',
                marginBottom: '20px'
            }}>
                <p style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    marginBottom: '10px',
                    color: 'white'
                }}>
                    Send SOL
                </p>
                <div style={{
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                }}>
                    <input 
                        value={to} 
                        onChange={(e) => {
                            setTo(e.target.value);
                        }} 
                        placeholder="Recipient address"
                        style={{
                            padding: '10px',
                            fontSize: '16px',
                            border: '2px solid #ccc',
                            borderRadius: '5px',
                            width: '350px'
                        }}
                    />
                    <input 
                        value={amount} 
                        onChange={(e) => {
                            setAmount(e.target.value);
                        }} 
                        placeholder="Amount (SOL)"
                        style={{
                            padding: '10px',
                            fontSize: '16px',
                            border: '2px solid #ccc',
                            borderRadius: '5px',
                            width: '150px'
                        }}
                    />

                    <button 
                        onClick={sendTokens}
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
                        Send SOL
                    </button>
                </div>
            </div>
        </>
    )
}