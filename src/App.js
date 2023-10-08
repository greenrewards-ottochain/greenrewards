import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/sign-up/Signup";
import Signin from "./pages/sign-in/Signin";
import Home from "./pages/home/Home";
import Verify from "./pages/verify/Verify";
import SellProduct from "./pages/sellproduct/Sellproduct";
import Seller from "./pages/dashboard/Sellers";
import Marketplace from "./pages/marketplace/Marketplace";






function App() {
  return (
    
    


        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/verify-account" element={<Verify/>}/>
            <Route path="/sell-product" element={<SellProduct/>}/>
            <Route path="/dashboard" element={<Seller/>} />
            <Route path='/market-place' element={<Marketplace/>} />
            


          </Routes>
        </BrowserRouter>

       

        

     
  );
}

export default App;

