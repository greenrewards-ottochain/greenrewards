import React from "react";
import {
        BarWrapper,
        CentreWrapper,
        HomeParent,
        HomeWrapper,
        TextContainer,
        ButtonContainer,
        GButton,
        LButton,
        ImageContainer,
        WelcomeWrapper,
        HowContainer,
        RecycleContainer,
        FooterWrapper,
        SubfooterWrapper

} from "./home.styles";
import Navbar from "../../components/navbar/Navbar";
import ornament from "../../assets/ornament.png";
import middleimage1 from "../../assets/middleimage1.png";
import middleimage2 from "../../assets/middleimage2.png";
import Welcome from "../../components/welcome/Welcome";
import How from "../../components/how/How";
import Recycle from "../../components/recycle/Recycle";
import Footer from "../../components/footer/Footer";
import Subfooter from "../../components/subfooter/Subfooter";
import { Link } from "react-router-dom";








const Home = () => {






        return (
                <HomeParent>
                        <HomeWrapper>
                                <BarWrapper>
                                        <Navbar />
                                </BarWrapper>
                                <CentreWrapper>
                                        <TextContainer>
                                                <h1>Empower climate change and sustainable</h1>
                                                <h2>carbon reduction through recycling.</h2>
                                                <h3> Trade recyclables on the blockchain, earn rewards, and power the green </h3>
                                                <h4>revolution with every sale and purchase</h4>
                                                <ButtonContainer><Link to='/sustainable-milestones' style={{ textDecoration: 'none', color: 'black' }}><GButton>Sell Products</GButton></Link>
                                                        <Link to='/verification-board' style={{ textDecoration: 'none', color: 'white' }}><LButton>Buy Products</LButton></Link>
                                                </ButtonContainer>

                                        </TextContainer>
                                        <ImageContainer>
                                                <img src={ornament} alt='ornament' />
                                                <img src={middleimage1} alt="middleimage1" />
                                                <img src={middleimage2} alt="middleimage2"/>
                                                <img src={ornament} alt='ornament'/>
                                        </ImageContainer>
                                </CentreWrapper>
                                <WelcomeWrapper>
                                        <Welcome />
                                </WelcomeWrapper>
                                <RecycleContainer>
                                        <Recycle />
                                </RecycleContainer>
                                <HowContainer>
                                        <How />
                                </HowContainer>

                                <FooterWrapper>
                                        <Footer />
                                </FooterWrapper>
                                <SubfooterWrapper>
                                        <Subfooter />
                                </SubfooterWrapper>
                        </HomeWrapper>



                </HomeParent>




        )



}


export default Home;