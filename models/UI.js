export class UI {
    constructor(){}

showQuestion(text) {
const questionTitle = document.getElementById(`question`);
questionTitle.innerText = text;
           
        }
    
        showChoices(choices, callback) {
           const choices1 = document.getElementById("choices");
           choices1.innerHTML = ``;
           for (let i = 0; i < choices.length; i++) {
            const button = document.createElement(`button`);
            button.innerText = choices[i];
            button.className = "button"
            button.addEventListener(`click`, () => callback(choices[i]));

            choices1.append(button);

           }

        }

        showScores(score){
            const quizEndHTML = `
                <h1>FINALIZADO!<h1/>
                <h2>RESULTADO: ${score}<h2/>
            `
            const button1 = document.createElement(`button`)
            const element = document.getElementById(`quiz`);
            element.innerHTML = quizEndHTML;
        }

        showProgress(currentIndex, total) {
            const element = document.getElementById(`progress`);
            element.innerHTML = `Pregunta ${currentIndex} de ${total}`;
        }
}