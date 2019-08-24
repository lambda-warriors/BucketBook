import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const __tasks = [
]


const BucketForm = () => {

    const [tasks, setTasks] = useState(__tasks);

    const addTask = (t) => {
        return (
            <Task key={Math.random()}>
                <input type='checkbox' />
                <input className='body' type='text' placeholder='some-task' />
            </Task>
        )
    }

    const handleNew = (event) => {
        event.preventDefault();
        const newTask = {
            ...tasks,
            id: Date.now().toPrecision()
        }
        setTasks([...tasks, newTask]);
    }

    return (<div>
        <FormContainer>
            <FormHeader>
            <EditIcon_ src='http://cliparts101.com/files/875/9C3B0DBCC8676262EBEC94A888EB507E/Minipencilicon.png' />
            <EditableTitle placeholder='Bucket List #1'></EditableTitle>
            </FormHeader>
            <FormBody>
                <Button_ primary onClick={event => handleNew(event)}>new ToDo</Button_>
                {tasks.map(t => {
                    return addTask(t);
                })}

            </FormBody>
            <div>
                <Link to='/dashboard'>
                    <Button_M primary className='save'>Save Bucket List?</Button_M>
                </Link>
                <Link to='/dashboard'>
                    <Button_M className='discard'>Discard Changes?</Button_M>
                </Link>
            </div>
        </FormContainer>
    </div>)
}
const FormHeader = styled.div`

`;
const FormContainer = styled.div`
    display:flex;
    flex-direction:column;
`;
const FormBody = styled.div`
    display:flex;
    flex-direction:column;
`;

const EditableTitle = styled.input`
border:none;
width:70%;
padding:1rem;
font-size:1.8rem;
`;

const EditIcon_ = styled.img`
    width:20px

`;
const Button_ = styled.button`
    background:${props => props.primary ? "dodgerblue" : "whitesmoke"};
    color: ${props => props.primary ? "whitesmoke" : "dodgerblue"};
    border:none;
    padding:10px
    border-radius:10px;
    width:fit-content;
    transition: background-color .5s ease-out;

    &:hover{
        background:${props => props.primary ? "magenta" : "red"};
        color: ${props => props.primary ? "white" : "white"};
    }

`;
const Button_M = styled.button`
    background:${props => props.primary ? "dodgerblue" : "whitesmoke"};
    color: ${props => props.primary ? "whitesmoke" : "dodgerblue"};
    border:none;
    padding:10px
    border-radius:10px;

    transition: background-color .5s ease-out;

    &:hover{
        background:${props => props.primary ? "magenta" : "red"};
        color: ${props => props.primary ? "white" : "white"};
    }

`;


const Task = styled.div`
display:flex;
align-items:center;
    justify-contnet:flex-start;
    padding:10px;
    width:100%;
    .body{
        resize:vertical;
        overflow: auto;
        padding:1rem;
        margin:0 10px;
        width:60%;
    }
`
export default BucketForm;