/*jslint es6*/
import Ajax from "./Ajax.js";

const gameUItest = Object.create(null);

gameUItest.init = function () {

    //VariableDeclaration
    let num = 0;                //Variable used to maintain the user's money
    let AutoClicker = 0;        //Initialises the amount of AutoClickers the user owns to 0
    let Employee = 0;           //Initialises the amount of Employees the user owns to 0
    let Building = 0;           //Initialises the amount of Buildings the user owns to 0
    let Factory = 0;            //Initialises the amount of Factories the user owns to 0
    let AutoClickerPrice = 10;  //Initialises the price of the AutoClicker to 10
    let EmployeePrice = 200;    //Initialises the price of the Employee to 200
    let BuildingPrice = 600;    //Initialises the price of the Building to 600
    let FactoryPrice = 4000;    //Initialises the price of the Factory to 4000
    let CanSend = true;         //A boolean that determines whether the user can send their score
    const addition = 1;         //Constant used to add the user's money
    const multiplier = 1.15;    //Multiplier to update the price of the shop items.

    //Gets the user's name in the opening of code
    window.onload = function () {               //A function that runs when the webpage is loaded
        name = prompt("What is your name");     //On load, the page asks for the user's name
        if (name === "") {       //If the user enters a blank name, they
            name = "Player" + Math.floor(Math.random() * 100000); //are given a random name
        }
        const Title = document.getElementById("Title");
        Title.innerHTML = "Work Work Work !!! - " + name + "'s Office"; //Adds the user's name to the title.
    };

/* ___________________ CODE FOR AUTOMATIC MONEY __________________________ */

    /* This section of the code are functions that are run when the user has items purchased from
    the shop. The shop item are items that will add the user's money. These functions add the user's money
    with a set interval based on how many of the items they have. */

    const callingAutoClicker = function() { //Function declaration
        if (AutoClicker > 0) {  //Makes sure the user "owns" an autoclicker
            const AutoClickerTimer = window.setInterval(AutoClickMechanism, 5000); //Runs code below every 5 seconds
            function AutoClickMechanism() {
                num += addition; //Adds 1 to the user's money for every Autoclicker owned
                const Money = document.getElementById("Money");    //Gets the money element for update
                Money.innerHTML = "£" + num;    // Updates the user's money
            }
        }
    };

    const callingEmployee = function() {
        if (Employee > 0) {
            const EmployeeTimer = window.setInterval(EmployeeMechanism, 1000);
            function EmployeeMechanism() {
                num += addition;
                const Money = document.getElementById("Money");
                Money.innerHTML = "£" + num;
            }
        }
    };

    const callingBuilding = function() {
        if (Building > 0) {
            const BuildingTimer = window.setInterval(BuildingMechanism, 1000);
            function BuildingMechanism() {
                num += addition;
                const Money = document.getElementById("Money");
                Money.innerHTML = "£" + num;
            }
        }
    };

    const callingFactory = function() {
        if (Factory > 0) {
            const FactoryTimer = window.setInterval(FactoryMechanism, 83);
            function FactoryMechanism() {
                num += addition;
                const Money = document.getElementById("Money");
                Money.innerHTML = "£" + num;
            }
        }
    };



    /* _______________________ MAIN MONEY CLICKER ________________________ */
    /* This little section of the code is the computer button that adds one pound for every click
    the user does. It then updates the money shown on the screen. */



    const getMoney = function () {
        num += addition;
        const Money = document.getElementById("Money");
        Money.innerHTML = "£" + num;
    };

    //Calls the getMoney function when the Clicker image is clicked
    document.getElementById("Clicker").addEventListener("click", getMoney);

    /* _______________________ BUYING SHOP ITEMS _________________________ */
    /* This section of the code is for buying the shop items that are available in the screen. When an item
    is purchased through a click, it adds the corresponding item into the users "inventory" represented by a
    variable named after their respective item names. These functions also increase the price of the item
    after it is purchased by the multiplier. It then calls the set interval function to generate money.

    This section also imposes an else function that tells the users they cannot purchase the item when
    they do not have enough money - displayed on the status bar below the shop items.*/

    const BuyAutoClicker = function () {
        if (num>=AutoClickerPrice) { //validates that the user has enough money to purchase the product
            num = num - AutoClickerPrice;   //reduces the amount of money the user has
            AutoClickerPrice = Math.round(AutoClickerPrice * multiplier);   //increase the price of the shop item
            AutoClicker += 1;   //increase the user's item inventory by 1
            const AutoClickerDetails = document.getElementById("AutoClickerDetails");   //used for updating display
            AutoClickerDetails.innerHTML = "Owned: " + AutoClicker + "<br/>" + "Price: £" + AutoClickerPrice;
            const Money = document.getElementById("Money");
            Money.innerHTML = "£" + num;
            callingAutoClicker(); //calls the item to automatically increase the user's money
        }
        else { //else function to inform the user that they have not enough money
            AutoClickerDetails.innerHTML = "Owned: " + AutoClicker + "<br/>" + "Price: £" + AutoClickerPrice;
            const NoMoney = document.getElementById("NoMoney");
            NoMoney.innerHTML = "Not Enough Money to Make Purchase";
            setTimeout(function(){ NoMoney.innerHTML =""; }, 2000);
        }
    };

    const BuyEmployee = function () {

        if (num>=EmployeePrice) {
            num = num - EmployeePrice;
            EmployeePrice = Math.round(EmployeePrice * multiplier);
            Employee += 1;
            const EmployeeDetails = document.getElementById("EmployeeDetails");
            EmployeeDetails.innerHTML = "Owned: " + Employee + "<br/>" + "Price: £" + EmployeePrice;
            const Money = document.getElementById("Money");
            Money.innerHTML = "£" + num;
            callingEmployee();
        }
        else {
            EmployeeDetails.innerHTML = "Owned: " + Employee + "<br/>" + "Price: £" + EmployeePrice;
            const NoMoney = document.getElementById("NoMoney");
            NoMoney.innerHTML = "Not Enough Money to Make Purchase";
            setTimeout(function(){ NoMoney.innerHTML =""; }, 2000);
        }
    };

    const BuyBuilding = function () {

        if (num>=BuildingPrice) {
            num = num - BuildingPrice;
            BuildingPrice = Math.round(BuildingPrice * multiplier);
            Building += 1;
            const BuildingDetails = document.getElementById("BuildingDetails");
            BuildingDetails.innerHTML = "Owned: " + Building + "<br/>" + "Price: £" + BuildingPrice;
            const Money = document.getElementById("Money");
            Money.innerHTML = "£" + num;
            callingBuilding();
        }
        else {
            BuildingDetails.innerHTML = "Owned: " + Building + "<br/>" + "Price: £" + BuildingPrice;
            const NoMoney = document.getElementById("NoMoney");
            NoMoney.innerHTML = "Not Enough Money to Make Purchase";
            setTimeout(function(){ NoMoney.innerHTML =""; }, 2000);
        }
    };

    const BuyFactory = function () {

        if (num>=FactoryPrice) {
            num = num - FactoryPrice;
            FactoryPrice = Math.round(FactoryPrice * multiplier);
            Factory += 1;
            const FactoryDetails = document.getElementById("FactoryDetails");
            FactoryDetails.innerHTML = "Owned: " + Factory + "<br/>" + "Price: £" + FactoryPrice;
            const Money = document.getElementById("Money");
            Money.innerHTML = "£" + num;
            callingFactory();
        }
        else {
            FactoryDetails.innerHTML = "Owned: " + Factory + "<br/>" + "Price: £" + FactoryPrice;
            const NoMoney = document.getElementById("NoMoney");
            NoMoney.innerHTML = "Not Enough Money to Make Purchase";
            setTimeout(function(){ NoMoney.innerHTML =""; }, 2000);
        }
    };


    //Event listeners to detect if the user has clicked the button to purchase an item
    document.getElementById("AutoClickerButton").addEventListener("click", BuyAutoClicker);
    document.getElementById("EmployeeButton").addEventListener("click", BuyEmployee);
    document.getElementById("BuildingButton").addEventListener("click", BuyBuilding);
    document.getElementById("FactoryButton").addEventListener("click", BuyFactory);


    /* ________________________ SENDING SCORE AREA _______________________________ */
    /* This section of the code is the part that sends the score from the client to the server. In this part
    of the code, the score is received by the server as it processed for the leaderboard. A timeout is also set
    to restrict the user from sending their score more than once every 5 minutes. When the user sends their score,
    the leaderboard is emptied and is re-filled with the most updated values from the server's database to make sure
    the user appears on the leaderboard - if they beat anyone in the top 5. */

    //document.getElementById("SendScoreButton").addEventListener('click', async event => {
    const SendScore = async function () {
        if (CanSend === true) {         //Makes sure the user is allowed to send to prevent overloading of database
            const score = num;          //Takes the amount of money as the user's score
            const Playername = name;    //Takes the name the user inputs in the beginning of the program
            const data = { "Name": Playername, "Money": score };    //Takes the two and sets it as data
            const response = Ajax.query(data);  //Sends the data to the server


        CanSend = false                 //Disallows users from sending data
        setTimeout(function(){ CanSend = true }, 300000);   //Re-allows after 5 minutes

        const Names = document.getElementById("Names");
        const Moneys = document.getElementById("Moneys");

        Names.textContent = "Name";     //Empties the leaderboard show
        Moneys.textContent = "Money";

        getData();      //Re-shows the leaderboard shown. The leaderboard is updated everytime the user
                        //sends a score
        }

        else {          //Displays message to tell the user they can only send score occasionally
            NoMoney.innerHTML = "Can Only Send Score Every 5 Minutes.";
            setTimeout(function(){ NoMoney.innerHTML ="" }, 300000);
        }
    }

    document.getElementById("SendScoreButton").addEventListener("click", SendScore);



    const getData = async function () {
        const response = await fetch ('/api');
        const data = await response.json();

        for (var item of data) {
            const name = document.createElement('div');
            const money = document.createElement('div');
            const Names = document.getElementById("Names");
            const Moneys = document.getElementById("Moneys");

            name.textContent = `${item.Name}`;
            money.textContent =  `£ ${item.Money}`;

            Names.append(name);
            Moneys.append(money);

        }
    }
    getData();      //Done to make sure leaderboard appears on launch
}



export default Object.freeze(gameUItest);
