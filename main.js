/* ==========================
   TERRAFUTURA MAIN JS
========================== */

document.addEventListener("DOMContentLoaded", () => {

    const reveals =
    document.querySelectorAll(".reveal");

    function revealOnScroll(){

        const trigger =
        window.innerHeight * 0.85;

        reveals.forEach(item => {

            const top =
            item.getBoundingClientRect().top;

            if(top < trigger){

                item.classList.add("active");

            }

        });

    }

    window.addEventListener(
        "scroll",
        revealOnScroll
    );

    revealOnScroll();

});

/* CURSOR GLOW */

const glow =
document.querySelector(
    ".cursor-glow"
);

document.addEventListener(
    "mousemove",
    (e)=>{

        if(!glow) return;

        glow.style.left =
        e.clientX + "px";

        glow.style.top =
        e.clientY + "px";

    }
);
const stateInfo = document.getElementById("state-info");
const estados = {

    "BR-AC": {
        nome: "Acre",
        agricultura: "Mandioca, banana e café.",
        sustentabilidade: "Manejo florestal sustentável e extrativismo responsável.",
    },

    "BR-AL": {
        nome: "Alagoas",
        agricultura: "Cana-de-açúcar, coco e mandioca.",
        sustentabilidade: "Recuperação de áreas degradadas e conservação do solo.",
    },

    "BR-AM": {
        nome: "Amazonas",
        agricultura: "Mandioca, guaraná e frutas regionais.",
        sustentabilidade: "Preservação da floresta amazônica e bioeconomia.",
    },

    "BR-AP": {
        nome: "Amapá",
        agricultura: "Mandioca e frutas tropicais.",
        sustentabilidade: "Proteção das reservas naturais e biodiversidade.",
    },

    "BR-BA": {
        nome: "Bahia",
        agricultura: "Soja, algodão, cacau e frutas.",
        sustentabilidade: "Irrigação eficiente e agricultura de precisão.",
    },

    "BR-CE": {
        nome: "Ceará",
        agricultura: "Caju, coco e frutas tropicais.",
        sustentabilidade: "Uso racional da água e tecnologias para o semiárido.",
    },

    "BR-DF": {
        nome: "Distrito Federal",
        agricultura: "Soja, milho e hortaliças.",
        sustentabilidade: "Tecnologias agrícolas sustentáveis.",
    },

    "BR-ES": {
        nome: "Espírito Santo",
        agricultura: "Café, pimenta-do-reino e cacau.",
        sustentabilidade: "Proteção de nascentes e reflorestamento.",
    },

    "BR-GO": {
        nome: "Goiás",
        agricultura: "Soja, milho e cana-de-açúcar.",
        sustentabilidade: "Integração lavoura-pecuária.",
    },

    "BR-MA": {
        nome: "Maranhão",
        agricultura: "Soja, arroz e mandioca.",
        sustentabilidade: "Expansão agrícola sustentável.",
    },

    "BR-MG": {
        nome: "Minas Gerais",
        agricultura: "Café, leite e milho.",
        sustentabilidade: "Manejo sustentável do solo e preservação hídrica.",
    },

    "BR-MS": {
        nome: "Mato Grosso do Sul",
        agricultura: "Soja, milho e pecuária.",
        sustentabilidade: "Produção agropecuária de baixo carbono.",
    },

    "BR-MT": {
        nome: "Mato Grosso",
        agricultura: "Soja, milho e algodão.",
        sustentabilidade: "Agricultura de precisão e conservação ambiental.",
    },

    "BR-PA": {
        nome: "Pará",
        agricultura: "Açaí, cacau e mandioca.",
        sustentabilidade: "Bioeconomia e reflorestamento.",
    },

    "BR-PB": {
        nome: "Paraíba",
        agricultura: "Cana-de-açúcar e frutas.",
        sustentabilidade: "Gestão eficiente dos recursos hídricos.",
    },

    "BR-PE": {
        nome: "Pernambuco",
        agricultura: "Cana-de-açúcar, uva e manga.",
        sustentabilidade: "Tecnologias de irrigação sustentável.",
    },

    "BR-PI": {
        nome: "Piauí",
        agricultura: "Soja, milho e algodão.",
        sustentabilidade: "Expansão agrícola com responsabilidade ambiental.",
    },

    "BR-PR": {
        nome: "Paraná",
        agricultura: "Soja, milho, trigo e feijão.",
        sustentabilidade: "Integração lavoura-pecuária e agricultura de precisão.",
    },

    "BR-RJ": {
        nome: "Rio de Janeiro",
        agricultura: "Cana-de-açúcar e hortaliças.",
        sustentabilidade: "Proteção da Mata Atlântica.",
    },

    "BR-RN": {
        nome: "Rio Grande do Norte",
        agricultura: "Melão, manga e caju.",
        sustentabilidade: "Uso eficiente da água no semiárido.",
    },

    "BR-RO": {
        nome: "Rondônia",
        agricultura: "Café, soja e pecuária.",
        sustentabilidade: "Recuperação de áreas degradadas.",
    },

    "BR-RR": {
        nome: "Roraima",
        agricultura: "Arroz, milho e mandioca.",
        sustentabilidade: "Proteção dos ecossistemas amazônicos.",
    },

    "BR-RS": {
        nome: "Rio Grande do Sul",
        agricultura: "Arroz, soja e trigo.",
        sustentabilidade: "Conservação do solo e dos recursos hídricos.",
    },

    "BR-SC": {
        nome: "Santa Catarina",
        agricultura: "Milho, soja, maçã e suínos.",
        sustentabilidade: "Produção agropecuária sustentável.",
    },

    "BR-SE": {
        nome: "Sergipe",
        agricultura: "Laranja, coco e cana-de-açúcar.",
        sustentabilidade: "Preservação dos recursos naturais.",
    },

    "BR-SP": {
        nome: "São Paulo",
        agricultura: "Cana-de-açúcar, café e laranja.",
        sustentabilidade: "Tecnologias para redução do consumo de água.",
    },

    "BR-TO": {
        nome: "Tocantins",
        agricultura: "Soja, milho e arroz.",
        sustentabilidade: "Expansão agrícola com preservação ambiental.",
    }

};
Object.keys(estados).forEach(id => {

    const estado = document.getElementById(id);

    if (!estado) return;

    estado.addEventListener("click", () => {

        document.querySelectorAll("path").forEach(path => {
            path.classList.remove("estado-selecionado");
        });

        estado.classList.add("estado-selecionado");

        stateInfo.innerHTML = `
            <div class="state-card">
                <h3>${estados[id].nome}</h3>

                <p>
                    <strong>Agricultura:</strong><br>
                    ${estados[id].agricultura}
                </p>

                <p>
                    <strong>Sustentabilidade:</strong><br>
                    ${estados[id].sustentabilidade}
                </p>
            </div>
        `;
    });

});
stateInfo.innerHTML = `
    <div class="state-card">

        <h3>📍 ${estados[id].nome}</h3>

        <div class="info-item">
            <span>🌾</span>
            <div>
                <h4>Produção Agrícola</h4>
                <p>${estados[id].agricultura}</p>
            </div>
        </div>

        <div class="info-item">
            <span>🌱</span>
            <div>
                <h4>Sustentabilidade</h4>
                <p>${estados[id].sustentabilidade}</p>
            </div>
        </div>

        <div class="info-item">
            <span>🚜</span>
            <div>
                <h4>Tecnologia</h4>
                <p>Agricultura moderna e práticas inovadoras para aumentar a produtividade.</p>
            </div>
        </div>

    </div>
`;