import React, { useEffect,  useState } from 'react'
import loading from "./imgs/loading.gif"
import { useParams } from 'react-router-dom'



function SpecificBlog() {
    const serverDomain = "https://lukas-backend.herokuapp.com/"
    const { id } = useParams()
    const [data, setData] = useState([])

    useEffect(()=>{
        async function getBlog(){
            try {
                const response = await fetch(serverDomain + `blogs/${id}`);
                const jsonData = await response.json();
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
            <div className="specificB0log">
                <h2 className='date'>{data[0] && data[0].posted_date}</h2>
                <title>{data[0] && data[0].title}</title>

                <article className='SpecifigBlogBody'>
                    <h1>{data[0] && data[0].title}</h1>
                    <p>{data[0] && data[0].body}</p>
                </article>
                
                <p className='halfTransparent'>komentáře:</p>
                <button onClick={()=>window.location = `/blog/${id}/addcomment`} className='plusComment'>+</button>
                <div className={data[0] && data[0].comment_body ? 'comments' : "no"}>
                    {data && data.map((d)=>{
                            return(
                                <div key={d.comment_id} className={d.comment_body && d.comment_body.length < 150 ? 'comment' : "longComment"}>
                                    <h4 className='date'>{d.comment_date}</h4>
                                    <h5>{d.username || "Anonym"}</h5>
                                    <h4>{d.comment_body}</h4>
                                </div>
                            )
                    })}
                </div>
            </div>
            <img src={!data ? loading : undefined   } alt="" className="spinner" />
                    
        </div>
    )
}

export default SpecificBlog;
    