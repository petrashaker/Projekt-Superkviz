import React from "react";
import './style.css';

import wrong from '../../assets/incorrect.svg';
import right from '../../assets/correct.svg';

const Evaluation = ({questions, choice}) => {
    let correctAnswers = 0;
	questions.forEach((q, id) => {
		if(q.answers[choice[id]] === q.answers[q.correctAnswer]) {
			correctAnswers++;
		}
	})

	return questions && (
        <main className="main">
		<div className="evaluation">

			<h2 className="evaluation__title">Tvoje hodnocení</h2>

			<div className="evaluation__content">

				<div className="results">

						{questions?.map((q, id) => 
							<div className="result" key={id}>
								<img className="result__icon" 
									src={q.answers[choice[id]] === q.answers[q.correctAnswer] ? right : wrong } 
									alt="result-icon"
								/>
								<div className="result__content" >
									<h3 className="result__title">{id + 1}. {q.title}</h3>
									<p className="result__answer">Tvoje odpověď: {q.answers[choice[id]]}</p>
									{q.answers[choice[id]] !== q.answers[q.correctAnswer] &&
										<p className="result__answer result__answer--correct">
											Správná odpověď: {q.answers[q.correctAnswer]}
										</p>
									}
								</div>
							</div>
							)
						}
				
					<div className="results__count">
						Správně máš {correctAnswers} {questions.length > 4 ? "z" : "ze"} {questions.length} otázek.
					</div>

				</div>

				<div className="success-rate">
					{Math.round(correctAnswers / questions.length * 100)}%
				</div>

			</div>

		</div>

	</main>
    )
}

export default Evaluation;