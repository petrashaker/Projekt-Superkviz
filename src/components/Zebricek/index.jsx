import React, { useEffect, useState } from "react";

import './style.css';

const Zebricek = () => {
    const [score, setScore] = useState(null);

    const fetchScore = () => {
        fetch('https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/topscore.json')
        .then(response => response.json())
        .then(json => setScore(json))
    }
    useEffect(() => {
        fetchScore();
    }, [])

    return score && (
        <main className="main">
            <div className="topscore">

                <h2 className="topscore__title">Žebříček nejlepších</h2>

                <ul className="topscore__list">

                {score.map((it, id) => 
                 <li className="topscore__item" key={id}>
                    <span className="topscore__name">{it.name}</span>
                    <span className="topscore__score">{it.score} bodů</span>
                 </li>
                    )}
                   
                </ul>

            </div>
        </main>
    )
}

export default Zebricek;