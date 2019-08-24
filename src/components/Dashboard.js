import React, { useState } from 'react';
import styled from 'styled-components';
import newBucket from '../img/new-bucket.png'
import BucketList from './BucketList'

import { Modal, Dropdown } from 'react-bootstrap';

function DashBoard(props, { values, errors, touched, isSubmitting }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //  setUser({...user, [props.user]: user});



    const [tasks, setTasks] = useState([]);

    var showBucketList = (task) => {
        return (
            <>HA I DID IT</>
        )
    }

    const handleTraditional = (event) => {

    }

    return (
        <Dashboard_>
            <Title>My Bucket Lists: </Title>

            {/* this is where we will put all the new Bucket Lists thta the current user has created
                 */}
            <BucketList />

            <Button_ onClick={handleShow}><img src={newBucket} /></Button_>
            
            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title><EditableTitle placeholder='Bucket List #1' />
                        <EditIcon_ src='http://cliparts101.com/files/875/9C3B0DBCC8676262EBEC94A888EB507E/Minipencilicon.png' />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <button onClick={handleTraditional}>add</button>
                    {
                        tasks.map(task => {
                            return showBucketList(
                                <p>HEY  BOSS</p>
                            )
                        })
                    }

                </Modal.Body>
                <Modal.Footer>
                    <Button_M primary className='save'>Save Bucket List?</Button_M>
                    <Button_M className='discard'>Discard Changes?</Button_M>
                </Modal.Footer>
            </Modal>


        </Dashboard_>
    )
}

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
const EditableTitle = styled.input`
border:none;
`;
const EditIcon_ = styled.img`
    width:20px

`;
const Title = styled.h2`
    color:grey;
    width:100%;
    text-align:start;
    border-bottom:1px dashed grey;
    padding:1rem;
  
`;
const Dashboard_ = styled.div`
    display:flex;
    flex-direction:column;
    margin:0 auto;
    width:95%;
    background:whitesmoke;
    padding:10px;
    
    
`
const Button_ = styled.button`
    position:fixed;
    bottom:12px;
    right:12px;
    background:whitesmoke;
    transition:background-color .5s ease-out;
    border-radius:50%;
    padding:10px;
    border:none;
    box-shadow:2px 4px 6px rgba(0,0,0,.2);
    &:focus {outline:0;}
    img{
        width:50px;
        height:50px;
    }
    &:hover{
        background:dodgerblue;
    }
`;

export default DashBoard;