import React from "react";
import {
    SigninParent,
    SigninWrapper,
    Wrapper,
    FormHeader
} from "./signin.styles";
import { Link } from "react-router-dom";
import signupimage from "../../assets/signupimage.svg";
import FormTextInput from "../../components/custom-input/FormTextInput";
import arrow from "../../assets/arrow.png";
import { CloseButton } from '@chakra-ui/react';







const Signin = () => {



   

    return (
      
                <SigninParent>
                    <SigninWrapper>
                        <Wrapper>

                            <form  >
                                <Link to='/'>  <CloseButton /></Link>
                                <FormHeader>
                                    <h3>Welcome Back GreenHero</h3>

                                    <img src={arrow} alt="arrow" />
                                </FormHeader>

                                <FormTextInput
                                    labelName="Email address"
                                    placeholder="e.g devonlane@gmail.com"
                                    name="emailAddress"
                                   
                                />

                                <FormTextInput
                                    labelName="Password"
                                    placeholder="********"
                                    name="password"
                                    

                                />

                                <button type='submit' className='w-3/4 px-8 py-2 mb-2 mt-4 font-semibold rounded-lg text-white bg-[#427142]'> Sign in</button>
                                <p>Don't have an account?<Link to="/sign-up" style={{ textDecoration: 'none', color: '#015C28' }}>Sign up</Link></p>


                            </form>

                            <div style={{ height: '50rem', width: '50rem'}}><img src={signupimage} alt="signupimage" /></div>
                        </Wrapper>

                    </SigninWrapper>
                </SigninParent>
         
    );
};

export default Signin;