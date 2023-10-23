import AllRoutes from './config/AllRoutes';
import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    // mainnet,
    polygon,
    //polygonMumbai,
    // optimism,
    // arbitrum,
    // goerli,
    // ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
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

