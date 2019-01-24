import React from "react";
import styled from "styled-components";

const StyledFriend = styled.div`
    border: 1px solid black;
    margin: 20px;
`

function Friend(props) {
    return(
        <StyledFriend>
            <div>{props.friend.name}</div>
            <div>age: {props.friend.age}</div>
            <div>email: {props.friend.email}</div>
            <button onClick={(e) => props.deleteFriend(e, props.friend.id)} >Delete Friend</button>
        </StyledFriend>
    )
}

export default Friend;