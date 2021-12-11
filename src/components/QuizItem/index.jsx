import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Evaluation from "../Evaluation";
import './style.css';

const QuizItem = () => {
    const {id} = useParams()
    
    const [quizQuestions, setQuizQuestion] = useState(null)
    const [currentQuest, setCurrentQuest] = useState(0)
    const [loading, setLoading] = useState(true)
    const [score, setScore] = useState(0)
    const [optionChoice, setOptionChoice] = useState([])

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quiz/${id}.json`)
        .then(response => response.json())
        .then(json => {
            setQuizQuestion(json.questions)
            setLoading(false)
            })
    }, [])

    const chooseOption = (option) => {
        if(quizQuestions?.[currentQuest].correctAnswer == option) {
            setScore(prevscore => prevscore + 1)
        }
        
        setCurrentQuest(currentQuest + 1)
        setOptionChoice([...optionChoice, option])
    }

    //pokud nebude u return ternární operátor, tzn return quizQuestions &&() můžu použít loading
    if(loading) {
        return <p>Načítám data kvízu</p>
    }

    //pokud bych nepoužila ternární operátor za return
    // if(currentQuest === quizQuestions.length) {
    //     return <Evaluation />
    // }

    return (
        currentQuest === quizQuestions.length 
        ?
        <Evaluation questions={quizQuestions} choice={optionChoice}/>  
        :
        
       <main className="main">

        <div className="question">
            <p className="question__number">Otázka {quizQuestions[currentQuest].id} / {quizQuestions.length}</p>

			<h2 className="question__title">{quizQuestions[currentQuest].title}</h2>

			<div className="question__content">
				<img className="question__image" src={quizQuestions[currentQuest].image} alt="Ilustrační obrázek"/>

                <div className="question__answers">
                    {quizQuestions[currentQuest].answers.map((answer, id) =>
                        <button className="question__answer" key={answer + id} onClick={() => chooseOption(id)}>{answer}</button>
                    )}
                </div>
			</div>
        </div>
		
        </main>
           
    )
}

export default QuizItem;
