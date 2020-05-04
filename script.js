async function timestamp(){
    bruh = window.location.toString();
    bro = await fetch("https://crunchyroll-skip-intro.herokuapp.com/offset?url=" + bruh).then(result=>result.text()).then(text=>text);
    return bro
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
bruh();
