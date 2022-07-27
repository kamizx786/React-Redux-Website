import React, { useEffect } from 'react'
import './detail.css'
import axios from "axios";
import { useDispatch } from 'react-redux/es/exports';
import {useLocation} from "react-router-dom"
import { selectProducts,removeselectProducts} from '../redux/actions/productactions';
import { useSelector } from 'react-redux/es/hooks/useSelector';
const ProductDetail = () => {
const ProductDetail=useSelector((state)=>state.products);
const location=useLocation();
const {id}=location.state;
const dispatch=useDispatch();
const fetchdata=async()=>{
  const response =await axios.get(`https://fakestoreapi.com/products/${id}`)
  dispatch(selectProducts(response.data));
}
useEffect(()=>{
if(id!=="") fetchdata();

dispatch(removeselectProducts());

},[id])
  return (
    <div>
    	<div class="container">
    {
      Object.keys(ProductDetail).length===0?(<div>.....Loading</div>):
      (
<div class="card">
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">			
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img src={ProductDetail.image} width="400px" height="400px" /></div>
						</div>					
					</div>
					<div class="details col-md-6">
						<h3 class="product-title">{ProductDetail.title}</h3>
						<div class="rating">
							<div class="stars">
								<span class="fa fa-star checked">*</span>
								<span class="fa fa-star checked">*</span>
								<span class="fa fa-star checked">*</span>
								<span class="fa fa-star">*</span>
								<span class="fa fa-star">*</span>
							</div>
							<span class="review-no"><b>Reviews</b>:{ProductDetail.rating.rate}({ProductDetail.rating.count})</span>
              
						</div>
						<p class="product-description">{ProductDetail.description}</p>
						<h4 class="price">current price: <span>${ProductDetail.price}</span></h4>
						<p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						<h5 class="sizes">sizes:
							<span class="size" data-toggle="tooltip" title="small">s</span>
							<span class="size" data-toggle="tooltip" title="medium">m</span>
							<span class="size" data-toggle="tooltip" title="large">l</span>
							<span class="size" data-toggle="tooltip" title="xtra large">xl</span>
						</h5>

					
						<div class="action">
							<button class="add-to-cart btn btn-default" type="button">add to cart</button>
					
						</div>
					</div>
				</div>
			</div>
		</div>
      )
    }
		
	</div>
    </div>
  )
}

export default ProductDetail
