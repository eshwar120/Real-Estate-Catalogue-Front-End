import { createContext, useEffect, useState } from "react";



const UserContext = createContext({});

const UserContextProvider = ({ children }) => {


    const [login, setLogin] = useState(localStorage.getItem("lgs") === 'true' ? true : false);
    const [image, setImage] = useState([]);
    // console.log(image)
    let userData = {
        id: localStorage.getItem("id") || "12345",
        email: localStorage.getItem("email") || "unknown",
    };
    let tkn = localStorage.getItem("tkn");
    const SERVER_ADDRESS = 'https://real-estate-catalogue.onrender.com/'
    const [dataRefresh, setDataRefresh] = useState(true);

    const intialFormData = {
        length: "",
        breadth: "",
        total_area: "",
        no_of_bhk: "",
        attached: "yes",
        furnished: "yes",
        lift: "yes",
        facing: "east",
        area_unit: "sqm",
        no_of_floor: "",
        western_toilet: "yes",
        car_parking: "yes",
        electricity: "",
        email: "",
        area: "",
        address: "",
        latitude: "",
        city: "Delhi",
        pincode: "",
        landmark: "",
        longitude: "",
        name: "",
        mobile: "",
        posted_by: "owner",
        sale_type: "",
        featured: "gym",
        ppd_package: "",
        property_type: "plot",
        price: "",
        property_age: "",
        property_description: "",
        negotiable: "yes",
        ownership: "dealer",
        property_approved: "yes",
        bank_loan: "yes",
    }
    const [formData, setFormData] = useState(intialFormData)

    const [data, setData] = useState([{
        address: "3-72",
        area:
            "hyderabad",
        area_unit
            :
            "sqm",
        attached
            :
            "yes",
        bank_loan
            :
            "yes",
        breadth
            :
            "1",
        car_parking
            :
            "yes",
        city
            :
            "Mumbai",
        electricity
            :
            "3phase",
        email
            :
            "ganeshpendyala2000@gmail.com",
        facing
            :
            "east",
        featured
            :
            "gym",
        furnished
            :
            "yes",
        image
            :
            "https://firebasestorage.googleapis.com/v0/b/real-estate-catalogue-f7087.appspot.com/o/files%2Falien-world-nature-space-4k_15800548601.jpg%20%20%20%202023-6-15%2017%3A29%3A50?alt=media&token=0813014c-f70e-41de-adf3-f256da2e7195",
        landmark
            :
            "temple",
        latitude
            :
            "1325328435343",
        length
            :
            "1",
        lift
            :
            "no",
        longitude
            :
            "23424532453",
        mobile
            :
            "08977438781",
        name
            :
            "Eshwar neela",
        negotiable
            :
            "yes",
        no_of_bhk
            :
            "1",
        no_of_floor
            :
            "1",
        ownership
            :
            "dealer",
        pincode
            :
            "500001",
        posted_by
            :
            "owner",
        ppd_package
            :
            "10000",
        price
            :
            "100000",
        property_age
            :
            "1",
        property_approved
            :
            "yes",
        property_description
            :
            "1",
        property_type
            :
            "plot",
        sale_type
            :
            "loan",
        total_area
            :
            "11",
        western_toilet
            :
            "yes",
        __v
            :
            0,
        _id
            :
            "648afd3b07d4d203a2bc3ab8"
    }]);

    // const toastData = {
    //     position: "top-center",
    //     autoClose: 4000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    // }


    const value = {
        loginStatus: login,
        userData: userData,
        updateUserData: (data) => {
            const { id, email } = data;
            localStorage.setItem("id", id);
            localStorage.setItem("email", email);
            userData = {
                id: id,
                email: email
            }

        },
        token: tkn,
        updateToken: (data) => {
            const { token } = data
            localStorage.setItem("tkn", token);
            tkn = token;
        },
        updateLoginStatus: (boolean) => {
            if (boolean === false) {
                setLogin(false);
                localStorage.setItem("lgs", false);
            }
            else {
                setLogin(true);
                localStorage.setItem("lgs", true);
            }
        },
        data: data,
        updateData: (newData) => {
            setData(newData);
        },
        dataRefresh: dataRefresh,
        updateDataRefresh: () => {
            setDataRefresh(!dataRefresh)
        },
        formData: formData,
        updateFormData: (eve) => {
            const { name, value } = eve.target
            setFormData(formData => ({
                ...formData,
                [name]: value
            }))
        },
        cancelFormFilling: () => {
            setFormData(intialFormData);
        },
        SERVER_ADDRESS: SERVER_ADDRESS,
        image: image,
        updateImage: (value) => {
            setImage(value);
        },
        // toastData : toastData
    }

    // console.log(data)
    useEffect(() => {
        fetch(`${SERVER_ADDRESS}property/${userData.id}`)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
                throw new Error(response.json());
            })
            .then(res => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [dataRefresh]);

    // console.log(data);



    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
};

export {
    UserContext,
    UserContextProvider
}
