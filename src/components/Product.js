import { ArrowForward, HolidayVillageRounded } from '@mui/icons-material';
import { Badge, Button } from '@mui/material';
import React from 'react'
import { Link } from "react-router-dom";
import { useStateValue } from '../state/StateProvider';
import "./Product.scss"

function Product(props) {
	const [state, dispatch] = useStateValue();

	const CountInBasket = () => state.basket.filter(x => x === props.product_id).length;

	const RemoveFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			item: props.product_id
		})
	}

	return (
		<Badge badgeContent={CountInBasket()} color="primary" className="badge" onClick={RemoveFromBasket}>
			<div className="product">
				<Link to={"/detail/" + props.product_id}>
					<div className='image-holder'>
						<img src={props.image} alt={props.children} />
					</div>
					<p className='price'>{props.price} TL</p>
					<b className='title'>{props.children}</b>
				</Link>
			</div>
		</Badge>
	)
}

export default Product