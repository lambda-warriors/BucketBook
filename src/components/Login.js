import React, { useState } from 'react';
import { Button, FormGroup } from 'react-bootstrap';
import styled from 'styled-components';

function Login() {
    const [user, setUser] = useState({
        username: "",
        password: ""
    }
    );



    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        alert(`Username: ${user.username}, 
        Password: ${user.password}`);
    };

    return (
        <LoginWindow>
            <form onSubmit={event => handleSubmit(event)}>
                <label hidden> Username:
                    </label>
                <input
                    type="email"
                    name='username'
                    value={user.username}
                    onChange={event => handleChange(event)}
                    placeholder='please enter your email address'
                />
                <label hidden> Password:
                    </label>
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={event => handleChange(event)}
                    placeholder='please enter your password'
                />
                <div>
                    <label><p>stay signed in?</p></label>
                    <input type='checkbox' />
                </div>
                <button type='submit'>Submit!</button>
            </form>
        </LoginWindow>
    );
}

const LoginWindow = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
form{
    width:100%;
}
input{
    outline:none;
    margin:1rem auto;
    text-align:center;
    width:60%;
    padding:1rem;
    
    border:2px solid lightgray;
    border-radius:10px;
    @media(max-width:500px){
        width:80%;
    }
}
button{
    padding:10px;
    margin:1rem auto;
    width:40%;
    background:dodgerblue;
    color:white;
    @media(max-width:500px){
        width:80%;
    }
}
div{
    width:60%;
    margin:0 auto;
    p{
        color:grey;
    }
    input{
        width:100px;
        padding:0px;
        margin:0;
    }
}
`;
export default Login;