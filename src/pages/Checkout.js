import "./Checkout.scss";
import React from 'react'
import { useStateValue } from "../state/StateProvider";

function Checkout() {
	const [state, dispatch] = useStateValue();

	return (
		<main>
			{
				state.basket.length === 0 ?
					<p>Basket is Empty</p>
					:
					<section id="checkout_products">
						{
							state.basket.map(product_id => (
								<div>
									<b>{product_id}</b> &nbsp;
									<button onClick={() => dispatch({ type: "REMOVE_FROM_BASKET", item: product_id })}>
										Remove
									</button>
								</div>
							))
						}
					</section>
			}


			<section id="subtotal">

			</section>
		</main>
	)
}

export default Checkout