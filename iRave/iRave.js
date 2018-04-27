/*----GLOBAL VARIABLES----*/
//is the screen on?
var active = false;
//is the menu expanded?
var isExpandedMenu = false;
//what menu are we in?
var currMenu = "mainMenu";

/*----Is user following----*/
var subToBand1 = false;
var subToBand2 = false;
var subToBandX = false;
var subToBandY = false;
var subToBandALPHA = false;
var subToBandBETA = false;
/*----Number of followers----*/
var band1 = 123;
var band2 = 456;
var bandX = 234;
var bandY = 567;
var bandALPHA = 543;
var bandBETA = 243;


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    h = checkTime(h);
    m = checkTime(m);
    document.getElementById('clock').innerHTML ="<b>" + h + ":" + m + "</b>";
    document.getElementById('hour').innerHTML = h;
    document.getElementById('minute').innerHTML = m;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

/*HIDE AND SHOW FUNCTIONS*/
/*---------------------Start----------------------------*/
function hideClock(){
    document.getElementById("clock").style.visibility = "hidden";
    document.getElementById("clockBackground").style.visibility = "hidden";
}

function showClock(){
    /*document.getElementById("clock").style.visibility = "visible";
    document.getElementById("clockBackground").style.visibility = "visible";*/
}

function hideTime(){
    document.getElementById("hour").style.visibility = "hidden";
    document.getElementById("minute").style.visibility = "hidden";

}

function showTime(){
    document.getElementById("hour").style.visibility = "visible";
    document.getElementById("minute").style.visibility = "visible";

}

function hideHelpIcon(){
    document.getElementById("help").style.visibility = "hidden";
}

function showHelpIcon(){
    document.getElementById("help").style.visibility = "visible";
}

function hideHelpText(){
    document.getElementById("helpText").style.visibility = "hidden";
}

function showHelpText(){
    document.getElementById("helpText").style.visibility = "visible";
}

function hideMainMenu(){
    document.getElementsByClassName("mainMenu")[0].style.visibility = "hidden";
}

function showMainMenu(){
    document.getElementsByClassName("mainMenu")[0].style.visibility = "visible";
}

function showInfoMenu(){
    document.getElementById("infoMenu").style.visibility = "visible";
}

function hideInfoMenu(){
    document.getElementById("infoMenu").style.visibility = "hidden";
}

function showCartazMenu(){
   document.getElementById("cartazMenu").style.visibility = "visible";
}

function hideCartazMenu(){
   document.getElementById("cartazMenu").style.visibility = "hidden";
}

function showBandMenu(nr){
    switch(nr){
        case 1:
            document.getElementById("palco1Bands").style.visibility = "visible";
            break;
        case 2:
            document.getElementById("palco2Bands").style.visibility = "visible";
            break;
        case 3:
            document.getElementById("palco3Bands").style.visibility = "visible";
            break;
        default:
            //console.log("try me");
    }
}

function hideBandMenu(){
    switch(currMenu){
        case "palco1Menu":
            document.getElementById("palco1Bands").style.visibility = "hidden";
            break;
        case "palco2Menu":
            document.getElementById("palco2Bands").style.visibility = "hidden";
            break;
        case "palco3Menu":
            document.getElementById("palco3Bands").style.visibility = "hidden";
            break;
        default:
            //console.log("try me");
    }
}

