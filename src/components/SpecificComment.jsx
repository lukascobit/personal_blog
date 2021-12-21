import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react/cjs/react.development';

function SpecifiComment() {
    const serverDomain = "http://localhost:4000/"
    const { id } = useParams()
    const [data, setData] = useState("")

    useEffect(()=>{
        async function getBlogs(){
            try {
                const response = await fetch(serverDomain + `blogs/${id}`);
                const jsonData = await response.json();
                console.log(jsonData);
                setData(jsonData)
                if(jsonData.length === 0){
                    window.location = "/blog"
                }
            } catch (error) {
                console.log(error);
            }
        }
        getBlogs()
    },[])

    return (
        <div className='content'>
            <div onClick={()=>window.location = `/blog/1/comment/${data.id}`} className='comment'>
                <h5>{data.username || "Anonym"}</h5>
                <h4>{data.comment_body}</h4>
                <h4>{data.posted_date}</h4>
                <br />
                <div className={data.reply_body ? 'reply' : 'no'}>
                    <h4>{data.reply_username || "Anonym"}</h4>
                    <h4 className='comment_body'>{data.reply_body}</h4>
                </div>
            </div>
        </div>
    )
}

export default SpecifiComment
