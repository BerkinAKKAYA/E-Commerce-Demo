import React from 'react'
import "./Home.scss"
import Product from '../components/Product'
import { useStateValue } from '../state/StateProvider';
import { Link } from 'react-router-dom';

function Home() {
	const [state] = useStateValue();

	return (
		<>
			{
				state.user ?
					<div id="welcome">
						<h1>Welcome Back!</h1>
						<p><span>Signed in as</span> <b>{state.user.email}</b></p>
					</div>
					:
					<div id="welcome">
						<h1><Link to='/sign-in#login'>Login</Link> or <Link to='/sign-in#register'>Create An Account</Link></h1>
					</div>
			}


			<section id="home_products">
				{
					state.products.map((product, i) =>
						<Product price={product.price} product_id={product.product_id} image={product.image} key={i}>
							{product.name}
						</Product>
					)
				}
			</section>
		</>
	)
}

export default Home