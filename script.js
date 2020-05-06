var menu;
async function timestamp(){
    bruh = window.location.toString();
    bro = await fetch(bruh).then(result =>result.text()).then(text=>text);
    adbreaksindex = bro.indexOf("ad_breaks");
    adbreaksplusright = bro.substring(adbreaksindex);
    adbreaksstring = adbreaksplusright.substring(adbreaksplusright.indexOf("["), adbreaksplusright.indexOf("]")+1);
    if(adbreaksplusright.indexOf("]") - adbreaksplusright.indexOf("[") == 1){
        return -69;
    }
    return parseInt(JSON.parse(adbreaksstring)[1]["offset"]);
}
function playerloaded(){
    if(window.VILOS_PLAYERJS == undefined){
        window.setTimeout(playerloaded,100); 
    }
}
function isReady(){
   if(window.VILOS_PLAYERJS.isReady == false){
    window.setTimeout(isReady,100);
   }
}
function fuck(fml){
    if(fml == 0){
        window.setTimeout(bruh, 100);
    }
    else{
            timestamp().then(bro => {
                if(bro == -69){
                    alert("this feature is not supported on the FIRST episode of some animes");
                }
                if(fml<bro/1000){
                    window.VILOS_PLAYERJS.setCurrentTime(bro/1000);
                }
            });
    }
}
function bruh(){
    window.VILOS_PLAYERJS.getCurrentTime(fuck);
}
playerloaded();
isReady();
menu = document.getElementsByClassName("showmedia-submenu white-wrapper cf container-shadow small-margin-bottom")[0];
let twitter = document.getElementsByClassName("twitter")[0];
twitter.style.marginRight = "12px";
let span = document.createElement("span");
span.classList.add("left");
span.classList.add("facebook")
let button = document.createElement("button");
button.textContent = "Skip Intro";
button.style.height = "20px";
button.style.color = "white";
button.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
button.style.border = "1px solid white";
button.style.padding = "2px 5px 15px";
button.style.borderRadius = "3px";
button.style.cursor = "pointer";
button.addEventListener("click", bruh);
span.appendChild(button);
menu.appendChild(span);