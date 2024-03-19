import React, {lazy, Suspense} from 'react';
import {Toaster} from "react-hot-toast";
import PageLoader from '../components/Loader/PageLoader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';


const path = {
  index:"/",
  seller:"/seller/*",
  buyer:"/buyer/*"
}


const AllRoutes = () => {
  const Home = lazy(() => import("../pages/home/Home"));
  const Signup = lazy(() => import("../pages/sign-up/Signup"));
  const SellProduct = lazy(() => import("../pages/sellproduct/Sellproduct"));
  const Seller = lazy(() => import("../pages/seller-dashboard/Sellers"));
  const Marketplace = lazy(() => import("../pages/marketplace/Marketplace"));
  const Productdetail = lazy(() => import("../pages/productdetails/Productdetail"));
  const BuyerProductdetail = lazy(() => import("../pages/buyerproductdetails/BProductdetail"));
  const BuyProduct = lazy(() => import("../pages/buyproduct/Buyproduct"));
  const Buyer = lazy(() => import("../pages/buyer-dashboard/Buyer"));
  

  return (
    <div>
     <Toaster />
     <Suspense fallback={<PageLoader />}>
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
        </Suspense>
    </div>
  );
};

export default AllRoutes;
