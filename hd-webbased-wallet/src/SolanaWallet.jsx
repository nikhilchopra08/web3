import { useState } from "react"
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl"

export function SolanaWallet({ mnemonic }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [publicKeys, setPublicKeys] = useState([]);

    return <div style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        // height: "100vh"
    }}>
        <button 
            onClick={function() {
                const seed = mnemonicToSeed(mnemonic);
                const path = `m/44'/501'/${currentIndex}'/0'`;
                const derivedSeed = derivePath(path, seed.toString("hex")).key;
                const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
                const keypair = Keypair.fromSecretKey(secret);
                setCurrentIndex(currentIndex + 1);
                setPublicKeys([...publicKeys, keypair.publicKey]);
            }}
            style={{
                padding: "12px 24px",
                backgroundColor: "#512da8",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                marginBottom: "20px",
                flexShrink: 0
            }}
        >
            Add wallet
        </button>
        <div style={{
            flex: 1,
            overflowY: "auto"
        }}>
            {publicKeys.map((p, index) => <div style={{
                padding: "16px",
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                marginBottom: "12px",
                color : "black",
                fontFamily: "monospace",
                fontSize: "14px",
                wordBreak: "break-all",
                border: "1px solid #e0e0e0"
            }}>
                {index + 1}:- {p.toBase58()}
            </div>)}
        </div>
    </div>
}