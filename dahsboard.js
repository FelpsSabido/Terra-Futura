const counters =
document.querySelectorAll(
    ".metric-card h3"
);

const speed = 100;

function animateCounter(){

    counters.forEach(counter=>{

        const target =
        +counter.innerText;

        let count = 0;

        const update = ()=>{

            const increment =
            target / speed;

            if(count < target){

                count += increment;

                counter.innerText =
                Math.floor(count);

                requestAnimationFrame(
                    update
                );

            }

            else{

                counter.innerText =
                target;

            }

        };

        update();

    });

}

window.addEventListener(
    "load",
    animateCounter
);