import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const EditForm = (props) => {
    const [tasks, setTasks] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [summaries, setSummaries] = useState([]);
    const [title, setTitle] = useState('');

    const addChecklist = (t) => {
        return (
            <Checklist>

                <input type='checkbox' />
                <input
                    type='text'
                    name='taskData'
                    className='body'
                    placeholder='some-task'
                    value={tasks.value}
                />

            </Checklist>
        )
    }
    const addSummary = (s) => {
        return (
            <Checklist key={Math.random()}>
                <textarea className='body' type='text' placeholder='some-task' />
            </Checklist>
        )
    }
    const addPhoto = (p) => {
        return (
            <Photo key={Math.random()}>
                <img style={{ width: '20%' }} src='https://images.vexels.com/media/users/3/127166/isolated/preview/cc4a01891aceaad3452dc3e81a0d6968-blue-bucket-flat-icon-by-vexels.png' />
            </Photo>
        )
    }
    function handleChange(event) {
        event.preventDefault();
        setTitle({ ...title, [event.target.name]: event.target.value });

    }

    const handleNew_Item = (item, event) => {


        event.preventDefault();

        switch (item) {
            case item = tasks:
                const newTask = {
                    ...tasks,
                    id: Date.now().toPrecision()
                }

                setTasks([...tasks, newTask]);
                break;
            case item = photos:
                const newPhoto = {
                    ...photos,
                    id: Date.now().toPrecision()
                }
                setPhotos([...photos, newPhoto]);
                break;
            case item = summaries:
                const newSummary = {
                    ...summaries,
                    id: Date.now().toPrecision()
                }
                setSummaries([...summaries, newSummary]);
                break;
        }
    }

    const handleSubmit_Bucketlist = (event) => {
        props.setList(
            [
                ...props.bucketList, { title, tasks, photos, summaries }
            ]
        );
    }


    return (<div>
        <FormContainer>
            <FormHeader>
                <div style={{ width: '100%' }}>
                    <EditIcon_ src='http://cliparts101.com/files/875/9C3B0DBCC8676262EBEC94A888EB507E/Minipencilicon.png' />
                    <EditableTitle name='title' onChange={handleChange} value={title.value} placeholder='Bucket List #1'></EditableTitle>
                </div>
                <DropdownButton drop='left' variant='light' title='new'>
                    <Dropdown.Item onClick={event => handleNew_Item(tasks, event)}>New Todo Item</Dropdown.Item>
                    <Dropdown.Item onClick={event => handleNew_Item(photos, event)}>New Photo Item</Dropdown.Item>
                    <Dropdown.Item onClick={event => handleNew_Item(summaries, event)}>New Summary Item</Dropdown.Item>
                </DropdownButton>
            </FormHeader>
            <FormBody>

                <Content>
                    {
                        tasks.map(t => {
                            return (
                                addChecklist(t)

                            )
                        })
                    }

                    {
                        photos.map(p => {
                            return addPhoto(p);
                        })


                    }
                    {
                        summaries.map(s => {
                            return addSummary(s);
                        })


                    }
                </Content>
            </FormBody>
            <Submit>
                <Link onClick={handleSubmit_Bucketlist} to='/dashboard'>
                    <Button_ primary>Save Bucket List?</Button_>
                </Link>
                <Link to='/dashboard'>
                    <Button_> Discard Changes?</Button_>
                </Link>
            </Submit>
        </FormContainer>
    </div>)
}
const FormHeader = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`;
const Submit = styled.div`
    position:fixed;
    margin:1rem;
    bottom:0;
    right:0;

`;
const FormContainer = styled.div`
    display:flex;
    padding:1rem;
    flex-direction:column;
`;
const FormBody = styled.div`
    display:flex;
    flex-direction:row;
`;
const Content = styled.div`
    display:flex;
    width:50%;
    flex-direction:column;
`;
const EditableTitle = styled.input`
border:none;
width:90%;
padding:1rem;
font-size:1.8rem;
`;

const EditIcon_ = styled.img`
    width:20px

`;
const Button_ = styled.button`
    background:${props => props.primary ? "whitesmoke" : "whitesmoke"};
    color: ${props => props.primary ? "dodgerblue" : "dodgerblue"};
    border:none;
    height:50px;
    padding:10px
    border-radius:10px;
    width:fit-content;
    transition: background-color .5s ease-out;

    &:hover{
        background:${props => props.primary ? "dodgerblue" : "magenta"};
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

const Photo = styled.div`

`;
const Checklist = styled.div`
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
        width:100%;
    }
`
export default EditForm;