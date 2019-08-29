import React, { useState } from 'react';
import { Button, FormGroup } from 'react-bootstrap';
import styled from 'styled-components';

function Signup() {
	const [inputValue, setInputValue] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const handleNameChange = event => {
		setInputValue({ ...inputValue, username: event.target.value });
	};

	const handleEmailChange = event => {
		setInputValue({ ...inputValue, email: event.target.value });
	};

	const handlePasswordChange = event => {
		setInputValue({ ...inputValue, password: event.target.value });
	};

	const handlePasswordConfirmChange = event => {
		setInputValue({ ...inputValue, confirmPassword: event.target.value });
	};

	const handleSignup = event => {
		event.preventDefault();
		alert(`Username: ${inputValue.username}, 
        Email: ${inputValue.email},
        Password: ${inputValue.password},
        PasswordConfirm: ${inputValue.confirmPassword}`);
	};

	return (
		<div className='Signup'>
			<form onSubmit={event => handleSubmit(event)}>
				<label>
					Username:
					<input
						type='text'
						name='username'
						onChange={event => handleNameChange(event)}
					/>
				</label>
				<label>
					Email:
					<input
						type='text'
						name='email'
						onChange={event => handleEmailChange(event)}
					/>
				</label>
				<label>
					Password:
					<input
						type='text'
						name='password'
						onChange={event => handlePasswordChange(event)}
					/>
				</label>
				<label>
					Confirm Password:
					<input
						type='text'
						name='confirm password'
						onChange={event => handlePasswordConfirmChange(event)}
					/>
				</label>
				<button>Submit</button>
			</form>
		</div>
	);
}

const Signup = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	h2 {
		color: grey;
	}
	form {
		width: 100%;
	}
	input {
		outline: none;
		margin: 1rem auto;
		text-align: center;
		width: 60%;
		padding: 1rem;

		border: 2px solid lightgray;
		border-radius: 10px;
		@media (max-width: 500px) {
			width: 80%;
		}
	}
	button {
		padding: 10px;
		margin: 1rem auto;
		width: 40%;
		background: dodgerblue;
		color: white;
		@media (max-width: 500px) {
			width: 80%;
		}
	}
	div {
		width: 60%;
		margin: 0 auto;
		p {
			color: grey;
		}
		input {
			width: 100px;
			padding: 0px;
			margin: 0;
		}
	}
`;

export default Signup;
