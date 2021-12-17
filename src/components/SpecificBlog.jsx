import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useState } from 'react/cjs/react.development'
const serverDomain = "http://localhost:4000/"


function SpecificBlog() {
    const { id } = useParams()
    const [data, setData] = useState("")

    useEffect(()=>{
        async function getBlogs(){
            try {
                const response = await fetch(serverDomain + `blogs/${id}`);
                const jsonData = await response.json();
                console.log(jsonData);
                setData(jsonData)
            } catch (error) {
                console.log(error);
            }
        }
        getBlogs()
    },[])


    return (
        <div className='content'>
            <div onClick={()=>window.location = `/blog/${data[0].id}`} className="blog">
                <h1>{data && data[0].title}</h1>
                <h2 className='blogPostedDate'>{data && data[0].posted_date}</h2>
                <p>{data && data[0].body}</p>
                <p className='halfTransparent'>comments</p>
                <div className='comments'>
                    {data && data.map((d)=>{
                            return(
                                <div className='comment'>
                                    <h4>{d.comment_body}</h4>
                                </div>
                            )
                    })}
                </div>
            </div>
        
        </div>
    )
}

export default SpecificBlog;
