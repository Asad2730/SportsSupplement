import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/auth/authSlice';


const LogoutUser = () => {
    
    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(logout())        
    })

  return (
     <></>
  )
}

export default LogoutUser;