window.onload = function () {
    const button = document.querySelector("button");
    var size = document.querySelector('input[name="size"]');
    var height = document.querySelector('input[name="height"]');

    

    const an = document.querySelector(".an");
    const n = document.querySelector(".n");
    const ep = document.querySelector(".ep");
    const oi = document.querySelector(".oi");
    const oii = document.querySelector(".oii");
    const oiii = document.querySelector(".oiii");

    button.addEventListener("click", () => {
            var peso = height.value;
            var altura = size.value/100;
            var result = (peso/(altura*altura));
            console.log(result)

            an.style.backgroundColor = 'rgb(83, 53, 74)';
            n.style.backgroundColor = 'rgb(83, 53, 74)';
            ep.style.backgroundColor = 'rgb(83, 53, 74)';
            oi.style.backgroundColor = 'rgb(83, 53, 74)';
            oii.style.backgroundColor = 'rgb(83, 53, 74)';
            oiii.style.backgroundColor = 'rgb(83, 53, 74)';
            
            if(result < 18.5){
                an.style.backgroundColor = 'red';
            }
            if(result >= 18.5 && result < 25){
                n.style.backgroundColor = 'green';
            }
            if(result >= 25 && result < 30){
                ep.style.backgroundColor = 'darkgoldenrod';
            }
            if(result >= 30 && result < 35){
                oi.style.backgroundColor = 'orange';
            }
            if(result >= 35 && result < 40){
                oii.style.backgroundColor = 'brown';
            }
            if(result > 40){
                oiii.style.backgroundColor = 'darkred';
            }
        }
    )

    

}