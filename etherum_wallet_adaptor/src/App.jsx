import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

import {QueryClient, QueryClientProvider, useQuery} from "@tanstack/react-query"
import "./App.css"

const client = createPublicClient({
  chain: mainnet,
  transport: http()
})

async function getBalance() {
  const res = await client.getBalance({ address: "0x7d20d863866809d3f4278b80d92764f298039463" })
  return res.toString();
}

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Todos/>
      </QueryClientProvider>
    </>
  )
}

function useBalance(){
  return useQuery({queryKey: ['balance'], queryFn: getBalance, refetchInterval: 10 * 1000});
}

function Todos(){
  const {data, isLoading, error} = useBalance();

  return(
    <div>
      Balance:
      {data}
    </div>
  )
}

export default App;