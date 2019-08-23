import React, {useState} from 'react';
import styled from 'styled-components';

function DashBoard(props){
    const [user, setUser] = useState({});
  //  setUser({...user, [props.user]: user});
    return (
        <div> THIS IS THE DASHBOARD This is whre bucket lists will go
            <div> Shall be where the New Bucket Item button will Be? ⇘</div>

        </div>
    )
}

export default DashBoard;