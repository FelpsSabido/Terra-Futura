const states =
document.querySelectorAll(
    ".state"
);

const info =
document.getElementById(
    "state-info"
);

const data = {

    pr:"Paraná: destaque em soja, milho e tecnologia agrícola.",

    sp:"São Paulo: liderança em cana-de-açúcar e inovação.",

    mt:"Mato Grosso: maior produtor de grãos do Brasil."

};

states.forEach(state=>{

    state.addEventListener(
        "click",
        ()=>{

            info.innerHTML =
            data[state.id];

        }
    );

});