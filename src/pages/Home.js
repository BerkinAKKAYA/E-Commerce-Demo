import React from 'react'
import "./Home.scss"
import Product from '../components/Product'
import { useStateValue } from '../state/StateProvider';

function Home() {
	const [state] = useStateValue();

	return (
		<section id="products">

			{
				state.products.map((product, i) =>
					<Product price={product.price} product_id={product.product_id} image={product.image} key={i}>
						{product.product_id}
					</Product>
				)
			}
		</section>
	)
}

export default Home