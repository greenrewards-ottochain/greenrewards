import React from 'react';
import plastic2 from "../../assets/plastic2.svg";
import Navbar from "../../components/navbar/index";
import Subfooter from "../../components/subfooter/index";
import { Link } from "react-router-dom";


const BuyProduct = () => {


    return (
        <main className='bg-white h-screen'>
            <div className="mx-8 pt-16 mb-4  2xl:mt-4">
                <Navbar />
            </div>
            <section className='w-[100vw] md:w-[100%]'>


                <div className='bg-white grid-cols-2 gap-8" md:flex md:flex-row'>
                    <div className="content-card flex-column w-full md:w-[40%] mb-5 h-full rounded-t-lg px-8 mt-10 mx-10">
                        <h2 class='mt-16 text-xl'>Buy Product Page</h2>
                        <form class='mt-4'>

                            <div class="mb-1">
                                <label class="block text-[#0F160F] text-sm font-bold mb-2" for="username">
                                    Name
                                </label>
                                <input class="bg-white border-[#0F160F] border-2 rounded w-full py-2 px-3 text-[#0F160F] leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your name" required></input>
                            </div>
                            <div class="mb-1">
                                <label class="block text-[#0F160F] text-sm font-bold mb-2" for="volume">
                                Volume of products
                                </label>
                                <input class="bg-white border-[#0F160F] border-2 rounded w-full py-2 px-3 text-[#0F160F] leading-tight focus:outline-none focus:shadow-outline" id="volume" type="volume" placeholder="Enter the volume you want to buy" required></input>
                            </div>
                            <p>Please note that you can also message sellers to discuss how you 
                                <br></br>will receive your products if you haven’t done that already.<Link style={{ textDecoration: 'none', color: '#427142' }}> Message</Link></p>
                            <button class="bg-[#427142] hover:bg-[#DBE1D4] text-white font-bold py-2 px-4  rounded w-full">Proceed</button>
                            <button class="bg-white hover:bg-[#DBE1D4] text-black font-bold py-2 px-4 rounded border-2 border-black w-full mt-2">Cancel</button>
                            
                        </form>
                    </div>
                    <div className="content-card w-full md:w-[40%] mb-5 h-full rounded-t-lg px-8 mt-10 mx-20">
                        <h1 class='text-xl'>Product details</h1>
                        <img src={plastic2} alt="" />

                    </div>
                </div>


                <div>

                    <Subfooter />
                </div>
            </section>
        </main>


    )


}


export default BuyProduct;




