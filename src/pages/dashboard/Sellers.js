import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import {

    SellerParent,
    SellerWrapper,
    TextContainer,
    UpperContainer,

} from "./sellers.styles";
import { sideBarLinks } from "./sellers.routes";
import upperimage from "../../assets/upperimage.png";



const Seller = () => {
    return (
        <SellerParent>
            <Sidebar routes={sideBarLinks} />
            <SellerWrapper>


                <div
                    className=""
                    style={{
                        height: "100%",
                        overflowX: "hidden",
                        overflowY: "auto",
                    }}
                >
                    <UpperContainer>
                        <div><img src={upperimage} alt='' /></div>
                        <TextContainer><h1>GreenReward - Where environmental consciousness 
                            <br></br>meets blockchain innovation</h1>
                            <h2>Trade recyclables on the blockchain, earn rewards, and power the 
                                <br></br>green revolution with every sale and purchase</h2></TextContainer>
                    </UpperContainer>




                </div>
            </SellerWrapper>
        </SellerParent >
    );
};

export default Seller;