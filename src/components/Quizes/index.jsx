import React, { useEffect, useState } from "react";
import './style.css';

import { NavLink} from "react-router-dom";

const Quizes = ({quiznb, id}) => {
    const [quizes, setQuizes] = useState(null)

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quizes.json')
        .then(response => response.json())
        .then(json => 
            setQuizes(json))
    }, [])

    return quizes && ( 
        <main className="main">

            <div className="quiz-list">

            {quizes.map(it =>  
            <div className="quiz-item" key={it.id}>
                <img className="quiz-item__image" src={it.image} alt={it.title}/>
                <div className="quiz-item__content">
                    <h2 className="quiz-item__title">{it.title}</h2>
                    <p className="quiz-item__questions">Počet otázek: {it.questions}</p>
                    <NavLink className="quiz-item__link" to={`/kvizy/${it.id}`}>Spustit kvíz</NavLink>
                </div>
            </div>)} 
   

            </div>


	    </main>
    )
}

export default Quizes;