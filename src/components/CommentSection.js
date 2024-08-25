import React from 'react';
import UserComment from "./UserComment";

function CommentSection({comments, count}) {
    let i = 0;
    const elements = comments.map(comment => (
        <UserComment key={i++} username={comment.user} content={comment.comment}/>
    ));
    return (
        <div className="comment-section">
            <h2>{count} Comments</h2>
            {elements}
        </div>
    )
}

export default CommentSection;