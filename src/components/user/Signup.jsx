import React, { useContext, useEffect, useState } from 'react';
import '../../styles/login.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import BrandLogo from '../../utils/BrandLogo';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function SignUp() {

  const [signUpData, setsignUpData] = useState({ email: "", password: "", confirmPassword: "" });
  // const [error, setError] = useState(false);

  const { loginStatus, SERVER_ADDRESS } = useContext(UserContext);
  const navigate = useNavigate()
  useEffect(() => {
    loginStatus ? navigate('/list') : <></>
  }, []);
  const [disable, setDisable] = useState(false);

  const handleSignUp = async () => {
    setDisable(true);
    console.log(signUpData)
    if (signUpData.email === "" || signUpData.password === "" || signUpData.confirmPassword === "") {
      toast.warn("All feilds are mandatory");
      setDisable(false)
      return;
    }
    else if (signUpData.password !== signUpData.confirmPassword){
      toast.warn("Passwords should be matching");
      setDisable(false)
      return;
    }
    else if (!/\@[a-z]/.test(signUpData.email)) {
      toast.warn("Email must contain @");
      setDisable(false)
      return;
    }
    else if (!/[0-9]/.test(signUpData.password)) {
      toast.warn("Passwod should contain a number")
      setDisable(false)
      return;
    }
    else if (!/[a-z]/.test(signUpData.password)) {
      toast.warn("Passwod should contain a lowercase alphabet")
      setDisable(false)
      return;
    }
    else if (!/[A-Z]/.test(signUpData.password)) {
      toast.warn("Passwod should contain a uppercase alphabet")
      setDisable(false)
      return;
    }
    else if (signUpData.password.length > 16 || signUpData.password.length < 8) {
      toast.warn("Password must contain atleast 8-16 letters")
      setDisable(false)
      return;
    }

    const loading = toast.loading('Please wait signing up...');
    await fetch(`${SERVER_ADDRESS}user/signup`, {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(signUpData)
    })
      .then(response => {
        console.log(response)
        if (response.status === 201) {
          toast.update(loading, {
            render: "Signed up successfully",
            type: "success",
            isLoading: false,
            autoClose: 4000
          });
          setDisable(false)
          navigate('/signin')
          return response.json();
        }
        toast.update(loading, {
          render: "User already exist",
          type: "error",
          isLoading: false,
          autoClose: 4000
        })
        setDisable(false)
      })
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error('Error:', error.message);
        toast.update(loading, {
          render: error.message,
          type: "error",
          isLoading: false,
          autoClose: 4000
        });
        setDisable(false)
      });
    setsignUpData({ email: "", password: "", confirmPassword: "" })
  }


  return (
    <div className='login-container green-bg'>
      <div className='login-form white-bg br-10px'>
        <BrandLogo />
        <h6 className='black-clr txt-center mb'>Enter your credentials to create your account</h6>
        <FloatingLabel
          className='input-box'
          controlId="floatingInput"
          label="Email address"
        >
          <Form.Control
            type="email" placeholder="name@example.com"
            onChange={(e) => {
              setsignUpData((signUpData) => ({
                ...signUpData,
                email: e.target.value
              }))
            }}
            value={signUpData.email}
          />
        </FloatingLabel>
        <FloatingLabel
          className='input-box'
          controlId="floatingPassword" label="Password"
        >
          <Form.Control
            type="password" placeholder="Password"
            onChange={(e) => {
              setsignUpData((signUpData) => ({
                ...signUpData,
                password: e.target.value
              }))
            }}
            value={signUpData.password}
          />
        </FloatingLabel>
        <FloatingLabel
          className='input-box'
          controlId="floatingPassword" label="Confirm Password"
        >
          <Form.Control
            type="password" placeholder="Password"
            onChange={(e) => {
              setsignUpData((signUpData) => ({
                ...signUpData,
                confirmPassword: e.target.value
              }))
            }}
            value={signUpData.confirmPassword}
          />
        </FloatingLabel>
        <button
          onClick={handleSignUp}
          className='blue-bg white-clr login-btn br-5px'
          disabled={disable}
        >Sign up
        </button>
        <h6 className='blue-clr bold'>
          <Link
            to={"/signin"}
            className='blue-clr bold txt-none'
          >Sign in
          </Link>
        </h6>
      </div>
      <h6 className='txt-center'>
        Don't have an account?
        <Link
          to={"/signin"}
          className='blue-clr bold txt-none'
        > Sign in
        </Link>
      </h6>
    </div>
  )
}







