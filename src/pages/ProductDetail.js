import "./ProductDetail.scss";
import React from 'react'
import { useParams } from "react-router-dom";
import { useStateValue } from '../state/StateProvider';

function ProductDetail() {
	let { product_id } = useParams();
	const [state, dispatch] = useStateValue();
	const product_detail = state.products.find(x => x.product_id == product_id);

	const AddToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: product_id
		});
	}

	const RemoveFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			item: product_id
		});
	}

	return (
		<div className="outer">
			<div className="inner">
				<img src={product_detail.image} />

				<div className="details">
					<h2>Product {product_id}</h2>

					<button onClick={AddToBasket}>Add To Basket</button>

					<button onClick={RemoveFromBasket} disabled={!state.basket.includes(product_id)}>
						Remove From Basket
					</button>
				</div>
			</div>
		</div>
	)
}

export default ProductDetail