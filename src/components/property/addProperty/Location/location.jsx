import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { FormSelect } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropertyNav from "../../../PropertyNav";
import Loading from "../../../../utils/Loading";
const LocationFormInfo = () => {
  const { updateFormData, formData, loginStatus, SERVER_ADDRESS, updateDataRefresh, image } = useContext(UserContext);
  const navigate = useNavigate();
  const [response, setResponse] = useState(false);
  useEffect(() => {
    loginStatus ? <></> : navigate('/signin')
  });


  const handleSubmit = async () => {
    const upload = toast.loading('Please wait a moment adding the property....')
    const convertedFormData = new FormData();

    for (const [key, value] of Object.entries(formData)) {
      convertedFormData.append(`${key}`, `${value}`);
    }

    convertedFormData.append("image", image);

    await fetch(
      `${SERVER_ADDRESS}property`,
      {
        method: "post",
        body: convertedFormData
      }
    )
      .then((res) => {
        setResponse(false);
        if (res.status === 200) {
          return res.json();
        }
        throw new Error('Falied to add Property Please try again')
      })
      .then((data) => {
        toast.update(upload, {
          render: "Property added successfully",
          type: "success",
          isLoading: false,
          autoClose: 4000
        });
        navigate('/list');
        updateDataRefresh();
      })
      .catch((err) => {
        toast.update(upload, {
          render: err.message,
          type: "error",
          isLoading: false,
          autoClose: 4000
        })
        console.log(err.message);
      })
  }

  return (
    <>
      {response ? <Loading /> : <></>}
      <PropertyNav section={"location"} />
      <div className="property-form-container">
        <Form onSubmit={(e) => {
          e.preventDefault();
          setResponse(true);
          handleSubmit()
        }}>

            <FloatingLabel 
            label="Email"
            >
              <Form.Control
              placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={updateFormData}
                required
              />
            </FloatingLabel>

            <FloatingLabel 
            label="City"
            >
              <FormSelect
              placeholder="City"
                name="city"
                value={formData.city}
                onChange={updateFormData}
                required
              >
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Nashik">Nashik</option>
                <option value="Kolhapur">Kolhapur</option>
              </FormSelect>
            </FloatingLabel>

            <FloatingLabel 
            label="Area"
            >
              <Form.Control
              placeholder="Area"
                type="text"
                name="area"
                value={formData.area}
                onChange={updateFormData}
              />
            </FloatingLabel>

            <FloatingLabel 
            label="Pincode"
            >
              <Form.Control
                type="number"
                name="pincode"
                value={formData.pincode}
                onChange={updateFormData}
              />
            </FloatingLabel>

            <FloatingLabel 
            label="Address"
            controlId="floatingTextarea"
            >
              <Form.Control
              placeholder="Address"
                as="textarea"
                name="address"
                value={formData.address}
                onChange={updateFormData}
              />
            </FloatingLabel>

            <FloatingLabel 
            label="Landmark"
            >
              <Form.Control
              placeholder="Landmark"
                type="text"
                name="landmark"
                value={formData.landmark}
                onChange={updateFormData}
              />
            </FloatingLabel>

            <FloatingLabel 
            label="Latitude"
            >
              <Form.Control
              placeholder="Latitude"
                type="text"
                name="latitude"
                value={formData.latitude}
                onChange={updateFormData}
              />
            </FloatingLabel>

            <FloatingLabel 
            label="Longitude"
            >
              <Form.Control
              placeholder="Longitude"
                type="text"
                name="longitude"
                value={formData.longitude}
                onChange={updateFormData}
              />
            </FloatingLabel>
          <div className="button-container">

            <div>
              <Link to={"/generalinfo"}><button>Previous</button></Link>
            </div>
            <div>
              <button type="submit">Add Property</button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default LocationFormInfo;
