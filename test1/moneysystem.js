const MoneyDisplay = object.create(null);

//initial number of cookies  
  
let MoneyDisplay.num = 0;
const cookie = document.getElementById("Clicker");

function getmoney() { 
    MoneyDisplay.num += 1;

    const numbers = document.getElementById("numbers");
    
    //upgrade level for printing
    var upgradeLevel = document.getElementById("upgradeLevel");
    
    /*numbers.innerHTML = "£" + MoneyDisplay.num;     DISPLAYS IN PLACE*/

    return num

    //automatic Granny upgrade to 2x
    if(MoneyDisplay.num >= 30 ){
        MoneyDisplay.num += 2;
        upgradeLevel.innerHTML = "Granny Level";
    }

    //automatic factory upgrade to 10x
    if(MoneyDisplay.num >= 500) {
        MoneyDisplay.num += 10;
        upgradeLevel.innerHTML = "Factory Level";
    }

    //automatic plant upgrade to 30x
    if(MoneyDisplay.num >= 1000) {
        MoneyDisplay.num += 30;
        upgradeLevel.innerHTML = "Plant Level";
    }

    //automatic super factory upgrade to 1000x
    if(MoneyDisplay.num >= 100000) {
        MoneyDisplay.num += 1000;
        upgradeLevel.innerHTML = "Super-Plant Level";
    }
}


export default object.freeze(MoneyDisplay);
