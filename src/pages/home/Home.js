import React from "react";
import Navbar from "../../components/navbar/index";
import ornament from "../../assets/ornament.png";
import middleimage1 from "../../assets/middleimage1.png";
import middleimage2 from "../../assets/middleimage2.png";
import Welcome from "../../components/welcome/Welcome";
import How from "../../components/how/How";
import Recycle from "../../components/recycle/Recycle";
import Footer from "../../components/footer/Footer";
import Subfooter from "../../components/subfooter/Subfooter";
import { Link } from "react-router-dom";








const Home = () => {






        return (
                <main className='bg-[#DBE1D4] h-screen'>

                        <div className="mx-8 pt-16">
                                <Navbar />
                        </div>
                        <section className='w-[100vw] md:w-[100%]'>
                                <h1 className='text-[30px] md:text-[34px] font-bold capitalize  text-[#0F160F] mx-80 mt-10' >Empower climate change and sustainable </h1>
                                <h2 className='text-[30px] md:text-[32px] font-bold capitalize text-[#0F160F]  mx-96'>carbon reduction through recycling.</h2>
                                <h3 className='text-[18px] md:text-[16px] text-[#0F160F]  mx-96 px-4'>Trade recyclables on the blockchain, earn rewards, and power the green</h3>
                                <h4 className='text-[18px] md:text-[16px] text-[#0F160F]  mx-96 px-20'>revolution with every sale and purchase</h4>
                                <div className="flex-justify-item-centre mt-4 mx-96 px-36">
                                        <Link to='/sell-product' style={{ textDecoration: 'none', color: 'white' }}>  <button class="bg-[#427142] hover:bg-[#DBE1D4] text-white font-bold py-2 px-4 rounded">
                                                Sell Product    </button></Link>
                                        <Link to='/market-place' style={{ textDecoration: 'none', color: '#427142' }}>  <button class="bg-[#DBE1D4] hover:bg-[#427142] text-[#427142] font-bold py-2 px-4 border border-[#427142] rounded">
                                                Buy Products    </button></Link>
                                </div>






                                <div className='bg-[#DBE1D4] grid-cols-4 gap-4" md:flex md:flex-row'>
                                      <div className="mx-20 mt-48"> <img src={ornament} alt='ornament' /></div>
                                        <div className="mt-28 mx-12"><img src={middleimage1} alt="middleimage1" /></div>
                                       <div className="mt-10 mb-4"> <img src={middleimage2} alt="middleimage2" /></div>
                                        <div className="mx-20 mt-48"><img src={ornament} alt='ornament' /></div>
                                </div>

                                <div>
                                        <Welcome />
                                </div>
                                <div>
                                        <Recycle />
                                </div>
                                <div>
                                        <How />

                                </div>
                                <div >
                                        <Footer />

                                </div>
                                <div>
                                        <Subfooter />
                                </div>
                        </section>


                </main>






        )



}


export default Home;