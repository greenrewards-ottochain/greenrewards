import React from 'react';
import plastic from "../../assets/plastic.png";
import electronic from "../../assets/electronic.png";
import cardboard from "../../assets/cardboard.png";



import { Link } from "react-router-dom";


const Recycle = () => {


    return (
        <div className='bg-white '>

            <div className="container mx-auto px-8 sm:px-[80px] py-[100px]">
                
                    <h2 className="text-[#427142] text-3xl pb-[48px] font-bold leading-10">
                        Recyclable materials for sale (Prices are in Unit of Measure)
                        <Link class='text-[#0F160F] text-base mx-20'>View More</Link>
                    </h2>
                    <div className='bg-white grid-cols-4 gap-4" md:flex md:flex-row'>
                    <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg px-8 mt-10 mx-10">
                        <img
                            src={plastic}
                            alt="plastic"
                            className="object-fit-object h-2/3 w-full object-center rounded"
                        />
                        <div className="w-full h-1/2 pb-5 p-2 shadow-md">
                            <h3 className="font-bold text-black text-lg">
                                Plastic Bottles Collection
                            </h3>
                            <p className="font-normal text-justify text-black text-sm">
                                Quantity: <span className='mx-14'>1000 bottles</span>
                                <br></br>
                                Seller’s location: <span className='mx-4'>Lagos, Nigeria</span>
                                <br></br>
                                Price:<span className='mx-20'>2 $OTTO</span>
                            </p>
                            <div>
                            <button class="bg-white hover:bg-[#427142] text-[#427142] font-bold py-2 px-4 border border-black rounded w-full">
                                <Link to='/product-details' style={{ textDecoration: 'none', color: '#427142' }}>  View details  </Link>  </button>
                                </div>
                        </div>
                    </div>

                    <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg px-8 mt-10">
                        <img
                            src={electronic}
                            alt="electronic"
                            className="object-fit-object h-2/3 w-full object-center rounded"
                        />
                        <div className="w-full h-1/2 pb-5 p-2 shadow-md">
                            <h3 className="font-bold text-black text-lg">
                                Electronic waste
                            </h3>
                            <p className="font-normal text-justify text-black text-sm">
                                Quantity: <span className='mx-14'>50kg</span>
                                <br></br>
                                Seller’s location: <span className='mx-4'>Lagos, Nigeria</span>
                                <br></br>
                                Price:<span className='mx-20'>5 $OTTO</span>
                            </p>
                            <div >
                            <button class="bg-white hover:bg-[#427142] text-[#427142] font-bold py-2 px-4 border border-black rounded w-full">
                                <Link to='/product-details' style={{ textDecoration: 'none', color: '#427142' }}>     View details </Link>   </button>
                                </div>
                        </div>
                    </div>
                    <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg px-8 mt-10">
                        <img
                            src={cardboard}
                            alt="cardboard"
                            className="object-fit-object h-2/3 w-full object-center rounded"
                        />
                        <div className="w-full h-1/2 pb-5 p-2 shadow-md">
                            <h3 className="font-bold text-black text-lg">
                                Cardboard Boxes Bundle
                            </h3>
                            <p className="font-normal text-justify text-black text-sm">
                                Quantity: <span className='mx-14'>200 boxes</span>
                                <br></br>
                                Seller’s location: <span className='mx-4'>Kano, Nigeria</span>
                                <br></br>
                                Price:<span className='mx-20'>3 $OTTO</span>
                            </p>
                            <div>
                            <button class="bg-white hover:bg-[#427142] text-[#427142] font-bold py-2 px-4 border border-black rounded w-full">
                                <Link to='/product-details' style={{ textDecoration: 'none', color: '#427142' }}>View details   </Link> </button>
                                </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>


    )


}


export default Recycle;




