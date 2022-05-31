import React from 'react'
import './Header.css'
import { IconButton, Badge, Tooltip } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { ReceiptLong, Search } from '@mui/icons-material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

function Header() {
	return (
		<header>
			<h1>e-commerce</h1>

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

				<Tooltip title="Basket">
					<Badge badgeContent={1} color="primary">
						<IconButton aria-label="basket" color="primary">
							<ShoppingCartCheckoutIcon />
						</IconButton>
					</Badge>
				</Tooltip>
			</div>
		</header>
	)
}

export default Header