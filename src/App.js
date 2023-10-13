import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/sign-up/Signup";
import Signin from "./pages/sign-in/Signin";
import Home from "./pages/home/Home";
import Verify from "./pages/verify/Verify";
import SellProduct from "./pages/sellproduct/Sellproduct";
import Seller from "./pages/dashboard/Sellers";
import Marketplace from "./pages/marketplace/Marketplace";
import Productdetail from "./pages/marketplace/Productdetail";
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
    
    


        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/verify-account" element={<Verify/>}/>
            <Route path="/sell-product" element={<SellProduct/>}/>
            <Route path="/dashboard" element={<Seller/>} />
            <Route path='/market-place' element={<Marketplace/>} />
            <Route path="/product-details" element={<Productdetail/>}/>
            


          </Routes>
        </BrowserRouter>
        </RainbowKitProvider>
    </WagmiConfig> 

       

        

     
  );
}

export default App;

