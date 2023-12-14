import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from "../pages/sign-up/Signup";
import Home from "../pages/home/Home";
import SellProduct from "../pages/sellproduct/Sellproduct";
import Seller from "../pages/seller-dashboard/Sellers";
import Marketplace from "../pages/marketplace/Marketplace";
import Productdetail from "../pages/productdetails/Productdetail";
import Layout from '../layout/Layout';
import BuyerProductdetail from '../pages/buyerproductdetails/BProductdetail';
import BuyProduct from "../pages/buyproduct/Buyproduct";
import Buyer from '../pages/buyer-dashboard/Buyer';

const path = {
  index:"/",
  seller:"/seller/*",
  buyer:"/buyer/*"
}


const AllRoutes = () => {
 

  return (
    <div>
     
        <BrowserRouter>
          <Layout>
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/sell-product" element={<SellProduct/>}/>
            <Route path={path.seller} element={<Seller/>} />
            <Route path='/market-place' element={<Marketplace/>} />
            <Route path="/product-details" element={<Productdetail/>}/>
            <Route path='/buyerproduct-details' element={<BuyerProductdetail/>}/>
            <Route path="/buy-product" element={<BuyProduct/>}/>
            <Route path={path.buyer} element={<Buyer/>}/>
            </Routes>
          </Layout>
        </BrowserRouter>
      
    </div>
  );
};

export default AllRoutes;
