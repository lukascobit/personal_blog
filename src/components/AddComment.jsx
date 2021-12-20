import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useState } from 'react/cjs/react.development'

function AddComment() {
    const serverDomain = "http://localhost:4000/"
    const { id } = useParams()
    const [username, setUsername] = useState("")
    const [body, setBody] = useState("")
    const [errorCode, setErrorCode] = useState("")
    async function postComment(){
        if(!username || !body ){
            setErrorCode("Both the username and the comment have to be filled!")
            return
        }
        await fetch(serverDomain + "blogs/" + id, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                body: body
            })
        })
        window.location = `/blog/${id}`
    }
    
    return (
        <div className='content'>
            <h1>Add a comment</h1>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} className='username' type="text" placeholder='Your username...' autoFocus={true} /><br />
            <textarea value={body} onChange={(e)=>setBody(e.target.value)} placeholder='Your comment...' name="comment" id="commentTextarea" cols="30" rows="10"></textarea>
            <button onClick={postComment} className='plusComment'>send</button>
            <h3 className='error'>{errorCode}</h3>
        </div>
    )
}

export default AddComment
