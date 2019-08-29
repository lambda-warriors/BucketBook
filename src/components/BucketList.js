import React, { useState } from 'react';
import styled from 'styled-components';
import BucketItem from './BucketItem';

const BucketList = (props) => {

    //this is where we will pull in the bucket data that is created from the dashboard
    // will likely use axios to pull it once it is made
    function createBucketLists(b) {
        return (

            <BucketItem key={Date.now().toPrecision()} title={b.title.title} />


        )
    }

    return (
        <Container_>
            {props.bucketList.map(b => {
                return createBucketLists(b);
            })}
        </Container_>)
}
const Container_ = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    width:100%;
`;
export default BucketList;