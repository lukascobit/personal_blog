import React from 'react'

function Projects() {
    const [data, setData] = useState("")

    useEffect(()=>{
        async function getBlogs(){
            try {
                const response = await fetch(serverDomain + "blogs");
                const jsonData = await response.json();
                setData(jsonData);
                console.log(jsonData);
            } catch (error) {
                console.log(error);
            }
        }
        getBlogs()
    },[])
    return (
        <div>
            <title>Projekty</title>
            <h1 className='pageName'>Projekty</h1>
            <div className='content'>
                <div onClick={()=>window.location = `/projekty/${d.id}`} className='project'>
                    <h1>Pexeso</h1>
                    <p>Tohle je pexeso</p>
                </div>
            </div>
        </div>
    )
}

export default Projects