function showBandPage(band){
     switch(band){
        case 'band1':
            document.getElementById("band1Page").style.visibility = "visible";
            if(subToBand1){
                document.getElementById("bellBand1").style.visibility = "hidden";
                document.getElementById("ringBellBand1").style.visibility = "visible";
            }else{
                document.getElementById("bellBand1").style.visibility = "visible";
                document.getElementById("ringBellBand1").style.visibility = "hidden";
            }
            break;
        case 'band2':
            document.getElementById("band2Page").style.visibility = "visible";
            if(subToBand2){
                document.getElementById("bellBand2").style.visibility = "hidden";
                document.getElementById("ringBellBand2").style.visibility = "visible";
            }else{
                document.getElementById("bellBand2").style.visibility = "visible";
                document.getElementById("ringBellBand2").style.visibility = "hidden";
            }
            break;
        case 'bandX':
            document.getElementById("bandXPage").style.visibility = "visible";
            if(subToBandX){
                document.getElementById("bellBandX").style.visibility = "hidden";
                document.getElementById("ringBellBandX").style.visibility = "visible";
            }else{
                document.getElementById("bellBandX").style.visibility = "visible";
                document.getElementById("ringBellBandX").style.visibility = "hidden";

            }
            break;
        case 'bandY':
            document.getElementById("bandYPage").style.visibility = "visible";
            if(subToBandY){
                document.getElementById("bellBandY").style.visibility = "hidden";
                document.getElementById("ringBellBandY").style.visibility = "visible";
            }else{
                document.getElementById("bellBandY").style.visibility = "visible";
                document.getElementById("ringBellBandY").style.visibility = "hidden";

            }
            break;
        case 'bandALPHA':
            document.getElementById("bandALPHAPage").style.visibility = "visible";
            if(subToBandALPHA){
                document.getElementById("bellBandALPHA").style.visibility = "hidden";
                document.getElementById("ringBellBandALPHA").style.visibility = "visible";
            }else{
                document.getElementById("ringBellBandALPHA").style.visibility = "hidden";
                document.getElementById("bellBandALPHA").style.visibility = "visible";
            }
            break;
        case 'bandBETA':
            document.getElementById("bandBETAPage").style.visibility = "visible";
            if(subToBandBETA){
                document.getElementById("bellBandBETA").style.visibility = "hidden";
                document.getElementById("ringBellBandBETA").style.visibility = "visible";
            }else{
                document.getElementById("ringBellBandBETA").style.visibility = "hidden";
                document.getElementById("bellBandBETA").style.visibility = "visible";
            }
            break;
        default:
            //console.log("impossible to get here!");
    }
}

function hideBandPage(){
     switch(currMenu){
        case 'band1':
            document.getElementById("band1Page").style.visibility = "hidden";
            document.getElementById("ringBellBand1").style.visibility = "hidden";
            document.getElementById("bellBand1").style.visibility = "hidden";
            break;
        case 'band2':
            document.getElementById("band2Page").style.visibility = "hidden";
            document.getElementById("ringBellBand2").style.visibility = "hidden";
            document.getElementById("bellBand2").style.visibility = "hidden";
            break;
        case 'bandX':
            document.getElementById("bandXPage").style.visibility = "hidden";
            document.getElementById("ringBellBandX").style.visibility = "hidden";
            document.getElementById("bellBandX").style.visibility = "hidden";
            break;
        case 'bandY':
            document.getElementById("bandYPage").style.visibility = "hidden";
            document.getElementById("ringBellBandY").style.visibility = "hidden";
            document.getElementById("bellBandY").style.visibility = "hidden";
            break;
        case 'bandALPHA':
            document.getElementById("bandALPHAPage").style.visibility = "hidden";
            document.getElementById("ringBellBandALPHA").style.visibility = "hidden";
            document.getElementById("bellBandALPHA").style.visibility = "hidden";
            break;
        case 'bandBETA':
            document.getElementById("bandBETAPage").style.visibility = "hidden";
            document.getElementById("ringBellBandBETA").style.visibility = "hidden";
            document.getElementById("bellBandBETA").style.visibility = "hidden";
            break;
        default:
            //console.log("impossible to get here!");
    }
}
function showWeatherMenu(){
    document.getElementById("tempo").style.visibility = "visible";
}

function hideWeatherMenu(){
   document.getElementById("tempo").style.visibility = "hidden";
}

function showInfoGeralMenu(){
    document.getElementById("infogeral").style.visibility = "visible";
}

function hideInfoGeralMenu(){
   document.getElementById("infogeral").style.visibility = "hidden";
}
/*----------------------End-----------------------------*/

