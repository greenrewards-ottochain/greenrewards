import { FaTwitter } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import whitelogo from "../../assets/whitelogo.png";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="px-[30px] md:px-[100px] py-[60px]
    bg-[#2A382A] grid grid-cols-1 md:flex md:flex-row gap-4">
      <div className="md:flex flex-wrap md:flex-row justify-between w-full">
       
        <div className="md:flex justify-center items-start md:gap-[100px]">
          <div className="flex flex-row gap-[50px]">
            <div className="pt-[20px] sm:pt-0 flex flex-col gap-4">
              <p className="text-gray-50 text-lg md:text-[20px] font-normal">© 2023 Greenreward</p>
              
    
            </div>

            <div className="pt-[20px] sm:pt-0 flex flex-col gap-4">
              <p className="text-gray-50 text-lg md:text-[20px] font-normal">Privacy Policy</p>
              
              
            </div>
          </div>

          <div className="pt-[20px] sm:pt-0 flex flex-col gap-4">
            <p className="text-gray-50 text-lg md:text-[20px] font-semibold">Term of Use</p>
            
          </div>

          <div className="pt-[20px] sm:pt-0 flex flex-col gap-4">
            <p className="text-gray-50 text-lg md:text-[20px] font-semibold">Contact Us</p>
            
          </div>

          <div className="md:w-[200px] pb-[60px] md:h-[88px] my-[40px]  md:mt-[20px]">
          <div className="flex flex-row items-center gap-4">
          <Link to='/'> <img src={whitelogo} alt='whitelogo'/></Link>
           
          </div>
          
          <p className="text-opacity-90 py-[15px] text-white text-[5px] md:text-[10px]/[26px] font-normal">
          Where environmental consciousness
          <br></br>meets blockchain innovation
          </p>
          <div className="flex flex-row cursor-pointer space-x-5 text-white">
            <FaTwitter />
            <SiDiscord />
            <HiOutlineMail />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;