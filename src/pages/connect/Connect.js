import React from "react";
import signupimage from "../../assets/signupimage.svg";
import arrow from "../../assets/arrow.png";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Link } from "react-router-dom";
import { CloseButton } from '@chakra-ui/react';
import { addProfile, sellProduct } from "../../components/contracts/calls";







const Connect = () => {

    const createProfile = async () => {
        await addProfile('Toheeb', 'Lagos, Nigeria', 'aladetoheeb5@gmail.com');
    }
    const price = 1000;
    const weight = 130;
    const listProduct = async () => {
        await sellProduct("My Bucket", 'some image', "Bucket for displaying tools", price, weight)
    }





    return (
        <main className="w-screen">
            <div class='grid grid-cols-1 md:flex md:flex-row gap-2'>
                <div class='mt-20 mx-20'>
                    <Link to='/'>  <CloseButton /></Link>
                    <h1 className="text-[30px] md:text-[34px] font-bold  text-[#0F160F] mx-10 mt-10">
                        CONNECT YOUR WALLET{" "}
                    </h1>
                    <img src={arrow} alt="arrow" class='mx-40' />
                    <form class='mt-4'>


                      <div class='mx-32'> <ConnectButton /></div> 

                       <div class='mx-32'> <button class="bg-[#427142] hover:bg-[#DBE1D4] w-2/3 text-white font-bold py-2 px-4 mt-2 rounded">
                            Profile    </button></div>

                      <div class='mx-32'>  <Link to='/market-place' style={{ textDecoration: 'none', color: '#427142' }}>  <button class="bg-[#DBE1D4] hover:bg-[#427142] text-[#427142] font-bold py-2 px-4 mt-2 border border-[#427142] rounded">
                            Buy Products    </button></Link></div>

                      <div class='mx-32'>  <button class="bg-[#427142] hover:bg-[#DBE1D4] text-white font-bold py-2 px-4 mt-2 rounded" onClick={() => listProduct()}>
                            Add Product    </button></div>


                    </form>
                </div>

                <div ><img src={signupimage} alt="signupimage" /></div>



            </div>
        </main>
    );
};

export default Connect;