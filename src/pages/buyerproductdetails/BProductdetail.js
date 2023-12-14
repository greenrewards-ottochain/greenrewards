import React from 'react';
import plastic2 from "../../assets/plastic2.svg";
import Navbar from "../../components/navbar/index";
import Subfooter from "../../components/subfooter/index";
import { Link } from "react-router-dom";


const BuyerProductdetail = () => {


    return (
        <main className='bg-white h-screen'>
            <div className="mx-8 pt-16 mb-4">
                <Navbar />
            </div>
            <section className='w-[100vw] md:w-[100%]'>


                <div className='bg-white grid-cols-2 gap-8" md:flex md:flex-row'>
                    <div className="content-card w-full md:w-[40%] mb-5 h-full rounded-t-lg px-8 mt-10 mx-10">
                        <h1 class='text-xl'>Product details</h1>
                        <img src={plastic2} alt="" />

                    </div>

                    <div className="content-card flex-column w-full md:w-[40%] mb-5 h-full rounded-t-lg px-8 mt-10 mx-10">
                    <button class="bg-[#427142] hover:bg-[#DBE1D4] text-white font-bold py-2 px-4  rounded w-full mt-8">Message Seller</button>
                        <h2 class='mt-4 text-xl'>Plastic Bottles Collection</h2>
                        <h3 class='text-[#427142]'>0.02 $OTTO (per bottle) </h3>
                        <p><b style={{ marginRight: '11rem' }}>Quantity: </b> 1000 bottles
                            <br></br><b style={{ marginRight: '8rem' }}>Seller’s location: </b>Lagos, Nigeria
                            <br></br><b style={{ marginRight: '9rem' }}>Seller’s Name: </b>Devon Lane
                            <br></br><b style={{ marginRight: '5rem' }}>Seller’s wallet address: </b>
                            <br></br><b style={{ marginRight: '13rem', color: '#015C28' }}>Price: </b><span style={{ color: '#015C28' }}>2 $OTTO </span>
                        </p>
                      <Link to='/buy-product'> <button class="bg-[#427142] hover:bg-[#DBE1D4] text-white font-bold py-2 px-4  rounded w-full">Buy Products</button></Link> 
                        <button class="bg-white hover:bg-[#DBE1D4] text-black font-bold py-2 px-4 rounded border-2 border-black w-full mt-2">Add a Comment</button>
                        <p>Kindly drop a comment upon receipt of your products. 
                            <br></br>This is crucial to ensure the seller receives their payment promptly. <Link style={{ textDecoration: 'none', color: '#427142' }}>Learn More</Link></p>
                    </div>
                </div>


                <div>

                    <Subfooter />
                </div>
            </section>
        </main>


    )


}


export default BuyerProductdetail;




