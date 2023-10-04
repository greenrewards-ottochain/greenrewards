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







const SellProduct = () => {
    const [checked, setChecked] = useState(false);
    const onChange = () => {
        setChecked(!checked);
    };




    return (
        <SellParent>
            <SellWrapper>
                <Wrapper>

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
                            placeholder="E.g 1 plastic bottle cost 2 USDT"
                            name="cost"

                        />


                        <FormTextInput
                            labelName="Location"
                            placeholder="Enter your location"
                            name="location"

                        />
                        

                        <FormTextInput
                            labelName="Cost of delivery within your location"
                            placeholder="Specify the cost of delivery within your location"
                            name="cost"

                        />
                        <FormTextInput
                            labelName="Cost of delivery within outside  location"
                            placeholder="Specify the cost of delivery outside your location"
                            name="cost"

                        />

                        <input
                            id="image"
                            type="file"
                            name="Add a picture of the recyclable material "
                            
                        />
                        <br></br>

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

                        />
                        <FormButton
                            text="Cancel"
                            color="#2B452B"
                            borderColor="#2B452B"
                            backgroundColor='#fff'

                        />

                      

                    </form>
                    <div style={{ height: '40rem', width: '45rem', marginRight: '2rem' }}><img src={sideimage} alt='sideimage' /></div>

                </Wrapper>
            </SellWrapper>
        </SellParent>

    );
};

export default SellProduct;