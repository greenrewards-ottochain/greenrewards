import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import {

    Button,
    LowerContainer,
    SellerParent,
    SellerWrapper,
    TextContainer,
    UpperContainer,

} from "./sellers.styles";
import { sideBarLinks } from "./sellers.routes";
import upperimage from "../../assets/upperimage.png";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link } from "react-router-dom";




const Seller = () => {
    return (
        <SellerParent>
            <Sidebar routes={sideBarLinks} />
            <SellerWrapper>


                <div
                    className=""
                    style={{
                        height: "100%",
                        overflowX: "hidden",
                        overflowY: "auto",
                    }}
                >
                    <UpperContainer>
                        <div><img src={upperimage} alt='' /></div>
                        <TextContainer><h1>GreenReward - Where environmental consciousness 
                            <br></br>meets blockchain innovation</h1>
                            <h2>Trade recyclables on the blockchain, earn rewards, and power the 
                                <br></br>green revolution with every sale and purchase</h2>
                                <Button>Add new Products</Button>
                                </TextContainer>
                                
                    </UpperContainer>
                    <LowerContainer>
                    <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            Your Products

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
                        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <ul>
                                    <Menu.Item>
                                        <li>
                                            <Link
                                                to='/purchased-products'
                                            >
                                                Purchased Products
                                            </Link>
                                        </li>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <li>
                                            <Link
                                                to='/sold-products'

                                            >
                                                Sold Products
                                            </Link>
                                        </li>
                                    </Menu.Item>
                                    
                                </ul>
                            </div>

                        </Menu.Items>
                    </Transition>
                </Menu>
                   </LowerContainer>
                </div>




               
            </SellerWrapper>
        </SellerParent >
    );
};

export default Seller;