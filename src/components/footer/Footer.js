import React from "react";
import {
    ButtonContainer,
    CenterWrapper,
    FooterParent,
    SearchBarContainer,
    SearchBarForm,
    Button,
    SubscribeContainer
} from "./footer.styles";



const Footer = () => {
    return (

        <FooterParent>
            <CenterWrapper>
                <SubscribeContainer>
                    <h3>Subscribe to our mailing list</h3>

                    <h4>Join us in making a meaningful impact through responsible</h4>
                    <p> choices and shared commitment to a greener future</p>

                    <ButtonContainer>
                        <SearchBarContainer>
                            <SearchBarForm>
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="Email Address"
                                />
                                <Button>Subscribe</Button>
                            </SearchBarForm>
                        </SearchBarContainer>


                    </ButtonContainer>
                </SubscribeContainer>

            </CenterWrapper>
        </FooterParent>
    )



}

export default Footer;