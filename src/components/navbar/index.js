import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import user from "../../assets/user.png";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react';
import { AiOutlineClose } from 'react-icons/ai';
import menu from "../../assets/menu.svg";



const Navbar = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);

    const handleMobileMenu = () => {
        setShowMobileNav((o) => !o);
    };

    return (
        <nav class="bg-[#DBE1D4]">
            <div className='flex gap-2 justify-center items-center'>
                <img src={logo} alt='logo' />


                <ul className='flex m-auto gap-16'>
                    <li className='hidden md:inline-block text-[#0F160F]'><Link to='/'>Home</Link></li>
                    <li className='hidden md:inline-block  text-[#0F160F]'><Link to='/market-place'>Marketplace</Link></li>
                    <li className='hidden md:inline-block  text-[#0F160F]'><Link to='/about-us'>About us</Link></li>

                </ul>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#DBE1D4] px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            <img src={user} alt='user' />

                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#DBE1D4] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <ul>
                                    
                                     <Menu.Item>
                                        <li>
                                            <Link
                                                to='/sign-up'

                                            >
                                                Sign up
                                            </Link>
                                        </li>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <l1>
                                            <Link
                                                to='/dashboard'

                                            >
                                                Dashboard
                                            </Link>
                                        </l1>
                                    </Menu.Item>

                                </ul>
                            </div>

                        </Menu.Items>
                    </Transition>
                </Menu>


                <ConnectButton />
                {/* Mobile Hamburger Menu */}
                <div className='tab:hidden'>
                    <button onClick={handleMobileMenu}>
                        <img src={menu} alt='menu' />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {showMobileNav && (
                <div className='py-9 px-11 tab:hidden fixed bg-[#150E28] w-full min-h-screen top-0 z-50'>
                    <div
                        className='flex justify-end mb-14'
                        onClick={() => setShowMobileNav(false)}
                    >
                        <AiOutlineClose
                            size={23}
                            className='border rounded-full border-purple-50 px-1'
                        />
                    </div>
                    <nav>
                        <ul className='flex flex-col gap-6 sm:gap-8 text-lg'>
                            <li>
                                <NavLink
                                    href='/'
                                    onClick={handleMobileMenu}
                                    className='cursor-pointer'
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    href='/market-place'
                                    onClick={handleMobileMenu}
                                    className='cursor-pointer'
                                >
                                    Marketplace
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    href='/about-us'
                                    onClick={handleMobileMenu}
                                    className='cursor-pointer'
                                >
                                    About us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/sign-up'
                                    onClick={handleMobileMenu}
                                    className='cursor-pointer'
                                >
                                    Sign up
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/sign-in'
                                    onClick={handleMobileMenu}
                                    className='cursor-pointer'
                                >
                                    Sign in
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    
                </div>
            )}


        </nav>
    );
};

export default Navbar;