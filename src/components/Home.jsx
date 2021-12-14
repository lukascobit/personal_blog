import React from 'react'
import pfp from "./imgs/pfp.jpg"

function Home() {
    return (
        <div>
            <title>Lukáš Odehnal</title>
            <div className='content'>
                <h2 className='introduction'> <img className='bigPfp' src={pfp} alt="" />
                <br/> Čau, já jsem Lukáš 
                <br/> Moje projekty mám na svém <a href="https://github.com/lukascobit">Githubu</a>,
                <br/> ty nejzajímavější jsou<a href="/projekty"> tady</a></h2>
            </div>
        </div>
    )
}

export default Home