function changeVisibility() {
    //console.log("iahiauÃ§ghs+ouguhe+gohA\najfnaejf\n\n"+active);
    //console.log(currMenu);
    if(active){
        hideTime();
        hideInfoMenu();
        hideBandPage();
        hideBandMenu();
        hideCartazMenu();
        hideMainMenu();
        hideWeatherMenu();
        hideInfoGeralMenu();
        hideHelpIcon();
        hideHelpText();
        active = false;
    }else{
        if(currMenu == "mainMenu"){
            showTime();
            showMainMenu();
        }else if(currMenu === "infoMenu"){
            showHelpIcon();
            showInfoMenu();
        }else if(currMenu === "cartazMenu"){
            showCartazMenu();
        }else if(currMenu === "palco1Menu" ){
            showBandMenu(1);
        }else if(currMenu === "palco2Menu"){
            showBandMenu(2);
        }else if(currMenu === "palco3Menu"){
            showBandMenu(3);
        }else if(currMenu === "band1" || currMenu === "band2" || currMenu === "bandX" || currMenu === "bandY" || currMenu === "bandALPHA" || currMenu === "bandBETA"){
            showBandPage(currMenu);
        }else if(currMenu === "infoGeralMenu"){
            showInfoGeralMenu();
        }else if(currMenu === "weatherMenu"){
            showWeatherMenu();
        }else if(currMenu === "helpMenu"){
            showHelpText();
        }
        active=true;

    }
}

function upaupa(element){

    var elem = document.getElementById(element);
    var table = document.getElementsByClassName("mainMenu")[0];
    var food = document.getElementById("food");
    var social = document.getElementById("social");
    var info = document.getElementById("info");
    //console.log(elem.id);
    if(isExpandedMenu && elem.id === "info"){
        //console.log("hi");
        //takes care of the transition
        goToInfoMenu();
        showHelpIcon();
        //console.log("abrir cartaz/info geral/meteo");

    }else if(isExpandedMenu){
        ; // PARA AS OUTRAS FUNCIONALIDADES AINDA NAO IMPLEMENTADAS
    }else{
        var scale = 0;
        var id = setInterval(frame,5);
        function frame(){
            if (scale == 11){
                clearInterval(id);
                hideTime();
                showClock();
                //console.log("upa");
            } else {
                food.style.width = 2.6 + scale*(7.7/10) +'em';
                food.style.height = 2.6 + scale*(7.4/10) +'em';
                social.style.width = 2.6 + scale*(7.7/10) +'em';
                social.style.height = 2.6 + scale*(7.4/10) +'em';
                info.style.width = 2.6 + scale*(7.7/10) +'em';
                info.style.height = 2.6 + scale*(7.4/10) +'em';
                table.style.top =  10 -(scale)*(5/10)+'%';
                table.style.left =  57-(scale)*(39/10) +'%';
                if(elem.id == "social")
                    table.scroll(0, scale*(164/10));
                if(elem.id == "info")
                    table.scroll(0, scale*(341/10));
                scale++;
                isExpandedMenu = true;
            }
        }
        document.getElementsByClassName("mainMenu")[0].scrolling = "yes";
    }
}


function resetUpaUpa(){
    var food = document.getElementById("food");
    var social = document.getElementById("social");
    var info = document.getElementById("info");
    //console.log("\n\n"+currMenu+"\n\n");

    var table = document.getElementsByClassName("mainMenu")[0];

    if(currMenu === "mainMenu"){
        if(isExpandedMenu && table.style.visibility == "invisible"){
            food.style.width = 2.6 +'em';
            food.style.height = 2.6 +'em';
            social.style.width = 2.6 +'em';
            social.style.height = 2.6 +'em';
            info.style.width = 2.6 +'em';
            info.style.height = 2.6 +'em';
            table.style.top =  12 +'%';
            table.style.left =  46 +'%';
            isExpandedMenu = false;
            showTime();
            hideClock();
            //console.log("reset");
        }else if(!isExpandedMenu){ //easy patch ---
            //console.log("pls");
        }else{
            var scale = 0;
            var id = setInterval(frame,5);
            function frame(){
                if (scale > 10){
                    clearInterval(id);
                } else {
                    table.style.visibility = "visible";
                    food.style.width = 10.3-scale*(7.7/10) +'em';
                    food.style.height = 10-scale*(7.4/10) +'em';
                    social.style.width = 10.3-scale*(7.7/10) +'em';
                    social.style.height = 10-scale*(7.4/10) +'em';
                    info.style.width = 10.3-scale*(7.7/10) +'em';
                    info.style.height = 10-scale*(7.4/10) +'em';
                    table.style.top =  5+scale*(5/10)+'%';
                    table.style.left =  18+scale*(39/10) +'%';
                    scale++;
                    //console.log(food.style.height);

                }
            }
            isExpandedMenu = false;
            showTime();
            hideClock();
        }
    }else if(currMenu === "infoMenu"){
        backToMainMenu();
        hideHelpIcon();
    }else if(currMenu === "cartazMenu"){
        backToInfoMenu();
    }else if(currMenu === "palco1Menu" || currMenu === "palco2Menu" || currMenu === "palco3Menu" ){
        backToCartazMenu();
    }else if(currMenu === "band1" || currMenu === "band2" || currMenu === "bandX" || currMenu === "bandY" || currMenu === "bandALPHA" || currMenu === "bandBETA"){
        backToBandMenu(currMenu);
    }else if(currMenu === "infoGeralMenu"){
        backToInfoMenu();
    }else if(currMenu === "weatherMenu"){
        backToInfoMenu();
    }else if(currMenu === "helpMenu"){
        hideHelpText();
        backToInfoMenu();
    }
}

