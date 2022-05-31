import { ArrowForward } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react'
import { Link } from "react-router-dom";
import "./Product.scss"

function Product(props) {
	return (
		<Link to={"/detail/" + props.product_id} className="product">
			<div className='image-holder'>
				<img src={props.image} alt={props.children} />
			</div>
			<b className='title'>{props.children}</b>
			<code className='price'>{props.price} TL</code>

			<Button color="success" variant="contained" aria-label="see details" className="details-button" endIcon={<ArrowForward />} size="small">
				Details
			</Button>
		</Link>

	)
}

export default Product