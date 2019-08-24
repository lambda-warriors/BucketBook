import React, { useState } from 'react';
import styled from 'styled-components';
import newBucket from '../img/new-bucket.png'
import BucketList from './BucketList'
import {Link} from 'react-router-dom';
import { Modal, Dropdown } from 'react-bootstrap';


function DashBoard(props, { values, errors, touched, isSubmitting }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //  setUser({...user, [props.user]: user});




    return (
        <Dashboard_>
            <Title>My Bucket Lists: </Title>

            {/* this is where we will put all the new Bucket Lists thta the current user has created
                 */}
            <BucketList />
                 <Link to='/dashboard/new-bucketlist'>
                      <Button_ ><img src={newBucket} /></Button_>
                 </Link>

        </Dashboard_>
    )
}


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