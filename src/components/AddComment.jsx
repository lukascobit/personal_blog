import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useState } from 'react/cjs/react.development'

function AddComment() {
    const serverDomain = "http://localhost:4000/"
    const { id } = useParams()
    const [username, setUsername] = useState("")
    const [body, setBody] = useState("")
    function postComment(){
        fetch(serverDomain + "blogs/" + id, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            //make sure to serialize your JSON body
            body: JSON.stringify({
                id: id,
                username: username,
                body: body
            })
        })
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
