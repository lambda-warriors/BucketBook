import React from 'react';
import styled from 'styled-components';

const TopBar_ = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    background:dodgerblue;
    justify-content:space-between;
    box-shadow:0px 6px 8px rgba(0,0,0,.4);
    p{
        font-size:1.6rem;
        color:white;
        padding:10px;
    }
    div{
        margin:10px;
        width:50px;
        height:50px;
        background:rgba(0,0,0,.2);
        border-radius:10px;
        border:2px solid rgba(0,0,0,.6);
    }
`;
function TopBar() {

    return (
        <TopBar_ className='TopBar'>
            <div ></div>
            <p>BucketBox</p>
            <div></div>
        </TopBar_>

    )
}

export default TopBar;