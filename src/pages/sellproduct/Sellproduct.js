import React, { useState} from "react";
import sideimage from "../../assets/sideimage.svg";
import arrow from "../../assets/arrow.png";
import Checkbox from "../../components/checkbox/Checkbox";
import { VscArrowLeft } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { sellProduct } from "../../components/contracts/calls";








const SellProduct = () => {
    const [checked, setChecked] = useState(false);
    
    const onChange = () => {
        setChecked(!checked);
    };

    const price = 1000;
    const weight = 130;
    const listProduct = async () => {
        await sellProduct("My Bucket", 'some image', "Bucket for displaying tools", price, weight);

    }

    


    return (
        <main className="w-screen">
            <div class='grid grid-cols-1 md:flex md:flex-row gap-2'>
                <div class='mt-32 mx-40'>
                    <Link to='/' style={{ marginTop: '1rem' }}><VscArrowLeft /></Link>
                    <h1 className="text-[30px] md:text-[34px] font-bold text-[#0F160F] mx-10">
                        Add a product{" "}
                    </h1>
                    <img src={arrow} alt="arrow" class='mx-32' />

                    <form class='mt-4'>
                        <div class="mb-1">
                            <label class="block text-[#0F160F] text-sm font-bold mb-2" for="bottlecollection">
                                Type of recyclable material
                            </label>
                            <input class="bg-white border-[#0F160F] border-2 rounded w-full py-2 px-3 text-[#0F160F] leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="E.g Plastic Bottles Collection" required></input>
                        </div>
                        <div class="mb-1">
                            <label class="block text-[#0F160F] text-sm font-bold mb-2" for="quantity">
                                Quantity of recyclable product (in unit of measure)
                            </label>
                            <div class="relative">
                                <select class="block appearance-none w-full h-10 bg-white border-[#0F160F] border-2 text-[#0F160F] rounded leading-tight focus:outline-none focus:bg-white focus:shadow-outline" id="quantity">
                                    <option>Click on the arrow to select an option</option>
                                    <option>Grams</option>
                                    <option>Kilograms</option>
                                    <option>Tons</option>
                                    <option>Liters</option>
                                    <option>Cans</option>
                                    <option>Pounds</option>
                                    <option>Gallons </option>
                                    <option>Pieces</option>
                                    <option>Boxes</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>

                        </div>
                        <div class="mb-1">
                            <label class="block text-[#0F160F] text-sm font-bold mb-2" for="recyclableproduct">
                                Volume of the recyclable product
                            </label>
                            <input class="bg-white border-[#0F160F] border-2 rounded w-full py-2 px-3 text-[#0F160F] leading-tight focus:outline-none focus:shadow-outline" id="recyclableproduct" type="text" placeholder="Type the volume of the recyclable product" required></input>
                        </div>
                        <div class="mb-1">
                            <label class="block text-[#0F160F] text-sm font-bold mb-2" for="cost">
                                Price of the recyclable material (Price per unit of measure)
                            </label>
                            <input class="bg-white border-[#0F160F] border-2 rounded w-full py-2 px-3 text-[#0F160F] leading-tight focus:outline-none focus:shadow-outline" id="cost" type="cost" placeholder="E.g 1 plastic bottle cost  2 $OTTO" required></input>
                        </div>
                        <div class="mb-1">
                            <label class="block text-[#0F160F] text-sm font-bold mb-2" for="location">
                                Location
                            </label>
                            <input class="bg-white border-[#0F160F] border-2 rounded w-full py-2 px-3 text-[#0F160F] leading-tight focus:outline-none focus:shadow-outline" id="location" type="location" placeholder="E.g Lagos" required></input>
                        </div>
                        <label class="text-sm font-medium text-black block mb-2" for="user_avatar">Add a picture of the recyclable material </label>
                        <input class="block w-full cursor-pointer bg-white border-black border-solid border-2  text-black focus:outline-none focus:border-black  text-sm rounded-lg" aria-describedby="file_upload" id="file_upload" type="file" />
                        <div class="mt-1 text-sm text-black" id="file">Drag and drop or Select file from computer</div>

                        <Checkbox
                            id="checkbox"
                            label="I agree to the 1% commission deduction by this platform"
                            value={checked}
                            onChange={onChange}
                            fontSize='0.5rem'
                        />

                        <button type='submit' className='w-full px-8 py-2 mb-2 font-semibold rounded-lg text-white bg-[#427142] border-[#2B452B]'
                             onClick={() => listProduct()} >Proceed to Confirm</button>
                        
                        
                        <button type='submit' className='w-full px-8 py-2 mb-2 font-semibold rounded-lg text-[#2B452B] bg-white border-[#2B452B] border-2'>Cancel</button>
                        
                    </form>
                </div>
                <div><img src={sideimage} alt='sideimage' /></div>


            </div>
        </main>
    );
};

export default SellProduct;