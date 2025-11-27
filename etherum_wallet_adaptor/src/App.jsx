import { http, createConfig, WagmiProvider, useConnect, useAccount, useBalance, useSendTransaction } from "wagmi"
import { base, mainnet, optimism } from "wagmi/chains"
import { injected } from "wagmi/connectors";
import "./App.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    injected(),
  ],
  transports: {
    [mainnet.id]: http(),
  }
})

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={config}>
          <WalletConnector />
          <MyAddress />
          <EthSend />
        </WagmiProvider>
      </QueryClientProvider>

    </>
  )
}

function WalletConnector() {
  const { connectors, connect } = useConnect();
  return <div>
    {connectors.map((connector) => (
      <button key={connector.uid} onClick={() => connect({ connector })}>
        {connector.name}
      </button>
    ))}
  </div>
}

function MyAddress() {
  const { address } = useAccount();
  const { balance } = useBalance({ address })

  return <div>
    {address} : 
    {balance?.data?.formatter}
  </div>
}

function EthSend() {
  const { data : hash, sendTransaction } = useSendTransaction();

  function Send(){
    console.log("hello")
    sendTransaction({
      to: document.getElementById("address").value,
      value: 100000000000000000 //17 0's = 0.1ETH
    })

  }
  return (
    <div>
      <input id="address" type="text" placeholder="Address..." />
      <button onClick={Send}>Send 0.1 Eth</button>
    </div>
  )
}

export default App;