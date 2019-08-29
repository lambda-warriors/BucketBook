import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from 'styled-components';

var isLoggedIn = false;

function LoginForm({ history, values, errors, touched, isSubmitting }) {

  console.log(isLoggedIn);
  return (
    <LoginWindow>
      <h2>Travel, Share, Together</h2>
      <Form>
        <div>
          {touched.email && errors.email && <p>{errors.email}</p>}
          <Field className='input' type="email" name="email" placeholder="Email" />
        </div>
        <div>
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field className='input' type="password" name="password" placeholder="Password" />
        </div>
        <div className='signed-in'>
          <Field type="checkbox" name="signed" checked={values.signed} />
          Stay Signed in?
      </div>
        <button type='submit'
         onClick={
          () =>
            setTimeout(() => {
              isLoggedIn ? history.push('/dashboard') : alert('please log in to Continue')
            }, 550)
        } disabled={isSubmitting} className='sign-in' >Submit</button>
        <button className='sign-up' >Sign Up</button>
      </Form>
    </LoginWindow>
  );
}

const Login = withFormik({
  mapPropsToValues({ email, password, signed }) {
    return {
      email: email || "",
      password: password || "",
      signed: signed || false
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting, localStorage }) {
    if (values.email === "alreadytaken@atb.dev") {
      setErrors({ email: "That email is already taken" });
    } else {
      axios
        .post("https://bucket-list-be.herokuapp.com/api/login", values)
        .then(res => {
          isLoggedIn=true;
          console.log(res);
          // console.log(res.data);
          window.localStorage.setItem('token', res.data.token)
          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          isLoggedIn = false;
          console.log(err); 
          setSubmitting(false);
        });
    }
  }
})(LoginForm);


const LoginWindow = styled.div`
min-height:85vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h2{
    color:grey;
}
form{
    width:100%;
}
.input{
    outline:none;
    margin:1rem auto;
    text-align:center;
    width:60%;
    padding:1rem;
    border:none;
    box-shadow:2px 4px 5px rgba(0,0,0,.2);
    border-radius:10px;
    background:whitesmoke;
    @media(max-width:500px){
        width:80%;
    }
}
.sign-in{
    transition: background-color .5s ease-out;
    &:hover {
        background:dodgerblue;
        cursor: pointer;
      }
}
.sign-up{
    transition: background-color .5s ease-out;
    &:hover {
        background:magenta;
        cursor: pointer;
      }
}
button{
    background:rgba(255,255,255,.5);
    padding:10px;
    margin:1rem auto;
    // width:30%;
    color:grey;
    border:none;
    border-radius:10px;
    &:hover{
        color:white;
    }
    @media(max-width:500px){
        width:80%;
    }
}
.signed-in{
    width:60%;
    margin:0 auto;
    text-align:end;
    p{
        color:grey;
    }
    input{
        width:100px;
        padding:0px;
        margin:0;
    }
}
p{
    margin:0;
    color:red;
}
`;
export default Login;