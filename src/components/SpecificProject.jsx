import React from 'react'
import { useParams } from 'react-router-dom'

function SpecificProject() {
    const {id} = useParams()
    return (
        <div className='content'>
            <title></title>
            <h1 className='pageName'>{id}</h1>
           
        </div>
    )
}

export default SpecificProject;
