import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import './style.css';

const Otazky = () => {
    const {id} = useParams()

    const [otazky, setOtazky] = useState(null)
    const [quizNb, setQuizNb] = useState([1, 2, 3])
    // console.log(quizNb)

    const quiz = quizNb.find(quiz => quiz.id == id)

    const fetchOtazky = () => {
        fetch('https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quiz/1.json')
        // fetch(`https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quiz/${id}.json`)
        .then(response => response.json())
        .then(json => setOtazky(json))
    }

    useEffect(() => {
        fetchOtazky()
    }, [])
    console.log(otazky)

    const [question, setQuestion] = useState()
    const nextQuestion = () => {
        setQuestion (otazky.questions + 1)
    }
    console.log(question)

    return otazky &&(
        <main className="main">

        {otazky.questions.map(it => 
        <div className="question" key={it.id}>
            <p className="question__number">Otázka {it.id} / {otazky.questions.length}</p>

			<h2 className="question__title">{it.title}</h2>

			<div className="question__content">
				<img className="question__image" src={it.image} alt="Ilustrační obrázek"/>

                <div className="question__answers">
                    {it.answers.map((answer, id) =>
                        <button className="question__answer" key={answer + id} onClick={nextQuestion}>{answer}</button>
                    )}
                </div>

			</div>
        </div>)}

		
        </main>

    )
}

export default Otazky;