import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from "../pages/sign-up/Signup";
import Home from "../pages/home/Home";
import Verify from "../pages/verify/Verify";
import SellProduct from "../pages/sellproduct/Sellproduct";
import Seller from "../pages/dashboard/Sellers";
import Marketplace from "../pages/marketplace/Marketplace";
import Productdetail from "../pages/marketplace/Productdetail";
import Connect from "../pages/connect/Connect";
import Layout from '../layout/Layout';

const AllRoutes = () => {
 

  return (
    <div>
     
        <BrowserRouter>
          <Layout>
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/verify-account" element={<Verify/>}/>
            <Route path="/sell-product" element={<SellProduct/>}/>
            <Route path="/dashboard" element={<Seller/>} />
            <Route path='/market-place' element={<Marketplace/>} />
            <Route path="/product-details" element={<Productdetail/>}/>
            <Route path='/connect-wallet' element={<Connect/>}/>
            

            </Routes>
          </Layout>
        </BrowserRouter>
      
    </div>
  );
};

export default AllRoutes;
