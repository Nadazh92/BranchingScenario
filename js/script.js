

// -------------------scenario---------------

// const allBtns = document.querySelectorAll(".stage .btn");
// const allStages = document.querySelectorAll(".stage");


// function scenario(e) {
//     console.log(e.target.textContent);
//     const btnContent = e.target.textContent;

//     if (btnContent === "Start") {
//         let personName= document.querySelector("#pname").value;
//         // console.log(personName);
//         let emil= document.querySelector("#emil").value;
//         // console.log(emil);
//             if (personName === "" ||  emil === ""){
//                 // console.log("Error");
//                  document.getElementById("eror").innerText="Please Indtast dit navn og din email";
//              }
//             else if(personName.length < 2){
//                      document.getElementById("eror").innerText="Indtast din navn";
                
//              }else if(!emil.includes("@") && !emil.includes(".")){
//                         document.getElementById("eror").innerText="E-mail er ugyldig";

//                 }else{
//                 document.getElementById("welcome").innerHTML=`Velkommen ${personName}, til testen`;
//                 allStages[0].classList.remove("active");
//                  allStages[1].classList.add("active");}

//     } else if (btnContent === "Brug åbent WiFi uden VPN") {
//         allStages[1].classList.remove("active");
//         allStages[2].classList.add("active");

//     } else if (btnContent === "Log ind uden at tænke") {
//         allStages[2].classList.remove("active");
//         allStages[3].classList.add("active");

//     } else if (btnContent === "Brug VPN") {
//         allStages[2].classList.remove("active");
//         allStages[4].classList.add("active");

//     } else if (btnContent === "Tjek Netværk") {
//         allStages[1].classList.remove("active");
//         allStages[5].classList.add("active");

//     } else if (btnContent === "Vælg det første") {
//         allStages[5].classList.remove("active");
//         allStages[6].classList.add("active");

//     } else if (btnContent === "Spørg personalet") {
//         allStages[5].classList.remove("active");
//         allStages[7].classList.add("active");

//     } else if (btnContent === "Undgå WiFi") {
//         allStages[5].classList.remove("active");
//         allStages[8].classList.add("active");

//     } else if (btnContent === "Brug Hotspot") {
//         allStages[1].classList.remove("active");
//         allStages[9].classList.add("active");

//     } else if (btnContent === "Start Forfra") {
//         allStages[0].classList.remove("active");
//         allStages[2].classList.remove("active");
//         allStages[3].classList.remove("active");
//         allStages[4].classList.remove("active");
//         allStages[5].classList.remove("active");
//         allStages[6].classList.remove("active");
//         allStages[7].classList.remove("active");
//         allStages[8].classList.remove("active");
//         allStages[9].classList.remove("active");
//         allStages[1].classList.add("active");

//     } else  if(btnContent === "Tilbage"){
//         allStages[3].classList.remove("active");
//         allStages[4].classList.remove("active");
//         allStages[2].classList.add("active");

//     } else  if(btnContent === "tilbage"){
//         allStages[6].classList.remove("active");
//         allStages[7].classList.remove("active");
//         allStages[8].classList.remove("active");
//         allStages[5].classList.add("active");

//     }else {
        
//         console.log("Error");
//     }

// }


// for (btn of allBtns) {
//     btn.addEventListener("click", scenario);
// }


// ------------navigationen-------------
// const bars = document.querySelector("#bars");

// const openNav = () => {
//     document.querySelector("header > nav > ul").classList.toggle("show");
//     document.querySelector("#bars i").classList.toggle("fa-bars");
//     document.querySelector("#bars i").classList.toggle("fa-xmark");
// }

// bars.addEventListener("click", openNav);


// --------------test2 side------------------

const allButtons = document.querySelectorAll(".level .bttn");
const alLevels = document.querySelectorAll(".level");
const main = document.querySelector(".main-test2");

function updateContent(h2Text,btnText,pText, faClasses){

const nydiv=document.createElement("div");
nydiv.classList.add("level", "activee");


const h2 = document.createElement("h2");
h2.textContent=h2Text;
h2.classList.add("welcome");
nydiv.append(h2);

pText.forEach(text =>{
const p = document.createElement("p");
p.textContent=text;
nydiv.append(p);
});



btnText.forEach(text => {
    const button=document.createElement("button");
    button.textContent=text;
    button.classList.add("bttn");
    button.addEventListener("click", test);
    nydiv.append(button);  
});



main.replaceChildren(nydiv);
}





function test (e){

    const bttnContent=e.target.textContent;
    let h2Text,btnText,pText, faClasses;

    switch(bttnContent){

        case "Start":
             let personName= document.querySelector("#pname").value;
        // console.log(personName);
              let emil= document.querySelector("#emil").value;
        // console.log(emil);
            if (personName === "" ||  emil === ""){
                // console.log("Error");
                 document.getElementById("eror").innerText="Please Indtast dit navn og din email";
                 return;
             }
            else if(personName.length < 2){
                     document.getElementById("eror").innerText="Indtast din navn";
                     return;
                
             }else if(!emil.includes("@") || !emil.includes(".")){
                        document.getElementById("eror").innerText="E-mail er ugyldig";
                        return;

                }else{
                    h2Text=`Velkommen ${personName}, til testen`;
                    pText= ["Du sidder på en café og arbejder på en vigtig studieopgave.",
                            "Du har tre forskellige muligheder for at få adgang til internettet.Hvilken vælger du?"
                        ];
                    btnText=["Brug åbent WiFi uden VPN","Tjek Netværk","Brug Hotspot"];  }
                    
            break;
        default:console.log("Error");
}

updateContent(h2Text,btnText,pText, faClasses);

}


for (let bttn of allButtons) {
    bttn.addEventListener("click", test);
}
