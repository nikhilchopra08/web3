import { useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";
import { ed25519 } from "@noble/curves/ed25519.js"

export default function SignMessage(){
    const {publicKey, signMessage} = useWallet();
    const [message , setMessgae] = useState("");

    async function onClick(){
        if(!publicKey){
            throw new Error("wallet not connected");
        }

        if(!signMessage){
            throw new Error("wallet not support signing messgae");
        }

        const encodedMessage = new TextEncoder().encode(message);

        const signature = await signMessage(encodedMessage);

        if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error('Message signature invalid!');

        if(ed25519.verify(signature, encodedMessage, publicKey.toBytes())){
            alert("success");
        }
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
                    Sign Message
                </p>
                <input 
                    value={message} 
                    onChange={(e) => {
                        setMessgae(e.target.value);
                    }}
                    style={{
                        padding: '10px',
                        fontSize: '16px',
                        border: '2px solid #ccc',
                        borderRadius: '5px',
                        marginRight: '10px',
                        width: '300px'
                    }}
                    placeholder="Enter message to sign"
                />

                <button 
                    onClick={onClick}
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
                    Sign Message
                </button>
            </div>
        </>
    )
}