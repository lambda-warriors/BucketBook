import React, {useState} from 'react';
import styled from 'styled-components';
import BucketItem from './BucketItem';

const BucketList = (props) => {

    //this is where we will pull in the bucket data that is created from the dashboard
    // will likely use axios to pull it once it is made
    const [buckets, setBuckets] = useState([]);

    function createNewBucketListTile(item){
        return <BucketItem/>
    }

    return (<Container_>
        {buckets.map(bucket =>{
            return createNewBucketListTile(bucket);
        })}
    </Container_>)
}
const Container_ = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    
`;
export default BucketList;