

// --------------test2 side------------------

const allButtons = document.querySelectorAll(".level .bttn");
const alLevels = document.querySelectorAll(".level");
const main = document.querySelector(".main-test2");

function updateContent(h2Text,btnText,pText){

const nyDiv=document.createElement("div");
nyDiv.classList.add("level", "activee");

// if (h2Text != undefined){
// const h2 = document.createElement("h2");
// h2.textContent=h2Text;
// h2.classList.add("welcome");
// nyDiv.append(h2);}


if (h2Text != undefined){
    if (h2Text === "Pas På!"){
 const h2 = document.createElement("h2");
 h2.textContent=h2Text;
 h2.classList.add("paspå");
 nyDiv.append(h2);}
        else if(h2Text === "Ups et usikkert vælg!") {
             const h2 = document.createElement("h2");
            h2.textContent = h2Text;
            h2.classList.add("ops");
            nyDiv.append(h2);}
            else if(h2Text === "Et godt og sikkert valg"){
                    const h2 = document.createElement("h2");
                 h2.textContent=h2Text;
                 h2.classList.add("godtvælg");
                nyDiv.append(h2);}
        
                else {
                  const h2 = document.createElement("h2");
                  h2.textContent=h2Text;
                  h2.classList.add("welcome");
                  nyDiv.append(h2); }   
    }

const p = document.createElement("p");
p.innerHTML=pText;
nyDiv.append(p);


btnText.forEach(text => {
    const button=document.createElement("button");
    button.textContent=text;
    // button.classList.add("bttn");
    button.classList.add("bttn");
    button.addEventListener("click", test);
    nyDiv.append(button);  
});



main.replaceChildren(nyDiv);
}



function test (e){

    const bttnContent=e.target.textContent;
    let h2Text,btnText,pText;
     
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
                    pText= "Du sidder på en café og arbejder på en vigtig studieopgave. <br> <br> Du har tre forskellige muligheder for at få adgang til internettet.Hvilken vælger du?";
                    btnText=["Brug åbent WiFi uden VPN","Tjek Netværk","Brug Hotspot"];  }
                    
            break;

            case "Brug åbent WiFi uden VPN":
                pText="Du er nu online og logger ind på din skolekonto.";
                btnText=["Log ind uden at tænke","Brug VPN"];
                break;

            case "Log ind uden at tænke":
                h2Text="Ups et usikkert vælg!";
                pText="Du logger ind på et falsk netværk. En hacker opsnapper dine loginoplysninger <br><br> <span>Feedback:</span> offentlige WiFi kan være usikre , sær uden kryptering";
                btnText=["Start Forfra","Tilbage"];
                break;

            case "Brug VPN":
                h2Text="Pas På!";
                pText="Du bruger WiFi, men undgår følsomme oplysninger. <br> <br> <span>Feedback:</span> du reducerede risikoen, men forbindelsen er stadig usikker.";
                btnText=["Start Forfra","Tilbage"];
                break;

            case "Tjek Netværk":
                pText="Du opdager flere netværk med lignende navne:  <br> <br> Cafe_Free_WiFi / Cafe_Free_WiFi_5G /  Cafe_Free_WiFi_FREE";
                btnText=["Vælg det første","Spørg personalet","Undgå WiFi"];
                break;

            case "Vælg det første":
                h2Text="Ups et usikkert vælg!";
                pText="Du vælger det første netværk uden at undersøge den. <br> Dine loginoplysninger kan blive opsnappet af en hacker <br> <br> <span>Feedback:</span> Du bør altid verificere netværket, før du forbinder";
                btnText=["Start Forfra","tilbage"];
                break;

            case "Spørg personalet":
                h2Text="Pas På!";
                pText="Du forbinder til det rigtig WiFi, men forbindelsen er stadig ikke helt sikker  <br> <br> <span>Feedback:</span> Undgå at logge ind på følsomme konti uden ekstra beskyttelse";
                btnText=["Start Forfra","tilbage"];
                break;
            case "Undgå WiFi":
                h2Text="Et godt og sikkert valg";
                pText="Du vælger at undgå det offentlige WiFi og bruger i stedet en mere sikker forbindelse  <br> <br> <span>Feedback:</span> At undgå usikre netværk er den bedste måde at beskytte dine oplysninger på";
                btnText=["Start Forfra","tilbage"];
                break;
            case "Brug Hotspot":
                h2Text="Et godt og sikkert valg";
                pText="Du bruger hotspot eller verificeret netværk.Dine data er sikre. <br> <br> <span>Feedback:</span> du tog et sikkert valg og beskyttede dine data.";
                btnText=["Start Forfra"];
                break;
            case "Start Forfra":
                pText= "Du sidder på en café og arbejder på en vigtig studieopgave <br> <br> Du har tre forskellige muligheder for at få adgang til internettet.Hvilken vælger du?";
                btnText=["Brug åbent WiFi uden VPN","Tjek Netværk","Brug Hotspot"]; 
                break;
            case "Tilbage":
                pText="Du er nu online og logger ind på din skolekonto.";
                btnText=["Log ind uden at tænke","Brug VPN"];
                break;

            case "tilbage":
                pText="Du opdager flere netværk med lignende navne: <br> <br> Cafe_Free_WiFi / Cafe_Free_WiFi_5G /  Cafe_Free_WiFi_FREE";
                btnText=["Vælg det første","Spørg personalet","Undgå WiFi"];
                break;
            default:console.log("Error");

}

updateContent(h2Text,btnText,pText);

}


for (let bttn of allButtons) {
    bttn.addEventListener("click", test);
}

// ------------navigationen-------------
const bars = document.querySelector("#bars");

const openNav = () => {
    document.querySelector("header > nav > ul").classList.toggle("show");
    document.querySelector("#bars i").classList.toggle("fa-bars");
    document.querySelector("#bars i").classList.toggle("fa-xmark");
}

bars.addEventListener("click", openNav);
