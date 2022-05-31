import React from 'react'
import { Link } from "react-router-dom";
import "./Product.scss"

function Product(props) {
	function stopPropagation(e) {
		e.stopPropagation();
	}

	return (
		<div className='product'>
			<Link to={"/detail/" + props.product_id}>
				<div className='image-holder'>
					<img src={props.image} alt={props.children} />
				</div>
				<b className='title'>{props.children}</b>
				<code className='price'>{props.price} TL</code>
			</Link>

			<button className='add-to-basket' onClick={stopPropagation}>
				Add To Basket
			</button>
		</div>
	)
}

export default Product