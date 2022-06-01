import "./SignIn.scss"
import React, { useState } from 'react'
import { useStateValue } from '../state/StateProvider';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Stack, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { ChevronRight, Visibility, VisibilityOff } from '@mui/icons-material';

function SignIn() {
	const [state] = useStateValue();
	const [pageType, setPageType] = useState('login');
	const [email, setEmail] = useState('');
	const [fullname, setFullname] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState('');

	const IsValidMail = mail => {
		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(mail)
	}

	const CanSubmitForm = () => {
		return IsValidMail(email) && password.length > 3 && (pageType !== 'register' || !!fullname);
	}

	const SubmitForm = () => {
		console.log(pageType, fullname, email, password);
	}

	return (
		<main>
			<ToggleButtonGroup
				color="primary"
				value={pageType}
				exclusive
				onChange={e => setPageType(e.target.value)}
			>
				<ToggleButton value="login">Use Existing Account</ToggleButton>
				<ToggleButton value="register">Create New Account</ToggleButton>
			</ToggleButtonGroup>

			<Paper elevation={4} id="box">
				<h2>{pageType === 'login' ? 'Login' : 'Register'}</h2>

				<Stack spacing={2} id="form">
					{
						/* Name & Surname if creating a new account */
						pageType !== 'login' ?
							<TextField
								label="Name & Surname"
								variant="outlined"
								type="text"
								onChange={e => setFullname(e.target.value)}
								value={fullname}
							/>
							: ''
					}

					{/* E-Mail */}
					<TextField
						label="E-Mail"
						variant="outlined"
						type="email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						error={!!email && !IsValidMail(email)}
					/>

					{/* Password */}
					<FormControl variant="outlined">
						<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
						<OutlinedInput
							id="outlined-adornment-password"
							label="Password"
							type={showPassword ? 'text' : 'password'}
							value={password}
							error={password.length > 0 && password.length <= 3}
							onChange={e => { setPassword(e.target.value) }}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={() => setShowPassword(!showPassword)}
										onMouseDown={() => setShowPassword(!showPassword)}
										edge="end"
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
						/>
					</FormControl>
				</Stack>

				<Button variant="contained" endIcon={<ChevronRight />} color="success" onClick={SubmitForm} disabled={!CanSubmitForm()}>
					{pageType === 'login' ? 'Login' : 'Create'}
				</Button>
			</Paper>
		</main>
	)
}

export default SignIn