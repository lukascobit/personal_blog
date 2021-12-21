import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useState } from 'react/cjs/react.development'
import uparrow from "./imgs/uparrow.png"


function SpecificBlog() {
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
            <div className="blog">
                <button onClick={()=>window.location = "/blog"}><img className='back' src={uparrow} alt="back" /></button>
                <h2 className='blogPostedDate'>{data[0] && data[0].posted_date}</h2>
                <title>{data[0] && data[0].title}</title>
                <h1>{data[0] && data[0].title}</h1>
                <p>{data[0] && data[0].body}</p>
                <p className='halfTransparent'>komentáře ({data[0] && data[0].username ? data.length : "0"})</p>
                <button onClick={()=>window.location = `/blog/${id}/addcomment`} className='plusComment'>+</button>
                <div className='comments'>
                    {data && data.map((d)=>{
                            return(
                                <div onClick={()=>window.location = `/blog/1/comment/${d.id}`} className='comment'>
                                    <h5>{d.username || "Anonym"}</h5>
                                    <h4>{d.comment_body}</h4>
                                    <br />
                                    <div className={d.reply_body ? 'reply' : 'no'}>
                                        <h4>{d.reply_username || "Anonym"}</h4>
                                        <h4 className='comment_body'>{d.reply_body}</h4>
                                    </div>
                                </div>
                            )
                    })}
                </div>
            </div>
        
        </div>
    )
}

export default SpecificBlog;
