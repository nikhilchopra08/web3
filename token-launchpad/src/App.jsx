import {ConnectionProvider, useWallet, WalletProvider} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from "@solana/wallet-adapter-react-ui"
import { clusterApiUrl } from "@solana/web3.js"

import "@solana/wallet-adapter-react-ui/styles.css"
import './App.css'
import { TokenLaunchpad } from './components/TokenLaunchpad'

function App() {
  return (
    <ConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/mRNVIzf44k3YCI1_eQPoO">
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <WalletMultiButton/>
            <WalletDisconnectButton/>
          </div>
            <TokenLaunchpad></TokenLaunchpad>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )  
}

export default App
