import React, { useEffect, useState } from 'react'

const serverDomain = "http://localhost:4000/"


function Blog() {
    const [data, setData] = useState("")

    useEffect(()=>{
        async function getBlogs(){
            try {
                const response = await fetch(serverDomain + "blogs");
                const jsonData = await response.json();
                setData(jsonData);
                console.log(jsonData);
            } catch (error) {
                console.log(error);
            }
        }
        getBlogs()
    },[])

    return (
        <div>
            <title>Blog</title>
            <h1 className='pageName'>Blog</h1>
            {
                data && data.map((d)=>{
                    return(
                        <div onClick={()=>window.location = `/blog/${d.id}`} className="blog">
                            <h3 className='blogPostedDate'>{d.posted_date}</h3>
                            <h3>{d.title}</h3>
                            <p>{d.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Blog
