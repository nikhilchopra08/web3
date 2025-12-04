import './App.css'
import { useAccount, useConnect, useDisconnect, useReadContract, WagmiProvider } from 'wagmi'
import { config } from './config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AllowUsdt } from './AllowUsdt';

const client = new QueryClient();

function App() {
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={client}>
          <ConnectWallet />
          <TotalSupply />
          <AllowUsdt/>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  )
}

function TotalSupply() {
  const { data, isLoading, error } = useReadContract({
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    abi: [
      { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }
    ], functionName: "totalSupply",
    // args : []
  })


  return (
    <div>
      Supply : {data?.toString()}
    </div>
  )
}

function ConnectWallet() {
  const { address } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();

  if (address) {
    return <div>
      you are connected {address}
      <button onClick={() => {
        disconnect()
      }}>Disconnect</button>
    </div>
  }

  return <div>
    {connectors.map((connector) => (
      <button key={connector.uid} onClick={() => connect({ connector })}>
        {connector.name}
      </button>
    ))}
  </div>
}

export default App
