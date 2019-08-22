import React from 'react';
import styled from 'styled-components';

const TopBar_ = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    // justify-content:space-between;
    p{
        font-size:1.6rem;
        color:grey;
        padding:10px;
    }
    img{
        width:96px;
    }
   
`;
function TopBar() {

    return (
        <TopBar_ className='TopBar'>
            <img src='https://images.vexels.com/media/users/3/146237/isolated/preview/4d7481767fa748e165ad82ad267195b3-bucket-with-foam-icon-by-vexels.png'/>
            <p>BucketBox</p>
        </TopBar_>

    )
}

export default TopBar;