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
                        <div onClick={()=>window.location = `/projekty/${d.id}`} className='blog'>
                            <h1>Pexeso</h1>
                            <p>Tohle je pexeso</p>
                        </div>
                    )
                })
            }

            </div>
        </div>
    )
}

export default Projects
