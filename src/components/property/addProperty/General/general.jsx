import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
import "./general.css";
import PropertyNav from "../../../PropertyNav";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { FormSelect } from "react-bootstrap";

const GeneralFormInfo = () => {
    const navigate = useNavigate();

    const { updateFormData, formData, loginStatus, updateImage, image } =
        useContext(UserContext);

    useEffect(() => {
        loginStatus ? <></> : navigate("/signin");
    });

    return (
        <>
            <PropertyNav section={"general"} />
            <div className="property-form-container">
                <Form>
                    <FloatingLabel label="Username">
                        <Form.Control
                            placeholder="Username"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={updateFormData}
                            required
                        />
                    </FloatingLabel>

                    <FloatingLabel label="Mobile">
                        <Form.Control
                            placeholder="Mobile"
                            type="number"
                            name="mobile"
                            value={formData.mobile}
                            onChange={updateFormData}
                            required
                            minLength="10"
                            maxLength="12"
                        />
                    </FloatingLabel>

                    <FloatingLabel label="Posted By">
                        <FormSelect
                            placeholder="Posted By"
                            value={formData.posted_by}
                            name="posted_by"
                            onChange={updateFormData}
                        >
                            <option value="owner">Owner</option>
                            <option value="dealer">Dealer</option>
                        </FormSelect>
                    </FloatingLabel>

                    <FloatingLabel label="Sale Type">
                        <Form.Control
                            placeholder="Sale Type"
                            type="text"
                            name="sale_type"
                            value={formData.sale_type}
                            onChange={updateFormData}
                        />
                    </FloatingLabel>

                    <FloatingLabel label="Feature">
                        <FormSelect
                            placeholder="Feature"
                            value={formData.featured}
                            name="featured"
                            onChange={updateFormData}
                            required
                        >
                            <option value="gym">Gym</option>
                            <option value="pool">Pool</option>
                            <option value="garden">Garden</option>
                            <option value="auditorium">Auditorium</option>
                        </FormSelect>
                    </FloatingLabel>

                    <FloatingLabel label="PPD Package">
                        <Form.Control
                            placeholder="PPD Package"
                            type="text"
                            name="ppd_package"
                            value={formData.ppd_package}
                            onChange={updateFormData}
                        />
                    </FloatingLabel>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Property Image</Form.Label>
                        <Form.Control
                            placeholder="Image"
                            type="file"
                            name="image"
                            accept=".jpeg, .jpg, .png, .mp4"
                            onChange={(e) => {
                                updateImage(e.target.files[0]);
                            }}
                            required />
                    </Form.Group>
                    <div></div>
                    <div className="button-container">
                        <div>
                            <Link to={"/propertydetails"}>
                                <button>Pervious</button>
                            </Link>
                        </div>
                        <div>
                            <Link to={"/locationinfo"}>
                                <button type="submit">save & continue </button>
                            </Link>
                        </div>
                    </div>

                    {/* </div> */}
                </Form>
            </div>
        </>
    );
};

export default GeneralFormInfo;
