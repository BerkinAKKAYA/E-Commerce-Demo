import React from 'react'
import "./Product.scss"

function Product(props) {
	return (
		<a className='product' href={props.url}>
			<div className='image-holder'>
				<img src={props.image} alt={props.children} />
			</div>
			<b className='title'>{props.children}</b>
			<code className='price'>{props.price} TL</code>
		</a>
	)
}

export default Product