/*goTo's and backTo's*/
/*---------------------Start----------------------------*/
function backToMainMenu(){
    currMenu = "mainMenu";
    //will need to add the other options
    hideInfoMenu();
    showMainMenu();
}

function goToInfoMenu(){
    currMenu = "infoMenu";
    // hides the main menu
    hideMainMenu();
    hideTime();
    //shows info menu
    showInfoMenu();
}

function backToInfoMenu(){
    currMenu = "infoMenu";
    hideCartazMenu();
    hideWeatherMenu();
    hideInfoGeralMenu();
    showHelpIcon();
    showInfoMenu();
}

function goToCartazMenu(){
    currMenu = "cartazMenu";
    //hides the info menu
    hideInfoMenu();
    //shows cartaz menu
    showCartazMenu();
}

function backToCartazMenu(){
    //hides the band menu
    hideBandMenu();
    //shows cartaz menu
    showCartazMenu();
    currMenu = "cartazMenu";
}

function goToBandMenu(nr){
    currMenu = "palco" + nr + "Menu";
    hideCartazMenu();
    showBandMenu(nr);
}

function backToBandMenu(band){
    hideBandPage();
    switch(band){
        case "band1":
            currMenu = "palco1Menu"
            showBandMenu(1);
            break;
        case "band2":
            currMenu = "palco1Menu"
            showBandMenu(1);
            break;
        case "bandX":
            currMenu = "palco2Menu"
            showBandMenu(2);
            break;
        case "bandY":
            currMenu = "palco2Menu"
            showBandMenu(2);
            break;
        case "bandALPHA":
            currMenu = "palco3Menu"
            showBandMenu(3);
            break;
        case "bandBETA":
            currMenu = "palco3Menu"
            showBandMenu(3);
            break;
        default:
            //console.log("try me");
    }
}

function goToBandPage(band){
    hideBandMenu();
    currMenu = band;
    showBandPage(band);
}


function backToBandMenu(band){
    hideBandPage();
    switch(band){
        case 'band1':
            currMenu = 'palco1Menu';
            showBandMenu(1);
            break;
        case 'band2':
            currMenu = 'palco1Menu';
            showBandMenu(1);
            break;
        case 'bandX':
            currMenu = 'palco2Menu';
            showBandMenu(2);
            break;
        case 'bandY':
            currMenu = 'palco2Menu';
            showBandMenu(2);
            break;
        case 'bandALPHA':
            currMenu = 'palco3Menu';
            showBandMenu(3);
            break;
        case 'bandBETA':
            currMenu = 'palco3Menu';
            showBandMenu(3);
            break;
        default:
            //console.log("impossible to get here!");
    }
}

function goToWeatherMenu(){
    currMenu = "weatherMenu";
    hideInfoMenu();
    showWeatherMenu();
}

function goToInfoGeralMenu(){
    currMenu = "infoGeralMenu";
    hideInfoMenu();
    showInfoGeralMenu();
}

function goToHelp(){
    currMenu = "helpMenu";
    hideInfoMenu();
    hideHelpIcon();
    showHelpText();
}

/*--------------------End---------------------------*/

/*Menu management*/
/*---------------------Start----------------------------*/
function manageInfoMenu(element){
    var elem = document.getElementById(element);
    //console.log(elem.id);
    switch(elem.id){
        case 'cartaz':
            goToCartazMenu();
            hideHelpIcon();
            break;
        case 'infogeral':
            goToInfoGeralMenu();
            hideHelpIcon();
            break;
        case 'tempo':
            goToWeatherMenu();
            hideHelpIcon();
            break;
        default:
            //console.log("impossible to get here!");
    }
}

