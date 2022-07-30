import React, { useEffect } from 'react'
import Productcomponent from './productcomponent';
import { useDispatch } from 'react-redux/es/exports';
import {fetchProducts} from '../redux/actions/productactions'

const Productlisting = () => {
const dispatch=useDispatch();

useEffect(()=>{
   dispatch(fetchProducts());
},[])
  return (
    <div>
      
      <Productcomponent/>
    </div>
  )
}

export default Productlisting
