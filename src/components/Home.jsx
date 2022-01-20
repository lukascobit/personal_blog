import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

import pfp from "./imgs/pfp.jpg"

function Home() {
    const serverDomain = "https://lukas-backend.herokuapp.com/"
    const { id } = useParams()
    const [data, setData] = useState([])


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

    return (
        <div>
            <title>Lukáš Odehnal</title>
            <div className='content'>
                <h2 className='introduction'> <img className='bigPfp' src={pfp} alt="" />
                <br/> Čau, já jsem Lukáš 
                <br/> Moje projekty mám na svém <a href="https://github.com/lukascobit">Githubu</a>,
                <br/> ty nejzajímavější jsou<a href="/projekty"> tady</a></h2>

                <div className='newestProject'>

                </div>
                <div className='newestBlog'>
                    {data && console.log(data)}
                    <h1>{data && data.title}</h1>
                    <h2>{data.body}</h2>
                </div>
            </div>
        </div>
    )
}

export default Home
