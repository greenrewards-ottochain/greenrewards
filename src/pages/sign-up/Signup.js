import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import signupimage from "../../assets/signupimage.svg";
import arrow from "../../assets/arrow.png";
import Checkbox from "../../components/checkbox/Checkbox";
import { CloseButton } from '@chakra-ui/react';
import { addProfile, getSeller } from "../../components/contracts/calls";








const Signup = () => {
    const [checked, setChecked] = useState(false);
    const [isProfile, setIsProfile] = useState(false);
    const onChange = () => {
        setChecked(!checked);
    };
    const createProfile = async () => {
        await addProfile('Toheeb', 'Lagos, Nigeria', 'aladetoheeb5@gmail.com');

    }

    const fetchProfile = async () => {
        const profile = await getSeller('0x96029cf65026cB7F151271DCc9966eF5730AbCe0');
        console.log(profile)
        if (profile) {
            setIsProfile(true);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);



    return (
        <main className="w-screen">
            <div class='grid grid-cols-1 md:flex md:flex-row gap-2'>
                <div class='mt-20 mx-20'>
                    <Link to='/'>  <CloseButton /></Link>
                    <h1 className="text-[30px] md:text-[34px] font-bold capitalize  text-[#0F160F] mx-10 ">
                        CREATE YOUR ACCOUNT{" "}
                    </h1>
                    <img src={arrow} alt="arrow" class='mx-44' />
                    <form class='mt-4'>

                        <div class="mb-1">
                            <label class="block text-[#0F160F] text-sm font-bold mb-2" for="username">
                                Name
                            </label>
                            <input class="bg-white border-[#0F160F] border-2 rounded w-full py-2 px-3 text-[#0F160F] leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="e.g Devon Lane" required></input>
                        </div>
                        <div class="mb-1">
                            <label class="block text-[#0F160F] text-sm font-bold mb-2" for="emailaddress">
                                Email address
                            </label>
                            <input class="bg-white border-[#0F160F] border-2 rounded w-full py-2 px-3 text-[#0F160F] leading-tight focus:outline-none focus:shadow-outline" id="emailaddress" type="email" placeholder="e.g devonlane@gmail.com" required></input>
                        </div>
                        <div class="mb-1">
                            <label class="block text-[#0F160F] text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input class="bg-white border-[#0F160F] border-2 rounded w-full py-2 px-3 text-[#0F160F] leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********" required></input>
                        </div>
                        <Checkbox
                            id="checkbox"
                            label="By signing up you accept GreenReward’s Terms of Service and Privacy Policy."
                            value={checked}
                            onChange={onChange}
                            fontSize='0.5rem'
                        />

                        <button type='submit' className='w-full px-8 py-2 mb-2 font-semibold rounded-lg text-white bg-[#427142]'
                            onClick={() => createProfile()} >Sign Up</button>

                        <p>Already have an account? <Link to="/connect-wallet" style={{ textDecoration: 'none', color: '#015C28' }}>Connect Wallet</Link></p>

                    </form>
                </div>
                <div class='h-screen' ><img src={signupimage} alt='signupimage' /></div>




            </div>
        </main>
    );
};

export default Signup;