import './Header.scss'
import React from 'react'
import { Link } from "react-router-dom";
import { IconButton, Badge, Tooltip } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { ReceiptLong, Search } from '@mui/icons-material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useStateValue } from '../state/StateProvider';

function Header() {
	const [state] = useStateValue();

	return (
		<header>
			<Link to='/'>
				<h1>e-commerce</h1>
			</Link>

			{/* Search Box */}
			<TextField
				label="Search"
				variant="standard"
				type="search"
				style={{ flex: 1 }}
				className="search-input"
				InputProps={{
					endAdornment: <InputAdornment position="end">
						<IconButton
							aria-label="search"
							edge="end"
						>
							<Search />
						</IconButton>
					</InputAdornment>,
				}}
			/>


			<div className="header-controls">
				<Tooltip title="Search" className="search-icon-mobile">
					<IconButton aria-label="search" color="default">
						<Search />
					</IconButton>
				</Tooltip>

				<Tooltip title="Previous Orders">
					<IconButton aria-label="basket" color="default">
						<ReceiptLong />
					</IconButton>
				</Tooltip>

				<Link to="/checkout">
					<Tooltip title="Basket">
						<Badge badgeContent={state.basket.length} color="primary">
							<IconButton aria-label="basket" color="primary">
								<ShoppingCartCheckoutIcon />
							</IconButton>
						</Badge>
					</Tooltip>
				</Link>
			</div>
		</header>
	)
}

export default Header