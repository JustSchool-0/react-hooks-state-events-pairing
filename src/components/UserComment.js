import React from 'react';

function UserComment({username, content}) {
    return (
        <div className="comment-container">
            <h3>{username}</h3>
            <p>{content}</p>
        </div>
    )
}

export default UserComment;