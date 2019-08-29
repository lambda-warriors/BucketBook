import React from 'react';
import styled from 'styled-components';


const BucketItem = (props) => {
    return (
        <Card>
            <p>{props.title}</p>
        </Card>
    )
}

const Card = styled.div`
    margin:1rem;
    background:white;
    padding:2rem;
    width:30%;
    box-shadow:2px 4px 5px rgba(0,0,0,.2);
`;

export default BucketItem;