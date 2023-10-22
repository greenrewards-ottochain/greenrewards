import React, { useState, useEffect } from "react";
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
import axios from "axios";
import SuccessPage from "../../components/success/SuccessPage";
import { Navigate } from "react-router-dom";







const Signin = () => {

    const [formData, setFormData] = useState({

        emailAddress: "",
        password: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isLoginSuccess, setIsLoginSuccess] = useState(false);
    const [isRedirecting, setIsRedirecting] = useState(false); // New state to track redirecting

    useEffect(() => {
        if (isLoginSuccess) {
            const redirectTimer = setTimeout(() => {
                setIsRedirecting(true); // Start redirecting after 2.5 seconds
            }, 3000);

            return () => clearTimeout(redirectTimer);
        }
    }, [isLoginSuccess]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post(
                "https://greenrewards-ottochain.onrender.com/users/login",
                formData
            );

            if (response.status === 200) {
                console.log("Sign In successful");
                setIsLoginSuccess(true);
                setIsLoading(false);
            } else {
                console.error("Sign In failed");
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            {isRedirecting ? ( // Conditional rendering for redirecting
                <Navigate to="/dashboard" /> // Replace with the actual home page route
            ) : isLoginSuccess ? (
                <SuccessPage text="Login Successful" /> // Replace with the actual successPage component
            ) : (
                <SigninParent>
                    <SigninWrapper>
                        <Wrapper>

                            <form onSubmit={handleSubmit} >
                                <Link to='/'>  <CloseButton /></Link>
                                <FormHeader>
                                    <h3>Welcome Back GreenHero</h3>

                                    <img src={arrow} alt="arrow" />
                                </FormHeader>

                                <FormTextInput
                                    labelName="Email address"
                                    placeholder="e.g devonlane@gmail.com"
                                    name="emailAddress"
                                    onChange={handleChange}

                                />

                                <FormTextInput
                                    labelName="Password"
                                    placeholder="********"
                                    name="password"
                                    onChange={handleChange}

                                />

                                <button type='submit' className='w-3/4 px-8 py-2 mb-2 mt-4 font-semibold rounded-lg text-white bg-[#427142]'>{isLoading ? 'Loading...' : 'Sign in'}</button>
                                <p>Don't have an account?<Link to="/sign-up" style={{ textDecoration: 'none', color: '#015C28' }}>Sign up</Link></p>


                            </form>

                            <div style={{ height: '50rem', width: '45rem', marginRight: "2rem" }}><img src={signupimage} alt="signupimage" /></div>
                        </Wrapper>

                    </SigninWrapper>
                </SigninParent>
            )}
        </>
    );
};

export default Signin;