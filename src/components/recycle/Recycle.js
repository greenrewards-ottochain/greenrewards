import React from "react";
import {
    RecycleParent,
    RecycleWrapper,
    SummaryCard,
    SummaryContainer,
    Header,
    MButton
} from "./recycle.styles";
import bottle from "../../assets/bottle.png";
import electronic from "../../assets/electronic.png";
import cardboard from "../../assets/cardboard.png";
import {Link} from "react-router-dom";








const Recycle = () => {


    return (
        <RecycleParent>
            <RecycleWrapper>
                <Header><h2>Recyclable materials for sale (Prices are in Unit of Measure) </h2>
<Link style={{ textDecoration: 'none', color: '#0F160F', marginLeft:'75rem' }}>View More</Link>
                </Header>
                <SummaryContainer>
                    <SummaryCard >
                        <img src={bottle} alt="" />
                        <h1>Plastic Bottles Collection</h1>
                        <p><b style={{marginRight:'8rem'}}>Quantity: </b> 1000 bottles
                            <br></br><b style={{marginRight:'4rem'}}>Seller’s location: </b>Merton, London
                            <br></br><b style={{marginRight:'10rem', color:'#015C28'}}>Price: </b><b style={{color:'#015C28'}}>0.02 USDT </b>
                        </p>
                        <MButton>View details</MButton>
                    </SummaryCard>
                    <SummaryCard>
                        <img src={electronic} alt="" />
                        <h1>Electronic Waste</h1>
                        <p><b style={{marginRight:'8rem'}}>Quantity:</b>50 kg
                            <br></br><b style={{marginRight:'4rem'}}>Seller’s location</b> New York City, USA
                            <br></br><b style={{marginRight:'10rem', color:'#015C28'}}>Price:</b> <b style={{color:'#015C28'}}>0.5 USDT</b>
                        </p>
                        <MButton>View details</MButton>
                    </SummaryCard>
                    <SummaryCard >
                        <img src={cardboard} alt="" />
                        <h1>Cardboard Boxes Bundle</h1>
                        <p><b style={{marginRight:'8rem'}}>Quantity: </b>200 boxes
                            <br></br><b style={{marginRight:'4rem'}}>Seller’s location</b> Toronto, Canada
                            <br></br><b style={{marginRight:'10rem', color:'#015C28'}}>Price:</b><b style={{color:'#015C28'}}>0.03 USDT</b>
                        </p>
                        <MButton>View details</MButton>
                    </SummaryCard>
                </SummaryContainer>
               
            </RecycleWrapper>



        </RecycleParent>




    )





}


export default Recycle;