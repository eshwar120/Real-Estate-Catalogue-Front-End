import { useContext, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { FormSelect } from "react-bootstrap";
import "./property.css"
import PropertyNav from "../../../PropertyNav";
const PropertyFormInfo = () => {

    const { updateFormData, formData,  loginStatus } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        loginStatus ? <></> : navigate('/signin')
    });

    return (
        <>
            <PropertyNav section={"property"}/>
            <div className="property-form-container">
                <Form>
                    {/* <div className="property-form-flexbox"> */}
                            <FloatingLabel
                            label="Length"
                            >
                                <Form.Control
                                    placeholder="Length"
                                    type="number"
                                    name="length"
                                    value={formData.length}
                                    onChange={updateFormData}
                                />
                            </FloatingLabel>
                            <FloatingLabel
                                label="Breadth"
                            >
                                <Form.Control
                                    placeholder="Breadth"
                                    type="number"
                                    name="breadth"
                                    value={formData.breadth}
                                    onChange={updateFormData}
                                />
                            </FloatingLabel>
                            <FloatingLabel
                            label="Total Area"
                            >
                                <Form.Control
                                    placeholder="Total Area"
                                    type="number"
                                    name="total_area"
                                    value={formData.total_area}
                                    onChange={updateFormData}
                                    required
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                label="Area Unit"
                            >
                                <FormSelect 
                                placeholder="Area Unit"
                                name="area_unit" 
                                value={formData.area_unit} 
                                onChange={updateFormData} >
                                    <option value="sqm">sqm</option>
                                    <option value="acres">acres</option>
                                    <option value="hectares">hectares</option>
                                </FormSelect>
                            </FloatingLabel>
                            <FloatingLabel
                                label="BHK"
                            >
                                <Form.Control
                                    placeholder="BHK"
                                    type="numberr"
                                    name="no_of_bhk"
                                    value={formData.no_of_bhk}
                                    onChange={updateFormData}
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                label="Floor"
                            >
                                <Form.Control
                                    placeholder="Floor"
                                    type="number"
                                    name="no_of_floor"
                                    value={formData.no_of_floor}
                                    onChange={updateFormData}
                                />
                            </FloatingLabel>
                            <FloatingLabel
                                label="Attached"
                            >
                                <FormSelect 
                                placeholder="Attached"
                                name="attached" 
                                value={formData.attached} 
                                onChange={updateFormData}    >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </FormSelect>
                            </FloatingLabel>

                            <FloatingLabel
                                label="Western Toilet"
                            >
                                <FormSelect 
                                placeholder="Western Toilet"
                                name="western_toilet" 
                                value={formData.western_toilet} 
                                onChange={updateFormData}>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </FormSelect>
                            </FloatingLabel>
                            <FloatingLabel
                            label="Furnished"
                            >
                                <FormSelect
                                placeholder="Furnished" 
                                name="furnished" 
                                value={formData.furnished} 
                                onChange={updateFormData}  >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </FormSelect>
                            </FloatingLabel>

                            <FloatingLabel
                                label="Parking"
                            >
                                <FormSelect 
                                placeholder="Parking"
                                name="car_parking" 
                                value={formData.car_parking} 
                                onChange={updateFormData}    >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </FormSelect>
                            </FloatingLabel>

                            <FloatingLabel
                                label="Lift"
                            >
                                <FormSelect 
                                placeholder="Lift"
                                name="lift" 
                                value={formData.lift} 
                                onChange={updateFormData}    >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </FormSelect>
                            </FloatingLabel>

                            <FloatingLabel
                                label="Electricity"
                            >
                                <Form.Control
                                    placeholder="Electricity"
                                    type="text"
                                    name="electricity"
                                    value={formData.electricity}
                                    onChange={updateFormData}
                                />
                            </FloatingLabel>
                            <FloatingLabel
                                label="Facing"
                            >
                                <FormSelect 
                                name="facing" 
                                value={formData.facing} 
                                onChange={updateFormData} >
                                    <option value="east">EAST</option>
                                    <option value="west">WEST</option>
                                    <option value="north">NORTH</option>
                                    <option value="south">SOUTH</option>
                                </FormSelect>
                            </FloatingLabel>
                        <div></div>
                        <div className="button-container">
                            <div>
                                <Link to={"/basicinfo"}><button>Pervious</button></Link>
                            </div>
                            <div>
                                <Link to={"/generalinfo"}><button>Save & continue</button></Link>
                            </div>
                        </div>
                </Form>
            </div>
        </>
    )
}
export default PropertyFormInfo;