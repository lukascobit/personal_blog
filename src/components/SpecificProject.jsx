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
                console.log(response    );
                const jsonData = await response.json();
                console.log(jsonData);
                setData(jsonData)
            } catch (error) {
                console.log(error);
            }
        }
        getProject()
    },[])
    return (
        <div className='content'>
            <title>{data.project_name}</title>
            <h1 className='pageName'>{data.name}</h1>dfs
           
        </div>
    )
}

export default SpecificProject;
