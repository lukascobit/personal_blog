import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState, useRef } from 'react/cjs/react.development';
import fullscreen from './imgs/fullscreen.png'
import exitFull from './imgs/exitFull.png'

function SpecificProject() {
    const [imgSrc, setImgSrc] = useState(fullscreen)
    const [isFullScreen, setIsFullscreen] = useState(false)
    const iframeRef =  useRef()
    const serverDomain = "http://localhost:4000/"
    const { id } = useParams()
    const [data, setData] = useState("")
    useEffect(()=>{
        async function getProject(){
            try {
                const response = await fetch(serverDomain + `projects/${id}`);
                const jsonData = await response.json();
                setData(jsonData[0])
            } catch (error) {
                console.log(error);
            }
        }
        getProject()
    },[])

    function changeFullScreen(){
        if (isFullScreen) {
            iframeRef.current.className = ""
            setImgSrc(fullscreen)
            setIsFullscreen(!isFullScreen)
            return
        }
        iframeRef.current.className = "fullscreenIframe"
        setImgSrc(exitFull)
        setIsFullscreen(!isFullScreen)
    }



    return (
        <div className='content'>
            <title>{data && data.project_name}</title>
            <a className='projectName' href={`https://${data && data.link}`}><h1 className='pageName'>{data && data.project_name}</h1></a>
            <p className='center'>{data && data.body}</p>
            <button onClick={changeFullScreen} className='fullscreenButton'><img className='fullscreenImg' src={imgSrc} alt="" /></button>
            <iframe className='' ref={iframeRef} title={data && data.project_name} src={`https://${data && data.link}`} frameBorder="1"></iframe>
        </div>
    )
}

export default SpecificProject;
