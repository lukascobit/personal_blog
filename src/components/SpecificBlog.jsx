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
                setData(jsonData[0])
            } catch (error) {
                console.log(error);
            }
        }
        getBlogs()
    },[])


    return (
        <div className='content'>
            <div onClick={()=>window.location = `/blog/${data.id}`} className="blog">
                <h3>{data.title}</h3>
                <h3 className='blogPostedDate'>{data.posted_date}</h3>
                <p>{data.body}</p>
            </div>
        </div>
    )
}

export default SpecificBlog;
