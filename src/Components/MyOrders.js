import React, { useContext, useEffect } from 'react'
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { auth } from '../Config/Config'
export const MyOrders = ({user}) => {
    const history = useHistory();
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (!user) {
                history.push('/login');
            }
        })
    })
  return (
    

    <>
    <Navbar user={user} />
    <div>MyOrders</div>
    </>
  )
}

