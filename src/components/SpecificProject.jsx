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
                setData(jsonData)
                if(jsonData.length === 0){
                    window.location = "/blog"
                }
            } catch (error) {
                console.log(error);
            }
        }
        getProject()
    },[])
    return (
        <div className='content'>
            <title></title>
            <h1 className='pageName'>{id}</h1>
           
        </div>
    )
}

export default SpecificProject;
