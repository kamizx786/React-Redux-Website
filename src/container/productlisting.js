import React, { useEffect } from 'react'
import Productcomponent from './productcomponent';
import axios from 'axios';
import { useDispatch } from 'react-redux/es/exports';
import {setProducts} from '../redux/actions/productactions'

const Productlisting = () => {
const dispatch=useDispatch();
const fetchData=async()=>{
 const response=await axios.get('https://fakestoreapi.com/products');
dispatch(setProducts(response.data));
}

useEffect(()=>{
    fetchData();
},[])
  return (
    <div>
      
      <Productcomponent/>
    </div>
  )
}

export default Productlisting
