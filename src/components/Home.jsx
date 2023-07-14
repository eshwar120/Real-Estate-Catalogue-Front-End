import React, { useEffect } from 'react'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const { loginStatus } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() =>{
        loginStatus ? navigate('/list') : navigate('/signin')
    });
    return (
        <></>
    )
}
