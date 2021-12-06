import React from "react";
import './style.css';

const Vyhodnoceni = () => {
    return (
        <main class="main">

		<div class="evaluation">

			<h2 class="evaluation__title">Tvoje hodnocení</h2>

			<div class="evaluation__content">

				<div class="results">

					<div class="result">
						<img class="result__icon" src="../assets/incorrect.svg" alt="špatně"/>

						<div class="result__content">
							<h3 class="result__title">1. Co je ikonická hračka z 80. let?</h3>
							<p class="result__answer">Tvoje odpověď: Kočičák</p>
							<p class="result__answer result__answer--correct">Správná odpověď: Mončičák</p>
						</div>
					</div>

					<div class="results__count">
						Správně máš 2 ze 3 otázek.
					</div>

				</div>

				<div class="success-rate">
					100 %
				</div>

			</div>

		</div>

	</main>
    )
}

export default Vyhodnoceni;