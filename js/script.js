// ------------navigationen-------------
// const bars = document.querySelector("#bars");

// const openNav = () => {
//     document.querySelector("header > nav > ul").classList.toggle("show");
//     document.querySelector("#bars i").classList.toggle("fa-bars");
//     document.querySelector("#bars i").classList.toggle("fa-xmark");
// }

// bars.addEventListener("click", openNav);


// -------------------scenario---------------

const allBtns=document.querySelectorAll(".stage .btn");
const allStages=document.querySelectorAll(".stage");

function scenario(e){
    console.log(e.target.textContent);
    const btnContent=e.target.textContent;

    if(btnContent==="Brug åbent WiFi uden VPN"){
        allStages[0].classList.remove("active");
        allStages[1].classList.add("active");

    }else if (btnContent==="Log ind uden at tænke"){
            allStages[1].classList.remove("active");
            allStages[2].classList.add("active");

    } else if (btnContent==="Brug VPN"){
                allStages[1].classList.remove("active");
                allStages[3].classList.add("active");

    } else if (btnContent==="Tjek Netværk"){
                allStages[0].classList.remove("active");
                allStages[4].classList.add("active");

    } else if (btnContent==="Brug Hotspot"){
                 allStages[0].classList.remove("active");
                 allStages[5].classList.add("active");

    } else if (btnContent==="Start Forfra") {
                    allStages[2].classList.remove("active");
                    allStages[3].classList.remove("active");
                    allStages[5].classList.remove("active");
                    allStages[0].classList.add("active");
               
    } else {
        console.log("Error");

    }
}

for (btn of allBtns){
    btn.addEventListener("click", scenario);
}