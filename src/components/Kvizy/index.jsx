import React, { useEffect, useState } from "react";
import './style.css';

import { useNavigate, useParams } from "react-router";
import { Link, Outlet, Switch, useRouteMatch } from "react-router-dom";



const Kvizy = ({quiznb}) => {
    // let { path, url } = useRouteMatch();

    const [quizes, setQuizes] = useState(null);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quizes.json')
        .then(response => response.json())
        .then(json => setQuizes(json))
    }, [])
    console.log(quizes)
    
    const navigate = useNavigate()
    const handleClick = () => {
        // setQuizNb(quiznb)
        navigate(`${quiznb}`)         
    }

    // const handleClick = () => {
    //     setQuizNb(quiznb)
    // }

    return quizes && ( 
        <main className="main">

            <div className="quiz-list">

            
            {/* {quizes.map((it, key) =>  
            <div className="quiz-item" key={key}>
                <img className="quiz-item__image" src={it.image} alt={it.title}/>
                <div className="quiz-item__content">
                    <h2 className="quiz-item__title">{it.title}</h2>
                    <p className="quiz-item__questions">{it.questions}</p>
                    <Link className="quiz-item__link" to={`${url}/otazky `}>Spustit kvíz</Link>
                    <Switch>

                    </Switch>
                </div>
            </div>)}
            <Outlet /> */}

            {quizes.map(it =>  
            <div className="quiz-item" key={it.id}>
                <img className="quiz-item__image" src={it.image} alt={it.title}/>
                <div className="quiz-item__content">
                    <h2 className="quiz-item__title">{it.title}</h2>
                    <p className="quiz-item__questions">Počet otázek: {it.questions}</p>
                    <a className="quiz-item__link" onClick={handleClick}>Spustit kvíz</a>
                </div>
            </div>)}
            <Outlet />
   

            </div>


	    </main>
    )
}

export default Kvizy;

// import React, { useEffect, useState } from "react";
// import './style.css';

// const Kvizy = () => {

//     const [quizes, setQuizes] = useState(null);

//     const fetchQuizes = () => {
//         fetch('https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quizes.json')
//         .then(response => response.json())
//         .then(json => setQuizes(json))
//     }
//     useEffect(() => {
//         fetchQuizes();
//     }, [])

//     return quizes && ( 
//         <main className="main">

//             <div className="quiz-list">

//             {quizes.map((it, id) =>  
//             <div className="quiz-item" key={id}>
//                 <img className="quiz-item__image" src={it.image} alt="Mončičák"/>
//                 <div className="quiz-item__content">
//                     <h2 className="quiz-item__title">{it.title}</h2>
//                     <p className="quiz-item__questions">{it.questions}</p>
//                     <a className="quiz-item__link" href="#">Spustit kvíz</a>
//                 </div>
//             </div>)}
   

//             </div>


// 	    </main>
//     )
// }

// export default Kvizy;