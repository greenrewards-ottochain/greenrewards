import React, { useState } from "react";
import {
    SellParent,
    SellWrapper,
    Wrapper,
    FormHeader,
    Select
} from "./sellproduct.styles";
import sideimage from "../../assets/sideimage.svg";
import FormTextInput from "../../components/custom-input/FormTextInput";
import arrow from "../../assets/arrow.png";
import FormButton from "../../components/custom-button/FormButton";
import Checkbox from "../../components/checkbox/Checkbox";
import { VscArrowLeft } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import greenRewardABI from "../../contract/greenRewardABI.json";







const SellProduct = () => {
    const [checked, setChecked] = useState(false);
    const onChange = () => {
        setChecked(!checked);
    };
    const { config } = usePrepareContractWrite({
        address: '0x25d3195984A693886103312eA3FA53D738c951B7',
        abi: greenRewardABI,
        functionName: 'listProduct',
    })
    const { data, isLoading, isSuccess, write } = useContractWrite(config)



    return (
        <SellParent>
            <SellWrapper>
                <Wrapper>
                    <Link to='/' style={{ marginTop: '1rem' }}><VscArrowLeft /></Link>
                    <form>
                        <FormHeader>

                            <h3>Add a product</h3>
                            <img src={arrow} alt="arrow" marginLeft="2rem" />
                        </FormHeader>
                        <FormTextInput
                            labelName="Type of recyclable material"
                            placeholder="E.g Plastic Bottles Collection"
                            name="bottlecollection"

                        />
                        <Select>
                            <option value="" hidden>Quantity of recyclabe product (in unit of measure) </option>
                            <option value="1">Grams</option>
                            <option value="2">Kilograms</option>
                            <option value="3">Tons</option>
                            <option value="4">Liters</option>
                            <option value="5">Cans</option>
                            <option value="6">Pounds</option>
                            <option value="7">Gallons </option>
                            <option value="8">Pieces</option>
                            <option value="9">Boxes</option>
                        </Select>
                        <br></br>
                        <FormTextInput
                            labelName="Volume of the recyclable product"
                            placeholder="Type the volume of the recyclable product"
                            name="recyclableproduct"

                        />
                        <FormTextInput
                            labelName="Price of the recyclable material (Price per unit of measure)"
                            placeholder="E.g 1 plastic bottle cost  2 $OTTO"
                            name="cost"

                        />


                        <FormTextInput
                            labelName="Location"
                            placeholder="E.g Lagos"
                            name="location"

                        />




<label class="text-sm font-medium text-black block mb-2" for="user_avatar">Add a picture of the recyclable material </label>
<input class="block w-3/4 cursor-pointer bg-white border-black border-solid border-2  text-black focus:outline-none focus:border-black  text-sm rounded-lg" aria-describedby="file_upload" id="file_upload" type="file"/>
<div class="mt-1 text-sm text-black" id="file">Drag and drop or Select file from computer</div>

                        <Checkbox
                            id="checkbox"
                            label="I agree to the 1% commission deduction by this platform"
                            value={checked}
                            onChange={onChange}
                            fontSize='0.5rem'
                        />
                        <FormButton
                            text="Proceed to Confirm"
                            color="#fff"
                            borderColor="#2B452B"
                            disabled={!write} onClick={() => write?.()}       

                        />
                        {isLoading && <div>Check Wallet</div>}
                        {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
                        <FormButton
                            text="Cancel"
                            color="#2B452B"
                            borderColor="#2B452B"
                            backgroundColor='#fff'

                        />



                    </form>
                    <div style={{ height: '50rem', width: '45rem', marginRight: '2rem' }}><img src={sideimage} alt='sideimage' /></div>

                </Wrapper>
            </SellWrapper>
        </SellParent>

    );
};

export default SellProduct;