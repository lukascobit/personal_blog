import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

import pfp from "./imgs/pfp.jpg"

function Home() {
    const serverDomain = "https://lukas-backend.herokuapp.com/"
    const { id } = useParams()
    const [data, setData] = useState([])
    const [project, setProject] = useState([])


    useEffect(()=>{
        async function getBlog(){
            try {
                const response = await fetch(serverDomain + `blogs`);
                const jsonData = await response.json();
                setData(jsonData.at(-1))
            } catch (error) {
                console.log(error);
            }
        }
        getBlog()
    },[])
    

    useEffect(()=>{
        async function getProject(){
            try {
                const response = await fetch(serverDomain + `projects`);
                const jsonData = await response.json();
                setProject(jsonData.at(-1))
                console.log(jsonData);
            } catch (error) {
                console.log(error);
            }
        }
        getProject()
    },[])

    return (
        <div>
            <title>Lukáš Odehnal</title>
            <div className='content'>
                <h2 className='introduction'> <img className='bigPfp' src={pfp} alt="" />
                <br/> Čau, já jsem Lukáš 
                <br/> Moje projekty mám na svém <a href="https://github.com/lukascobit">Githubu</a>,
                <br/> ty nejzajímavější jsou <a href="/projekty">tady</a></h2>

                <div className="newestStuff">
                    <div onClick={()=>window.location = `/projekty/${project.id}`} className='newestBlog'>
                        <p className='halfTrans'>Nejnovější projekt:</p>
                        <h1>{project && project.project_name}</h1>
                        <h3>{project && project.body}</h3>
                    </div>

                    <div onClick={()=>window.location = `/blog/${data.id}`} className='newestBlog'>
                        <p className='halfTrans'>Nejnovější blog:</p>
                        <h1>{data && data.title}</h1>
                        <h3>{data.body}</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