// import React, { useContext, useEffect, useState } from 'react';
// import './signup.css';
// import { Link, Routes,Route, useNavigate } from 'react-router-dom';
// import { UserContext } from '../../context/UserContext';
// import SignInPage from './SignIn';
// import BrandLogo from '../../utils/BrandLogo';

// function SignUp() {
//   const [email, setemail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmpassword, setConfirmpassword] = useState('');
//   const [redirectToSignIn, setRedirectToSignIn] = useState(false);
//   const { loginStatus } = useContext(UserContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     loginStatus ? navigate('/list') : navigate('/signup')
//   }, []);


//   const handleSignUp = () => {
//     // Create an object with the user data
//     const userData = {
//       email: email,
//       password: password,
//       confirmpassword: confirmpassword
//     };

//     // Send a POST request to the signup endpoint
//     fetch('https://real-estate-backend-g14x.onrender.com/user/signup', {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         email: email,
//         password: password,
//         confirmPassword : confirmpassword
//       })
//     })
//       .then(response => {
//         if(response.status === 201){
//           navigate('/signin')
//         }
//         response.json()
//       })
//       .then(data => {
//         console.log(data);  
//       })
//       .catch(error => {
//         // Handle any errors that occur during the request
//         console.error('Error:', error);

//       });
//       setemail("");
//       setPassword("");
//       setConfirmpassword("");
//   };

//   if (redirectToSignIn) {
//     return <SignInPage />;
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="white">
//           {/* <h1 className="logoText">Logo</h1> */}
//           {/* <img  src={BrandLogo} alt="Logo" className="logoImage" />  */}
//           <BrandLogo/>
//           <p className="subText">Create New Account</p>
//           <input
//             type="text"
//             placeholder="User ID"
//             className="inputField"
//             value={email}
//             onChange={e => setemail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="inputField2"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             className="inputField3"
//             value={confirmpassword}
//             onChange={e => setConfirmpassword(e.target.value)}
//           />
//           <button className="signInButton" onClick={handleSignUp}>
//             Sign Up
//           </button>
//         </div>
//         <Link className="signIn1" to="/signIn">
//           Sign In
//         </Link>

//       </header>
//     </div>
//   );
// }

// export default SignUp;



// import React, { useContext, useEffect, useState } from 'react';
// import './signup.css';
// import { Link, Routes, Route, useNavigate } from 'react-router-dom';
// import { UserContext } from '../../context/UserContext';
// import SignInPage from './SignIn';
// import BrandLogo from '../../utils/BrandLogo';

// function SignUp() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [redirectToSignIn, setRedirectToSignIn] = useState(false);
//   const { loginStatus } = useContext(UserContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     loginStatus ? navigate('/list') : navigate('/signup');
//   }, []);

//   const validateEmail = () => {
//     // Check if the email contains the @ symbol
//     return email.includes('@');
//   };

//   const validatePassword = () => {
//     // Check if the password has a minimum length of 6 characters
//     return password.length >= 6;
//   };


//   const handleSignUp = () => {
//     // Validate the email and password
//     if (!validateEmail()) {
//       alert('Invalid email format, Email should contain @.');
//       return;
//     }

//     if (!validatePassword()) {
//       alert('Password should be at least 6 characters long.');
//       return;
//     }
//     if (password !== confirmPassword) {
//       alert('Password and Confirm Password do not match.');
//       return;
//     }




//     // Create an object with the user data
//     const userData = {
//       email: email,
//       password: password,
//       confirmPassword: confirmPassword
//     };
//     fetch('https://real-estate-backend-g14x.onrender.com/user/signup', {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(userData)
//     })
//       .then(response => {
//         if (response.status === 201) {
//           alert('User registered successfully!');
//           navigate('/signin');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log(data);
//       })
//       .catch(error => {
//         // Handle any errors that occur during the request
//         console.error('Error:', error);
//       });
//     // Send a POST request to the signup endpoint
//     fetch('https://real-estate-backend-g14x.onrender.com/user/signup', {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(userData)
//     })
//       .then(response => {
//         if (response.status === 201) {
//           navigate('/signin');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log(data);
//       })
//       .catch(error => {
//         // Handle any errors that occur during the request
//         console.error('Error:', error);
//       });

