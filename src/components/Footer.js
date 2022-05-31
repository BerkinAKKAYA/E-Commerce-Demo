import React from 'react'
import { Favorite } from '@mui/icons-material';
import "./Footer.scss";

function Footer() {
	return (
		<footer>
			Made With <Favorite />
			by
			<a href="https://berkinakkaya.dev" target="_blank">Berkin AKKAYA</a>
		</footer>
	)
}

export default Footer