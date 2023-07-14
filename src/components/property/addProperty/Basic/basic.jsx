import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
// import Dropdown from 'react-bootstrap/Dropdown';
import "./basic.css";
import PropertyNav from "../../../PropertyNav";
import { FormSelect } from "react-bootstrap";

const BasicInfoForm = () => {

    const { updateFormData, formData, cancelFormFilling, loginStatus } = useContext(UserContext);
    // console.log(basicContext);

    const navigate = useNavigate();
    useEffect(() => {
        loginStatus ? <></> : navigate('/signin')
    }, []);

    return (

        <>
            <PropertyNav section={"basic"} />
            <div className="basic-form-container txt-clr">
                <form>
                    <div className="basic-form-flexbox">
                        <FloatingLabel
                            // className='input-box'
                            controlId="floatingInput"
                            label="Property Type"
                        >
                            <Form.Select aria-label="Default select example"
                                // size="lg"
                                placeholder="Property Type"
                                name="property_type" value={formData.property_type} onChange={updateFormData} required
                            >
                                <option value="plot">Plot</option>
                                <option value="house">House</option>
                                <option value="flat">Flat</option>
                            </Form.Select>
                        </FloatingLabel >
                        {/* <FloatingLabel
                               controlId="floatingInput"
                               label="Property Type" 
                            >
                                  <span style={{ color: "red" }}>*</span>:
                                <select name="property_type" value={formData.property_type} onChange={updateFormData} required>
                                    <option value="plot">Plot</option>
                                    <option value="house">House</option>
                                    <option value="flat">Flat</option>
                                </select>
                            </FloatingLabel> */}

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Negotiable"
                        >
                            <FormSelect 
                            name="negotiable" value={formData.negotiable} onChange={updateFormData}>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </FormSelect>
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Price"
                        >
                            <Form.Control 
                            placeholder="Price"
                            type="number" 
                            name="price"
                            value={formData.price} onChange={updateFormData} required />
                        </FloatingLabel>

                        <FloatingLabel
                            // controlId="floatingInput"
                            label="Ownership"
                        >
                            <FormSelect
                                name="ownership"
                                value={formData.ownership}
                                onChange={updateFormData}>
                                <option value="dealer">Dealer</option>
                                <option value="self">Self</option>
                            </FormSelect>
                        </FloatingLabel>

                        <FloatingLabel
                            label="Property Age"
                        >
                            <Form.Control 
                            placeholder="Property Age"
                            type="number"
                                name="property_age"
                                value={formData.property_age}
                                onChange={updateFormData} required />
                        </FloatingLabel>

                        <FloatingLabel
                            label="Property Approved"
                        >
                            <FormSelect name="property_approved"
                                value={formData.property_approved}
                                onChange={updateFormData}>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </FormSelect>
                        </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Property Description"
                            >
                                <Form.Control
                                as="textarea" placeholder="Leave a comment here"
                                 name="property_description" value={formData.property_description} onChange={updateFormData} />
                            </FloatingLabel>

                            <FloatingLabel
                                label="Bank Loan"
                            >
                                <FormSelect name="bank_loan" 
                                value={formData.bank_loan} 
                                onChange={updateFormData}>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </FormSelect>
                            </FloatingLabel>

                        <div className="button-container">
                            <div >
                                <button onClick={() => {
                                    cancelFormFilling();
                                    navigate('/list');
                                }}>cancel</button>
                            </div>
                            <div>
                                <Link to={"/propertydetails"}><button type="submit">Save & continue</button></Link>
                            </div>
                        </div>

                    </div>
                </form>
            </div >
        </>
    );
}


export default BasicInfoForm;