import {
    BarWrapper,
    MarketParent,
    MarketWrapper,
    SummaryContainer,
    SummaryCard,
    SummaryContainer2,
    MButton,
    SubfooterWrapper,
} from "./marketplace.styles";
import React from 'react';
import plastic from "../../assets/plastic.png";
import electronic from "../../assets/electronic.png";
import cardboard from "../../assets/cardboard.png";
import Navbar from "../../components/navbar/Navbar";
import aluminium from "../../assets/aluminium.png";
import bottle from "../../assets/bottle.png";
import paper from "../../assets/paper.png";
import Subfooter from "../../components/subfooter/Subfooter";
import {Link} from "react-router-dom";


const Marketplace = () => {


    return (
        <MarketParent>
            <BarWrapper>
                <Navbar />
            </BarWrapper>
            <MarketWrapper>
                <SummaryContainer>
                    <SummaryCard>
                        <img src={plastic} alt="" />
                        <h1>Plastic Bottles Collection</h1>
                        <p><b style={{ marginRight: '8rem' }}>Quantity: </b> 1000 bottles
                            <br></br><b style={{ marginRight: '5rem' }}>Seller’s location: </b>Lagos, Nigeria
                            <br></br><b style={{ marginRight: '10rem', color: '#015C28' }}>Price: </b><span style={{ color: '#015C28' }}>2 $OTTO </span>
                        </p>
                      <Link to='/product-details' style={{ textDecoration: 'none', color: '#427142' }}> <MButton>View details</MButton></Link> 
                    </SummaryCard>
                    <SummaryCard>
                        <img src={electronic} alt="" />
                        <h1>Electronic Waste</h1>
                        <p><b style={{ marginRight: '8rem' }}>Quantity:</b>50 kg
                            <br></br><b style={{ marginRight: '5rem' }}>Seller’s location</b> Lagos, Nigeria
                            <br></br><b style={{ marginRight: '10rem', color: '#015C28' }}>Price:</b> <span style={{ color: '#015C28' }}>5 $OTTO</span>
                        </p>
                        <MButton>View details</MButton>
                    </SummaryCard>
                    <SummaryCard >
                        <img src={cardboard} alt="" />
                        <h1>Cardboard Boxes</h1>
                        <p><b style={{ marginRight: '8rem' }}>Quantity: </b>200 boxes
                            <br></br><b style={{ marginRight: '5rem' }}>Seller’s location</b> Kano, Nigeria
                            <br></br><b style={{ marginRight: '10rem', color: '#015C28' }}>Price:</b><span style={{ color: '#015C28' }}>3 $OTTO</span>
                        </p>
                        <MButton>View details</MButton>
                    </SummaryCard>
                </SummaryContainer>

                <SummaryContainer2>
                    <SummaryCard>
                        <img src={aluminium} alt="" />
                        <h1>Aluminium Cans</h1>
                        <p><b style={{ marginRight: '8rem' }}>Quantity: </b> 500 cans
                            <br></br><b style={{ marginRight: '5rem' }}>Seller’s location: </b>P.Harcourt, Nigeria
                            <br></br><b style={{ marginRight: '10rem', color: '#015C28' }}>Price: </b><span style={{ color: '#015C28' }}>7 $OTTO </span>
                        </p>
                        <MButton>View details</MButton>
                    </SummaryCard>
                    <SummaryCard>
                        <img src={bottle} alt="" />
                        <h1>Glass Jars and Bottles</h1>
                        <p><b style={{ marginRight: '8rem' }}>Quantity:</b> 150 pieces
                            <br></br><b style={{ marginRight: '5rem' }}>Seller’s location: </b> Enugu, Nigeria
                            <br></br><b style={{ marginRight: '10rem', color: '#015C28' }}>Price:</b> <span style={{ color: '#015C28' }}>4 $OTTO</span>
                        </p>
                        <MButton>View details</MButton>
                    </SummaryCard>
                    <SummaryCard >
                        <img src={paper} alt="" />
                        <h1>Paper Recycling Stock</h1>
                        <p><b style={{ marginRight: '8rem' }}>Quantity: </b> 300 kg
                            <br></br><b style={{ marginRight: '5rem' }}>Seller’s location</b> Lagos, Nigeria
                            <br></br><b style={{ marginRight: '10rem', color: '#015C28' }}>Price:</b><span style={{ color: '#015C28' }}>3 $OTTO</span>
                        </p>
                        <MButton>View details</MButton>
                    </SummaryCard>
                </SummaryContainer2>

                <SubfooterWrapper>
                    <Subfooter />
                </SubfooterWrapper>
            </MarketWrapper>
        </MarketParent>


    )


}


export default Marketplace;