function manageCartazMenu(element){
    var elem = document.getElementById(element);
    switch(elem.id){
        case 'palco1':
            //console.log("palco1");
            goToBandMenu(1);
            break;
        case 'palco2':
            //console.log("palco2");
            goToBandMenu(2);
            break;
        case 'palco3':
            //console.log("palco3");
            goToBandMenu(3);
            break;
        default:
            //console.log("impossible to get here!");
    }
}

function manageBandMenu(element){
    var elem = document.getElementById(element);
    goToBandPage(elem.id);
}
/*--------------------End---------------------------*/

function sub(band){
    switch(band){
        case 'band1':
            if(!subToBand1){
                document.getElementById("bellBand1").style.visibility = "hidden";
                document.getElementById("ringBellBand1").style.visibility = "visible";
                subToBand1 = true;
                band1++;
            }else{
                document.getElementById("bellBand1").style.visibility = "visible";
                document.getElementById("ringBellBand1").style.visibility = "hidden";
                subToBand1 = false;
                band1--;
            }

            document.getElementById('displayCountBand1').innerHTML = band1;
            break;

        case 'band2':
            if(!subToBand2){
                document.getElementById("bellBand2").style.visibility = "hidden";
                document.getElementById("ringBellBand2").style.visibility = "visible";
                subToBand2 = true;
                band2++;
            }else{
                document.getElementById("bellBand2").style.visibility = "visible";
                document.getElementById("ringBellBand2").style.visibility = "hidden";
                subToBand2 = false;
                band2--;
            }

            document.getElementById('displayCountBand2').innerHTML = band2;
            break;

        case 'bandX':
            if(!subToBandX){
                document.getElementById("bellBandX").style.visibility = "hidden";
                document.getElementById("ringBellBandX").style.visibility = "visible";
                subToBandX = true;
                bandX++;
            }else{
                document.getElementById("bellBandX").style.visibility = "visible";
                document.getElementById("ringBellBandX").style.visibility = "hidden";
                subToBandX = false;
                bandX--;
            }

            document.getElementById('displayCountBandX').innerHTML = bandX;
            break;

        case 'bandY':
            if(!subToBandY){
                document.getElementById("bellBandY").style.visibility = "hidden";
                document.getElementById("ringBellBandY").style.visibility = "visible";
                subToBandY = true;
                bandY++;
            }else{
                document.getElementById("bellBandY").style.visibility = "visible";
                document.getElementById("ringBellBandY").style.visibility = "hidden";
                subToBandY = false;
                bandY--;
            }

            document.getElementById('displayCountBandY').innerHTML = bandY;
            break;

        case 'bandALPHA':
            if(!subToBandALPHA){
                document.getElementById("bellBandALPHA").style.visibility = "hidden";
                document.getElementById("ringBellBandALPHA").style.visibility = "visible";
                subToBandALPHA = true;
                bandALPHA++;
            }else{
                document.getElementById("bellBandALPHA").style.visibility = "visible";
                document.getElementById("ringBellBandALPHA").style.visibility = "hidden";
                subToBandALPHA = false;
                bandALPHA--;
            }

            document.getElementById('displayCountBandALPHA').innerHTML = bandALPHA;
            break;

        case 'bandBETA':
            if(!subToBandBETA){
                document.getElementById("bellBandBETA").style.visibility = "hidden";
                document.getElementById("ringBellBandBETA").style.visibility = "visible";
                subToBandBETA = true;
                bandBETA++;
            }else{
                document.getElementById("bellBandBETA").style.visibility = "visible";
                document.getElementById("ringBellBandBETA").style.visibility = "hidden";
                subToBandBETA = false;
                bandBETA--;
            }

            document.getElementById('displayCountBandBETA').innerHTML = bandBETA;
            break;

        default:
            //console.log("hi there!");
    }
}

function doubleClick(){
    hideTime();
    hideInfoMenu();
    hideBandPage();
    hideBandMenu();
    hideCartazMenu();
    hideMainMenu();
    hideWeatherMenu();
    hideInfoGeralMenu();
    hideHelpIcon();
    showTime();
    showMainMenu();
    document.getElementsByClassName("mainMenu")[0].style.visibility = "visible";
    currMenu = "mainMenu";
    resetUpaUpa();
}

