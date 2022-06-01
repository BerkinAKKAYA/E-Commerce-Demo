import "./ProductDetail.scss";
import React from 'react'
import { Link, useParams } from "react-router-dom";
import { useStateValue } from '../state/StateProvider';
import { AddShoppingCart, RemoveShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";

function ProductDetail() {
	let { product_id } = useParams();
	const [state, dispatch] = useStateValue();
	const product_detail = state.products.find(x => x.product_id === product_id);

	const CountInBasket = () => state.basket.filter(x => x === product_id).length;

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
				<img src={product_detail.image} alt="image of product" />

				<div className="details">
					<h2>Product {product_id}</h2>
					<p className="price">{product_detail.price} TL</p>

					{
						state.user ?
							<>
								<Button variant="contained" color="success" onClick={AddToBasket} startIcon={<AddShoppingCart />}>
									Add To Basket
								</Button>

								<Button variant="contained" color="error" onClick={RemoveFromBasket} startIcon={<RemoveShoppingCart />} disabled={state.basket.length <= 0}>
									Remove From Basket
								</Button>
							</>
							:
							<p>
								<Link to="/sign-in">Sign In</Link> to purchase.
							</p>
					}

					{
						(CountInBasket() > 0) ? (
							<div className="in-basket">
								{CountInBasket()} in Basket
							</div>
						) : ''
					}
				</div>
			</div>
		</div>
	)
}

export default ProductDetail