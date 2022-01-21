import React, {useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import fullscreen from './imgs/fullscreen.png'
import exitFull from './imgs/exitFull.png'
import loading from "./imgs/loading.gif"


function SpecificProject() {
    const [imgSrc, setImgSrc] = useState(fullscreen)
    const [isFullScreen, setIsFullscreen] = useState(false)
    const iframeRef =  useRef()
    const serverDomain = "https://lukas-backend.herokuapp.com/"
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
            <a title='Přejít na stránku' className='projectName' href={`https://${data && data.link}`}><h1 className='pageName'>{data && data.project_name}</h1></a>
            <p className='center'>{data && data.body}</p>
            <button title='Přepnout na celou obrazovku' onClick={changeFullScreen} className='fullscreenButton'><img className='fullscreenImg' src={imgSrc} alt="" /></button>
            <iframe className='' ref={iframeRef} title={data && data.project_name} src={`https://${data && data.link}`} frameBorder="1"></iframe>

            <img src={!data && loading} alt="" className="spinner" />

        </div>
    )
}

export default SpecificProject;
