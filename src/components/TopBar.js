import React from 'react';
import styled from 'styled-components';


function TopBar() {
    
    return (
        <TopBar_ className='TopBar'>
            <img src='https://images.vexels.com/media/users/3/127166/isolated/preview/cc4a01891aceaad3452dc3e81a0d6968-blue-bucket-flat-icon-by-vexels.png'/>
            <p>Bucket<span>Book</span></p>
        </TopBar_>

    )
}
const TopBar_ = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    padding:1rem;
    // justify-content:space-between;
    p{
        font-size:1.9rem;
        color:grey;
        span{
            font-size:1.1rem;
        }
    }
    img{
        width:50px;
        height:50px;
    }
   
`;
export default TopBar;