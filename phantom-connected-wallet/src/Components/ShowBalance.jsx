import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

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
    
    useEffect(() => {
        getBalance();
    }, [wallet.publicKey]);

    return(
        <>
            <p style={{
                fontSize: '18px',
                fontWeight: '600',
                marginTop: '30px',
                marginBottom: '5px',
                color: 'white'
            }}>
                SOL Balance:
            </p>
            <div style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#512da8',
                padding: '10px',
                backgroundColor: '#f5f5f5',
                borderRadius: '5px',
                display: 'inline-block',
                minWidth: '150px'
            }}>
                {balance !== null ? `${balance} SOL` : "Loading..."}
            </div>
        </>
    )
}