//     setEmail('');
//     setPassword('');
//     setConfirmPassword('');
//   };

//   if (redirectToSignIn) {
//     return <SignInPage />;
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="white">
//           {/* <h1 className="logoText">Logo</h1> */}
//           {/* <img  src={BrandLogo} alt="Logo" className="logoImage" />  */}
//           <BrandLogo />
//           <p className="subText">Create New Account</p>
//           <input
//             type="text"
//             placeholder="User ID"
//             className="inputField"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="inputField2"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             className="inputField3"
//             value={confirmPassword}
//             onChange={e => setConfirmPassword(e.target.value)}
//           />
//           <button className="signInButton" onClick={handleSignUp}>
//             Sign Up
//           </button>
//         </div>
//         <Link className="signIn1" to="/signIn">
//           Sign In
//         </Link>
//       </header>
//     </div>
//   );
// }

// export default SignUp;




// import React, { useContext, useEffect, useState } from 'react';
// import './signup.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { UserContext } from '../../context/UserContext';
// import SignInPage from './SignIn';
// import BrandLogo from '../../utils/BrandLogo';

// function SignUp() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [confirmPasswordError, setConfirmPasswordError] = useState('');
//   const [redirectToSignIn, setRedirectToSignIn] = useState(false);
//   const { loginStatus, SERVER_ADDRESS } = useContext(UserContext);
//   const navigate = useNavigate();

//   useEffect(() => {

//     loginStatus ? navigate('/list') : navigate('/signup');
//   }, []);

//   const validateEmail = () => {
//     // Check if the email contains the @ symbol
//     if (!email.includes('@')) {
//       setEmailError('Invalid email format. Email should contain @.');
//       return false;
//     }
//     setEmailError('');
//     return true;
//   };

//   const validatePassword = () => {
//     // Check if the password has a minimum length of 6 characters
//     if (password.length < 6) {
//       setPasswordError('Password should be at least 6 characters long.');
//       return false;
//     }
//     setPasswordError('');
//     return true;
//   };

//   const validateConfirmPassword = () => {
//     if (password !== confirmPassword) {
//       setConfirmPasswordError('Passwords are not matching.');
//       return false;
//     }
//     setConfirmPasswordError('');
//     return true;
//   };

//   const handleSignUp = () => {
//     // Validate the email, password, and confirm password
//     if (!validateEmail() || !validatePassword() || !validateConfirmPassword()) {
//       return;
//     }

//     // Create an object with the user data

//     const userData = {
//       email: email,
//       password: password,
//       confirmPassword: confirmPassword
//     };



//     // Send a POST request to the signup endpoint
//     fetch(`${SERVER_ADDRESS}user/signup`, {

//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(userData)
//     })
//       .then(response => {
//         if (response.status === 201) {
//           alert('User registered successfully!');
//           navigate('/signin');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log(data);
//       })
//       .catch(error => {
//         // Handle any errors that occur during the request
//         console.error('Error:', error);
//       });

//     setEmail('');
//     setPassword('');
//     setConfirmPassword('');
//   };

//   if (redirectToSignIn) {
//     return <SignInPage />;
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="white">
//           <BrandLogo />
//           <p className="subText">Create New Account</p>
//           <input
//             type="text"
//             placeholder="User ID"
//             className="inputField"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//           />
//           {emailError && <p className="error">{emailError}</p>}
//           <input
//             type="password"
//             placeholder="Password"
//             className="inputField2"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//           />
//           {passwordError && <p className="error">{passwordError}</p>}
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             className="inputField3"
//             value={confirmPassword}
//             onChange={e => setConfirmPassword(e.target.value)}
//           />
//           {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
//           <button className="signInButton" onClick={handleSignUp}>
//             Sign Up
//           </button>
//         </div>
//         <Link className="signIn1" to="/signIn">
//           Sign In
//         </Link>
//       </header>
//     </div>
//   );
// }

// export default SignUp;
