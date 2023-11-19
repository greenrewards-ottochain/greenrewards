import React from "react";
import howimage from "../../assets/howimage.png";






const How = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-8 sm:px-[80px] pb-[100px]">
                <div class='mx-80 px-6 mb-3 '>
                    <h2 className="text-[#427142] text-3xl font-bold leading-10">
                        How GreenRewards work
                    </h2>


                </div>
                <div className="grid-cols-4 gap-4 md:flex md:flex-row">
                    <div className="content-card w-full md:w-[50%] mb-5 h-full">


                       
                            
                            <p className=" text-black text-xl font-normal leading-relaxed">
                                <b>1. Sign Up and Get Started:</b> Begin by signing up on the
                                <br></br>GreenRewards platform. Join a community of eco-conscious
                                <br></br>individuals dedicated to making a positive impact on the environment
                            </p>
                            <p className=" text-black text-xl font-normal leading-relaxed">
                                <b>2. Submit Your Recycling Proof:</b> After signing up, you can
                                <br></br>start submitting evidence of your recycling activities.
                                <br></br>This might include photos or videos of recycled items
                            </p>
                            <p className=" text-black text-xl font-normal leading-relaxed">
                                <b>3. System Verification: </b>Our system ensures the validity of
                                <br></br>your submitted proof through verification processes. We're
                                <br></br>committed to maintaining the integrity of your efforts
                            </p>
                            <p className=" text-black text-xl font-normal leading-relaxed">
                                <b>4.Claim Your Tokens:</b> Once your recycling activities are
                                <br></br>verified, you'll earn tokens as a reward. These tokens are
                                <br></br>a recognition of your commitment to sustainability and
                                <br></br>positive environmental actions. Connect your wallet to earn

                            </p>
                        
                    </div>

                    <div className="content-card w-full md:w-[50%] mb-5 h-full">

                        <img src={howimage} alt="howimage" className="object-fit-object  w-full object-center"/>

                    </div>
                </div>
            </div>







        </div>






    )
}

export default How;
