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

	return;

	<div></div>;
}
export default Signup;
