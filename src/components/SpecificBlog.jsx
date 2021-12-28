import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useState } from 'react/cjs/react.development'
import uparrow from "./imgs/uparrow.png"

function SpecificBlog() {
    const serverDomain = "http://localhost:4000/"
    const { id } = useParams()
    const [data, setData] = useState("")

    useEffect(()=>{
        async function getBlog(){
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
        getBlog()
    },[])

    return (
        <div className='content'>
            <div className="blog">
                <button onClick={()=>window.location = "/blog"}><img className='back' src={uparrow} alt="back" /></button>
                <h2 className='date'>{data[0] && data[0].posted_date}</h2>
                <title>{data[0] && data[0].title}</title>
                <h1>{data[0] && data[0].title}</h1>
                <p>{data[0] && data[0].body}</p>
                <p className='halfTransparent'>komentáře ({data[0] && data[0].username ? data.length : "0"})</p>
                <button onClick={()=>window.location = `/blog/${id}/addcomment`} className='plusComment'>+</button>
                <div className={data[0] && data[0].comment_body ? 'comments' : "no"}>
                    {data && data.map((d)=>{
                        console.log(d);
                            return(
                                <div key={d.id} className={d.comment_body && d.comment_body.length < 500 ? 'comment' : "longComment"}>
                                    <h4 className='date'>{d.comment_date}</h4>
                                    <h5>{d.username || "Anonym"}</h5>
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
    