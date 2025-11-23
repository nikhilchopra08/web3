import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import React from 'react'

export function Solana() {
    // const {connection} = useConnection();
    const wallet = useWallet();

    console.log(wallet.publicKey)
  return (
    <div>Solana</div>
  )
}