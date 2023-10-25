import React from "react";
import {
    RecycleParent,
    RecycleWrapper,
    SummaryCard,
    SummaryContainer,
    Header,
    MButton
} from "./recycle.styles";
import plastic from "../../assets/plastic.png";
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
                        <img src={plastic} alt="" />
                        <h1>Plastic Bottles Collection</h1>
                        <p><b style={{marginRight:'8rem'}}>Quantity: </b> 1000 bottles
                            <br></br><b style={{marginRight:'5.5rem'}}>Seller’s location: </b>Lagos, Nigeria
                            <br></br><b style={{marginRight:'9.5rem', color:'#015C28'}}>Price: </b><span style={{color:'#015C28'}}>2 $OTTO </span>
                        </p>
                        <MButton>View details</MButton>
                    </SummaryCard>
                    <SummaryCard>
                        <img src={electronic} alt="" />
                        <h1>Electronic Waste</h1>
                        <p><b style={{marginRight:'8rem'}}>Quantity:</b>50 kg
                            <br></br><b style={{marginRight:'5.5rem'}}>Seller’s location</b>  Lagos, Nigeria
                            <br></br><b style={{marginRight:'9.5rem', color:'#015C28'}}>Price:</b> <span style={{color:'#015C28'}}>5 $OTTO</span>
                        </p>
                        <MButton>View details</MButton>
                    </SummaryCard>
                    <SummaryCard >
                        <img src={cardboard} alt="" />
                        <h1>Cardboard Boxes Bundle</h1>
                        <p><b style={{marginRight:'8rem'}}>Quantity: </b>200 boxes
                            <br></br><b style={{marginRight:'5.5rem'}}>Seller’s location</b> Abuja, Nigeria
                            <br></br><b style={{marginRight:'9.5rem', color:'#015C28'}}>Price:</b><span style={{color:'#015C28'}}>3 $OTTO</span>
                        </p>
                        <MButton>View details</MButton>
                    </SummaryCard>
                </SummaryContainer>
               
            </RecycleWrapper>



        </RecycleParent>




    )





}


export default Recycle;