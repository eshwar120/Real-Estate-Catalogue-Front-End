// import { useState } from 'react';
// import './App.css';
import './styles/utils.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './components/user/SignIn';
import SideNav from './components/SideNav';
import TopNav from './components/TopNav';
import SignUp from './components/user/Signup';
import List from './components/property/List';
import BasicInfoForm from './components/property/addProperty/Basic/basic';
import GeneralFormInfo from './components/property/addProperty/General/general';
import LocationFormInfo from './components/property/addProperty/Location/location';
import PropertyFormInfo from './components/property/addProperty/Property/property';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './components/Home';
// import dotenv from 'dotenv';
// dotenv.config();

function App() {
  const {loginStatus} = useContext(UserContext);
  // console.log(loginStatus)
  // const notify = () => toast("Wow so easy!");

  return (
    <BrowserRouter>
    <ToastContainer 
      position="top-center"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      limit={3}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    {/* <button onClick={notify}>Notify!</button> */}
      {
        loginStatus ?
        <>
        <SideNav/>
        <TopNav/>
        </>
        :
        <></>
      }
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<SignInPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/basicinfo' element={<BasicInfoForm/>}/>
        <Route path='/propertydetails' element={<PropertyFormInfo/>}/>
        <Route path='/generalinfo' element={<GeneralFormInfo/>}/>
        <Route path='/locationinfo' element={<LocationFormInfo/>}/>
        <Route path='/*' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
