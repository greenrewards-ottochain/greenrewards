import React, { useEffect } from "react";
import plastic from "../../assets/plastic.png";
import electronic from "../../assets/electronic.png";
import cardboard from "../../assets/cardboard.png";
import Navbar from "../../components/navbar/index";
import aluminium from "../../assets/aluminium.png";
import bottle from "../../assets/bottle.png";
import paper from "../../assets/paper.png";
import Subfooter from "../../components/subfooter/index";
import { Link } from "react-router-dom";
import { getProducts } from '../../components/contracts/calls';


const Marketplace = () => {

    const fetchProducts = async () => {
        const products = await getProducts();
        console.log(products);
    };



    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <main className='bg-[#DBE1D4] h-screen'>
            <div className="mx-8 pt-16 mb-4  2xl:mt-4">
                <Navbar />
            </div>
            <section className='w-[100vw] md:w-[100%]'>
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
                                Quantity: <span className='mx-20'>1000 bottles</span>
                                <br></br>
                                Seller’s location: <span className='mx-10'>Lagos, Nigeria</span>
                                <br></br>
                                Price:<span className='mx-28'>2 $OTTO</span>
                            </p>
                            <div>
                            <Link to='/buyerproduct-details' style={{ textDecoration: 'none', color: '#427142' }}><button class="bg-white hover:bg-[#427142] text-[#427142] font-bold py-2 px-4 border border-black rounded w-full">
                                     View details </button>  </Link>  
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
                                Quantity: <span className='mx-20'>50kg</span>
                                <br></br>
                                Seller’s location: <span className='mx-10'>Lagos, Nigeria</span>
                                <br></br>
                                Price:<span className='mx-28'>5 $OTTO</span>
                            </p>
                            <div>
                                <div>
                                    <button class="bg-white hover:bg-[#427142] text-[#427142] font-bold py-2 px-4 border border-black rounded w-full">
                                        <Link to='/product-details' style={{ textDecoration: 'none', color: '#427142' }}>     View details </Link>   </button>
                                </div>
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
                                Cardboard Boxes
                            </h3>
                            <p className="font-normal text-justify text-black text-sm">
                                Quantity: <span className='mx-20'>1000 bottles</span>
                                <br></br>
                                Seller’s location: <span className='mx-10'>Kano, Nigeria</span>
                                <br></br>
                                Price:<span className='mx-28'>3 $OTTO</span>
                            </p>
                            <div>
                                <button class="bg-white hover:bg-[#427142] text-[#427142] font-bold py-2 px-4 border border-black rounded w-full">
                                    <Link to='/product-details' style={{ textDecoration: 'none', color: '#427142' }}>View details   </Link> </button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='bg-white grid-cols-4 gap-4" md:flex md:flex-row'>
                    <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg px-8 mx-10">
                        <img
                            src={aluminium}
                            alt="aluminium"
                            className="object-fit-object h-2/3 w-full object-center rounded"
                        />
                        <div className="w-full h-1/2 pb-5 p-2 shadow-md">
                            <h3 className="font-bold text-black text-lg">
                                Aluminium Cans
                            </h3>
                            <p className="font-normal text-justify text-black text-sm">
                                Quantity: <span className='mx-20'>500 cans</span>
                                <br></br>
                                Seller’s location: <span className='mx-10'>P.Harcourt, Nigeria</span>
                                <br></br>
                                Price:<span className='mx-28'>7 $OTTO</span>
                            </p>
                            <div>
                                <button class="bg-white hover:bg-[#427142] text-[#427142] font-bold py-2 px-4 border border-black rounded w-full">
                                    <Link to='/product-details' style={{ textDecoration: 'none', color: '#427142' }}> View details   </Link> </button>
                            </div>
                        </div>
                    </div>

                    <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg px-8">
                        <img
                            src={bottle}
                            alt="bottle"
                            className="object-fit-object h-2/3 w-full object-center rounded"
                        />
                        <div className="w-full h-1/2 pb-5 p-2 shadow-md">
                            <h3 className="font-bold text-black text-lg">
                                Glass Jars and Bottles
                            </h3>
                            <p className="font-normal text-justify text-black text-sm">
                                Quantity: <span className='mx-20'>Enugu, Nigeria</span>
                                <br></br>
                                Seller’s location: <span className='mx-10'>150 pieces</span>
                                <br></br>
                                Price:<span className='mx-28'>4 $OTTO</span>
                            </p>
                            <div>
                                <button class="bg-white hover:bg-[#427142] text-[#427142] font-bold py-2 px-4 border border-black rounded w-full">
                                    <Link to='/product-details' style={{ textDecoration: 'none', color: '#427142' }}> View details  </Link>  </button>
                            </div>
                        </div>
                    </div>
                    <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg px-8">
                        <img
                            src={paper}
                            alt="paper"
                            className="object-fit-object h-2/3 w-full object-center rounded"
                        />
                        <div className="w-full h-1/2 pb-5 p-2 shadow-md">
                            <h3 className="font-bold text-black text-lg">
                                Paper Recycling Stock
                            </h3>
                            <p className="font-normal text-justify text-black text-sm">
                                Quantity: <span className='mx-20'>300 kg</span>
                                <br></br>
                                Seller’s location: <span className='mx-10'>Lagos, Nigeria</span>
                                <br></br>
                                Price:<span className='mx-28'>3 $OTTO</span>
                            </p>
                            <div>
                                <button class="bg-white hover:bg-[#427142] text-[#427142] font-bold py-2 px-4 border border-black rounde w-full">
                                    <Link to='/product-details' style={{ textDecoration: 'none', color: '#427142' }}>   View details  </Link>  </button>
                            </div>
                        </div>
                    </div>

                </div>


                <div>
                    <Subfooter />
                </div>
            </section>
        </main>


    )


}


export default Marketplace;




