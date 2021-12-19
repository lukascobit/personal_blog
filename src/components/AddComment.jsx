import React from 'react'
import { useState } from 'react/cjs/react.development'

function AddComment() {
    const [username, setUsername] = useState("")
    const [body, setBody] = useState("")
    function postComment(){
        
    }
    
    return (
        <div className='content'>
            <h1>Add a comment</h1>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} className='username' type="text" placeholder='Your username...' autoFocus={true} /><br />
            <textarea value={body} onChange={(e)=>setBody(e.target.value)} placeholder='Your comment...' name="comment" id="commentTextarea" cols="30" rows="10"></textarea>
            <button onClick={postComment} className='plusComment'>send</button>
        </div>
    )
}

export default AddComment
