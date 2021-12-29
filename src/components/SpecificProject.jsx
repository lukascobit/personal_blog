import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react/cjs/react.development';

function SpecificProject() {
    const serverDomain = "http://localhost:4000/"
    const { id } = useParams()
    const [data, setData] = useState("")
    useEffect(()=>{
        async function getProject(){
            try {
                const response = await fetch(serverDomain + `projects/${id}`);
                const jsonData = await response.json();
                console.log(jsonData);
                setData(jsonData[0])
            } catch (error) {
                console.log(error);
            }
        }
        getProject()
    },[])
    return (
        <div className='content'>
            <title>{data && data.project_name}</title>
            <a className='projectName' href={`https://${data && data.link}`}><h1 className='pageName'>{data && data.project_name}</h1></a>
            <p className='center'>{data && data.body}</p>
            
            <iframe src={`https://${data && data.link}`} frameborder="1"></iframe>
        </div>
    )
}

export default SpecificProject;
