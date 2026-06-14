const button =
document.getElementById(
    "calculateBtn"
);

if(button){

button.addEventListener(
    "click",
    ()=>{

        const hectares =
        Number(
            document.getElementById(
                "hectares"
            ).value
        );

        const economy =
        hectares * 3500;

        document.getElementById(
            "result"
        ).innerHTML =

        `Economia estimada:
        ${economy.toLocaleString()}
        litros de água por ano.`;

    }
);

}