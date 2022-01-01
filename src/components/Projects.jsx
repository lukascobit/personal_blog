import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development';

function Projects() {
    const serverDomain = "http://localhost:4000/"
    
    const [data, setData] = useState("")

    useEffect(()=>{
        async function getProjects(){
            try {
                const response = await fetch(serverDomain + "projects");
                const jsonData = await response.json();
                setData(jsonData);
                console.log(jsonData);
            } catch (error) {
                console.log(error);
            }
        }
        getProjects()
    },[])

    return (
        <div>
            <title>Projekty</title>
            <h1 className='pageName'>Projekty</h1>
            <div className='content'>
            {
                data && data.map((d)=>{
                    return(
                        <div key={d.id} onClick={()=>window.location = `/projekty/${d.id}`} className='blog'>
                            <h4 className='date'>{d.posted_date}</h4>
                            {console.log(d.link)}
                            <h1><img src={`https://www.google.com/s2/favicons?domain=${d.link}`} alt="icon" className='favicons' />{d.project_name}</h1>
                            <p>{d.body}</p>
                        </div>
                    )
                })
            }

            </div>
        </div>
    )
}

export default Projects
