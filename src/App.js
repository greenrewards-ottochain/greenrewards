import AllRoutes from './config/AllRoutes';
import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const ottochain = {
  id: 0x238c, // You can assign a unique identifier as needed
  name: "Otto Chain",
  network: "otto", 
  iconUrl: "https://example.com/icon.svg", // Update the icon URL if necessary
  iconBackground: "#fff", // Update icon background color if needed
  nativeCurrency: {
    decimals: 18, 
    name: "GNC", // Name of the native currency
    symbol: "GNC", // Symbol for the native currency
  },
  rpcUrls: {
    public: {
      http: ["https://gateway.testnet.octopus.network/ottochain/m4k5urt9h33dpbhgsp4lqxemo6naeihz"], 
    },
    default: {
      http: ["https://gateway.testnet.octopus.network/ottochain/m4k5urt9h33dpbhgsp4lqxemo6naeihz"], 
    },
  },
  blockExplorers: {
    default: {
      name: "OTTO",
      url: "http://34.69.4.240:4000/", 
    },
  },
  contracts: {
    // Add contract addresses if needed
  },
  testnet: true, 
};


const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    // mainnet,
    polygon,
    ottochain
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'greenreward',
  projectId: 'YOUR_PROJECT_ID',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});



function App() {
  return (

    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}
        theme={darkTheme({
          accentColor: 'rgb(66,113,66)'
        })}>
        <div>
          <AllRoutes />
        </div>

      </RainbowKitProvider>
    </WagmiConfig>




  );
}

export default App;

