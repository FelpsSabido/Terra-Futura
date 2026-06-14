const quizButtons =
document.querySelectorAll(
    ".quiz-option"
);

quizButtons.forEach(btn=>{

    btn.addEventListener(
        "click",
        ()=>{

            const result =
            document.getElementById(
                "quiz-result"
            );

            if(
                btn.innerText ===
                "Drone"
            ){

                result.innerHTML =
                "✅ Resposta correta!";

                result.style.color =
                "#4ade80";

            }

            else{

                result.innerHTML =
                "❌ Resposta incorreta.";

                result.style.color =
                "#ff6b6b";

            }

        }
    );

});