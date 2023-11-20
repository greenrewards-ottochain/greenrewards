import React from "react";
import {
    ConnectParent,
    ConnectWrapper,
    Wrapper,
    FormHeader
} from "./connect.styles";
import signupimage from "../../assets/signupimage.svg";
import arrow from "../../assets/arrow.png";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Link } from "react-router-dom";

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
        <ConnectParent>
            <ConnectWrapper>
                <Wrapper>

                    <form>
                        <FormHeader>
                            <h3>CONNECT YOUR WALLET</h3>

                            <img src={arrow} alt="arrow" />
                            <ConnectButton />
                            {/* <button class="bg-[#427142] hover:bg-[#DBE1D4] text-white font-bold py-2 px-4 mt-2 rounded" onClick={getSelller}>
                                Get Seller    </button> */}
                                <button class="bg-[#427142] hover:bg-[#DBE1D4] text-white font-bold py-2 px-4 mt-2 rounded">
                                Profile    </button>
                            <Link to='/market-place' style={{ textDecoration: 'none', color: '#427142' }}>  <button class="bg-[#DBE1D4] hover:bg-[#427142] text-[#427142] font-bold py-2 px-4 mt-2 border border-[#427142] rounded">
                                Buy Products    </button></Link>
                        </FormHeader>








                    </form>

                    <div style={{ height: '50rem', width: '50rem' }}><img src={signupimage} alt="signupimage" /></div>
                </Wrapper>
                <button class="bg-[#427142] hover:bg-[#DBE1D4] text-white font-bold py-2 px-4 mt-2 rounded" onClick={() => listProduct()}>
                                Add Product    </button>
            </ConnectWrapper>
        </ConnectParent>

    );
};

export default Connect;