import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import Vyhodnoceni from "../Vyhodnoceni";
import './style.css';

const Otazky = ({handleQuiznb}) => {
    const {id} = useParams()
    //console.log(id)
    
    const [quizQuestions, setQuizQuestion] = useState(null)
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quiz/${quiz}.json`) //funguje id i quiz
        .then(response => response.json())
        .then(json => setQuizQuestion(json.questions))
    }, [])
    //console.log(quizQuestions) //celé pole

    //výběr konkrétní otázky dle ID
    const [currentQuest, setCurrentQuest] = useState(0)
    const [score, setScore] = useState(0)
    const [optionChosen, setOptionChosen] = useState()
    const chooseOption = () => {
        setOptionChosen(optionChosen)
    }
    //změna otázky
    const handleNextQuest = (optionChosen) => {

        if(quizQuestions[currentQuest].correctAnswer == optionChosen) {
            setScore(prevScore => prevScore + 1)
        }
        const nextQuestion = currentQuest + 1
        if(nextQuestion < quizQuestions.length) {
            setCurrentQuest(nextQuestion)
        }
        // } else {
        //     <Vyhodnoceni />
        // }
    }
    // const handleNextQuest = (optionChosen) => {
    //     //takto se přičítá, ale vše a vždy, ne správná odpověď, není určen ani index otázky správné odpovědi
    //     if(optionChosen === quizQuestions.correctAnswer) {
    //         setScore(prevScore => prevScore + 1)
    //     }
    //     const nextQuestion = currentQuest + 1
    //     if(nextQuestion < quizQuestions.length) {
    //         setCurrentQuest(nextQuestion)
    //     }
    //     // } else {
    //     //     <Vyhodnoceni />
    //     // }
    // }
    console.log(score)


    const [quizNb, setQuizNb] = useState([1,2,3])
    const quiz = quizNb.find(quiz => quiz == id)
    //console.log(quiz) //vrací číslo kvízu

    //předání čísla kvizu do komponenty Kvízy před App.js
    const changeQuiz = (quiz) => {
        // setQuizNb(quiz) s tímhle aplikace spadne
        handleQuiznb(quiz)
    }
    

    return quizQuestions &&(
        quizQuestions.length ? 
       ( <main className="main">

        <div className="question" onChange={changeQuiz}>
            <p className="question__number">Otázka {quizQuestions[currentQuest].id} / {quizQuestions.length}</p>

			<h2 className="question__title">{quizQuestions[currentQuest].title}</h2>

			<div className="question__content">
				<img className="question__image" src={quizQuestions[currentQuest].image} alt="Ilustrační obrázek"/>

                <div className="question__answers">
                    {quizQuestions[currentQuest].answers.map((answer, id) =>
                        <button className="question__answer" key={answer + id} onClick={() => handleNextQuest(optionChosen)}>{answer}</button>
                    )}
                        {/* <button className="question__answer" key={answer + id} onClick={() => handleNextQuest(quizQuestions.correctAnswer)}>{answer}</button>
                    )} */}
                </div>

			</div>
        </div>
		
        </main>) 
        : <Vyhodnoceni />
    )
}

export default Otazky;
