import React from 'react'
import "./Home.scss"
import Product from './Product'

function Home() {
	return (
		<section id="products">
			<Product price="95" url="/detail/A" image="https://ih1.redbubble.net/image.966771327.7091/ssrco,slim_fit_t_shirt,mens,101010:01c5ca27c6,front,square_product,600x600.jpg">Product A</Product>
			<Product price="50" url="/detail/B" image="https://ih1.redbubble.net/image.8227368.6572/ssrco,classic_tee,womens,fafafa:ca443f4786,front_alt,square_product,600x600.u1.jpg">Product B</Product>
			<Product price="26" url="/detail/C" image="https://ih1.redbubble.net/image.2539072930.8260/ssrco,classic_tee,mens,101010:01c5ca27c6,front_alt,square_product,600x600.jpg">Product C</Product>
			<Product price="32" url="/detail/D" image="https://ih1.redbubble.net/image.3576887324.8486/ssrco,classic_tee,flatlay,322e3f:696a94a5d4,front,wide_portrait,750x1000.jpg">Product D</Product>
			<Product price="40" url="/detail/E" image="https://ih1.redbubble.net/image.523528941.5522/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg">Product E</Product>
		</section>
	)
}

export default Home