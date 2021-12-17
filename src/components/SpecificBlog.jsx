import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

function SpecificBlog() {
    const { id } = useParams()
    return (
        <div className='content'>
            <h1>{id}</h1>
        </div>
    )
}

export default SpecificBlog
