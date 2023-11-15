import {
    BarWrapper,
    MarketParent,
    MarketWrapper,
    SummaryContainer,
    SummaryCard2,
    SubfooterWrapper,
    EButton,
    AButton
} from "./marketplace.styles";
import React from 'react';
import plastic2 from "../../assets/plastic2.svg";
import Navbar from "../../components/navbar/index";
import Subfooter from "../../components/subfooter/index";
import { Link } from "react-router-dom";


const Productdetail = () => {


    return (
        <MarketParent>
            <BarWrapper>
                <Navbar />
            </BarWrapper>
            <MarketWrapper>
                <SummaryContainer>
                    <SummaryCard2>
                        <h1>Product details</h1>
                        <img src={plastic2} alt="" />
                        
                        
                    </SummaryCard2>
                    <SummaryCard2>
                    <h2>Plastic Bottles Collection</h2>
                        <p><b style={{ marginRight: '11rem' }}>Quantity: </b> 1000 bottles
                            <br></br><b style={{ marginRight: '8rem' }}>Seller’s location: </b>Lagos, Nigeria
                            <br></br><b style={{ marginRight: '9rem' }}>Seller’s Name: </b>Devon Lane
                            <br></br><b style={{ marginRight: '5rem' }}>Seller’s wallet address: </b>0x f768 912a 2016 45nn q710o0c6 81b6 ny85 
                            <br></br><b style={{ marginRight: '13rem', color: '#015C28' }}>Price: </b><span style={{ color: '#015C28' }}>2 $OTTO </span>
                        </p>
                        <EButton>Edit Information</EButton>
                        <AButton>Add a Comment</AButton>
                        <p>Kindly drop a comment upon receipt of your products. This is crucial to 
                            <br></br>ensure the seller receives their payment promptly. <Link style={{ textDecoration: 'none', color: '#427142' }}>Learn More</Link></p>
                    </SummaryCard2>
                    </SummaryContainer>
                  

                <SubfooterWrapper>
                    <Subfooter />
                </SubfooterWrapper>
            </MarketWrapper>
        </MarketParent>


    )


}


export default Productdetail;




