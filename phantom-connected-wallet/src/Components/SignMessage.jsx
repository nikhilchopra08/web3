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
            <input value={message} onChange={(e) => {
                setMessgae(e.target.value);
            }}/>

            <button onClick={onClick}>
                Sign Message
            </button>
        </>
    )
}