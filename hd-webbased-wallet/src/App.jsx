import { useState } from 'react'
import './App.css'
import { generateMnemonic, mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { SolanaWallet } from './SolanaWallet';

function App() {
  const [mnemonic, setmnemonic] = useState("");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [publicKeys, setPublicKeys] = useState([]);

  return (
    <>
     <button
      onClick={async function(){
        const mm = generateMnemonic();
        setmnemonic(mm);
        console.log(mnemonic);
      }}
      >
        Create Seed Phrase
     </button>

      {mnemonic && (
        <div>
          <h3> Seed phrases </h3>
          <p>{mnemonic}</p>
        </div>
      )}

      <SolanaWallet mnemonic={mnemonic}/>
    </>
  )
}

export default App
