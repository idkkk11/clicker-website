const f = Object.create(null);

f.callingAutoClicker = function(AutoClicker, num, addition) { //Function declaration
    if (AutoClicker > 0) {  //Makes sure the user "owns" an AutoClicker
        const AutoClickerTimer = window.setInterval(AutoClickMechanism, 5000); //Runs code below every 5 seconds
        function AutoClickMechanism() {
            num += addition; //Adds 1 to the user's money for every AutoClicker owned
            const Money = document.getElementById("Money");    //Gets the money element for update
            Money.innerHTML = "£" + num;    // Updates the user's money
        }
    }
};

f.callingEmployee = function(Employee, num, addition) {
    if (Employee > 0) {
        const EmployeeTimer = window.setInterval(EmployeeMechanism, 1000);
        function EmployeeMechanism() {
            num += addition;
            const Money = document.getElementById("Money");
            Money.innerHTML = "£" + num;    /* DISPLAYS IN PLACE*/
        }
    }
};

f.callingBuilding = function(Building, num, addition) {
    if (Building > 0) {
        const BuildingTimer = window.setInterval(BuildingMechanism, 1000);
        function BuildingMechanism() {
            num += addition;
            const Money = document.getElementById("Money");
            Money.innerHTML = "£" + num;    /* DISPLAYS IN PLACE*/
        }
    }
};

f.callingFactory = function(Factory, num, addition) {
    if (Factory > 0) {
        const FactoryTimer = window.setInterval(FactoryMechanism, 83);
        function FactoryMechanism() {
            num += addition;
            const Money = document.getElementById("Money");
            Money.innerHTML = "£" + num;    /* DISPLAYS IN PLACE*/
        }
    }
};

f.BuyAutoClicker = function (AutoClicker, AutoClickerPrice, num, multiplier) {
    if (num>=AutoClickerPrice) {
        num = num - AutoClickerPrice;
        AutoClickerPrice = Math.round(AutoClickerPrice * multiplier);
        AutoClicker += 1;
        return {AutoClicker, AutoClickerPrice, num, multiplier};
    }
};

f.BuyEmployee = function (Employee, EmployeePrice, num, multiplier) {

    if (num>=EmployeePrice) {
        num = num - EmployeePrice;
        EmployeePrice = Math.round(EmployeePrice * multiplier);
        Employee += 1;
        return {Employee, EmployeePrice, num, multiplier};
    }
};

f.BuyBuilding = function (Building, BuildingPrice, num, multiplier) {

    if (num>=BuildingPrice) {
        num = num - BuildingPrice;
        BuildingPrice = Math.round(BuildingPrice * multiplier);
        Building += 1
        return {Building, BuildingPrice, num, multiplier};
    }
};


f.BuyFactory = function (Factory, FactoryPrice, num, multiplier) {

    if (num>=BuildingPrice) {
        num = num - FactoryPrice;
        FactoryPrice = Math.round(FactoryPrice * multiplier);
        Factory += 1
        return {Factory, FactoryPrice, num, multiplier};
    }
};

export default Object.freeze(f);