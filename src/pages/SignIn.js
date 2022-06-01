import "./SignIn.scss"
import React, { useState } from 'react'
import { useStateValue } from '../state/StateProvider';
import { LoadingButton } from '@mui/lab';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Stack, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { ChevronRight, Visibility, VisibilityOff } from '@mui/icons-material';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function SignIn() {
	// if login type == #register, make register pane enabled. Otherwise login pane should be enabled.
	const initialPageType = window.location.hash === '#register' ? 'register' : 'login';

	const [state] = useStateValue();
	const [pageType, setPageType] = useState(initialPageType);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState('');
	const [submitButtonLoading, setSubmitButtonLoading] = useState(false);
	const navigate = useNavigate();

	if (state.user) {
		navigate("/");
	}

	const IsValidMail = mail => {
		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(mail)
	}

	const CanSubmitForm = () => {
		return IsValidMail(email) && password.length > 5;
	}

	const SubmitWithEnter = e => {
		if (e.key === 'Enter' && CanSubmitForm()) {
			SubmitForm();
		}
	}

	const SubmitForm = () => {
		if (pageType === 'login') {
			Login(email, password);
		} else {
			Register(email, password)
		}
	}

	const Login = async (email, password) => {
		setSubmitButtonLoading(true);
		try {
			const authResponse = await auth.signInWithEmailAndPassword(email, password);

			console.log(authResponse);

			if (authResponse) {
				// TODO: Show Success Alert
				navigate("/");
			}
		} catch (error) {
			// TODO: Show Error Alert
			alert(error.message || "An error occured, couldn't create account...");
		}
		setSubmitButtonLoading(false);
	}

	const Register = async (email, password) => {
		setSubmitButtonLoading(true);
		try {
			const authResponse = await auth.createUserWithEmailAndPassword(email, password);

			if (authResponse) {
				// TODO: Show Success Alert
				navigate("/");
			}
		} catch (error) {
			// TODO: Show Error Alert
			alert(error.message || "An error occured, couldn't create account...");
		}
		setSubmitButtonLoading(false);
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
					{/* E-Mail */}
					<TextField
						label="E-Mail"
						variant="outlined"
						type="email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						onKeyDown={SubmitWithEnter}
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
							error={password.length > 0 && password.length <= 5}
							onChange={e => { setPassword(e.target.value) }}
							onKeyDown={SubmitWithEnter}
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

				<LoadingButton
					variant="contained"
					endIcon={<ChevronRight />}
					color="success"
					onClick={SubmitForm}
					disabled={!CanSubmitForm()}
					loading={submitButtonLoading}
				>
					{pageType === 'login' ? 'Login' : 'Create'}
				</LoadingButton>
			</Paper>
		</main>
	)
}

export default SignIn