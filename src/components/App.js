import React, {useState} from 'react';
import video from "../data/video.js";
import CommentSection from "./CommentSection";

function App() {
    console.log("Here's your data:", video);

    const [upvotes, setUpvotes] = useState(video.upvotes);
    const [downvotes, setDownvotes] = useState(video.downvotes);

    const handleUpvote = () => {
        setUpvotes(upvotes + 1);
    }
    const handleDownvote = () => {
        setDownvotes(downvotes + 1);
    }

    const [showComments, setShowComments] = useState(true);
    const toggleComments = () => {
        setShowComments(!showComments);
    }

    return (
        <div className="App">
            <iframe
                width="919"
                height="525"
                src={video.embedUrl}
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <div>
                <button onClick={handleUpvote}>{upvotes} 👍</button>
                <button onClick={handleDownvote}>{downvotes} 👎</button>
            </div>
            <button onClick={toggleComments}>{showComments ? 'Hide Comments' : 'Show Comments'}</button>
            {showComments && (
                <CommentSection comments={video.comments} count={video.comments.length}/>
            )}
        </div>
    );
}

export default App;