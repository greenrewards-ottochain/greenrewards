import React from "react";





const Welcome = () => {


    return (
        <div className="bg-white">
            <div className="container mx-auto px-8 sm:px-[80px] py-[100px]">
                <h2 className="text-[#427142] text-3xl pb-[48px] font-bold leading-10">
                    Welcome to GreenRewards, <br /> where environmental consciousness meets blockchain
                    <br></br>innovation
                </h2>

                <div className="sm:grid sm:grid-cols-3 sm:space-x-0 gap-4">
                    {/* first content */}
                    <div>
                        <div className=" w-80 h-px border border-black"></div>
                        <h3 className="text-[#0F160F] text-2xl font-bold leading-loose pt-[40px]">
                            Tangible Rewards
                        </h3>
                        <p className="text-[#0F160F] text-xl font-normal leading-7">
                            Recycling is now more rewarding <br />than ever. Earn tokens for every{" "}
                            <br />
                            eco-conscious action you take
                        </p>
                    </div>

                    {/* second content */}
                    <div>
                        <div className=" w-80 h-px border border-black"></div>
                        <h3 className="text-[#0F160F] text-2xl font-bold leading-loose pt-[40px]">
                            Be a Part of the Future
                        </h3>
                        <p className="text-[#0F160F] text-xl font-normal leading-7">
                            GreenRewards harnesses the potential<br />
                            of blockchain and technology for a better  world.
                        </p>
                    </div>

                    {/* third content */}
                    <div>
                        <div className=" w-80 h-px border border-black"></div>
                        <h3 className="text-[#0F160F] text-2xl font-bold leading-loose pt-[40px]">
                            Simple and Engaging
                        </h3>
                        <p className="text-[#0F160F] text-xl font-normal leading-7">
                            GreenRewards makes sustainability <br />
                            accessible and engaging. Embrace<br />
                            the future of sustainability.
                        </p>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default Welcome;