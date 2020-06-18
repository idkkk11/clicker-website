const testings = Object.create(null);

testings.BuyFactory = function () {
    let num = 0;
    let Factory = 0;
    let FactoryPrice = 0;
    const multiplier = 1.15;
    
    if (num>=FactoryPrice) {
        num = num - FactoryPrice;
        FactoryPrice = Math.round(FactoryPrice * multiplier);
        Factory += 1
        //const FactoryDetails = document.getElementById("FactoryDetails");
        //FactoryDetails.innerHTML = "Owned: " + Factory + "<br/>" + "Price: £" + FactoryPrice;
        //const Money = document.getElementById("Money");
        //Money.innerHTML = "£" + num;    /* DISPLAYS IN PLACE*/
        
    }

}

    export default Object.freeze(testings);