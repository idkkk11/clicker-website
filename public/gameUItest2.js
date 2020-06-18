/*jslint es6*/
import Ajax from "./Ajax.js";
import f from "./FunctionList.js";

const gameUItest2 = Object.create(null);



gameUItest2.init = function () {

    //VariableDeclaration
    let num = 0;
    let addition = 1;
    let AutoClicker = 0;
    let AutoClickerPrice = 10;
    let EmployeePrice = 200;
    let Employee = 0;
    let Building = 0;
    let BuildingPrice = 600;
    let Factory = 0;
    let FactoryPrice = 4000;
    let CanSend = true;
    const multiplier = 1.15;

    //Gets the user's name in the opening of code
    window.onload = function () {               //A function that runs when the webpage is loaded
        name = prompt("What is your name");     //On load, the page asks for the user's name
        if (name === "") {       //If the user enters a blank name, they
            name = "Player" + Math.floor(Math.random() * 100000); //are given a random name
        }
        const Title = document.getElementById("Title");
        Title.innerHTML = "Work Work Work !!! - " + name + "'s Office"; //Adds the user's name to the title.
    };

    /* _______________________ MAIN MONEY CLICKER ________________________ */
    /* This little section of the code is the computer button that adds one pound for every click
    the user does. It then updates the money shown on the screen. */



    const getMoney = function () {
        num += addition;
        const Money = document.getElementById("Money");
        Money.innerHTML = "£" + num;    /* DISPLAYS IN PLACE*/
    };

    document.getElementById("Clicker").addEventListener("click", getMoney);

    /* _______________________ BUYING SHOP ITEMS _________________________ */
    /* This section of the code is for buying the shop items that are available in the screen. When an item
    is purchased through a click, it adds the corresponding item into the users "inventory" represented by a
    variable named after their respective item names. These functions also increase the price of the item
    after it is purchased by the multiplier. It then calls the set interval function to generate money.

    This section also imposes an else function that tells the users they cannot purchase the item when
    they do not have enough money - displayed on the status bar below the shop items.*/

    document.getElementById("AutoClickerButton").addEventListener("click", TBAC);
    document.getElementById("EmployeeButton").addEventListener("click", TBE);
    document.getElementById("BuildingButton").addEventListener("click", f.BuyBuilding(Building, BuildingPrice, num, multiplier));
    document.getElementById("FactoryButton").addEventListener("click", f.BuyFactory(Factory, FactoryPrice, num, multiplier));

    const TBAC = function (AutoClicker, AutoClickerPrice, num, multiplier) {
        x = f.BuyAutoClicker(AutoClicker, AutoClickerPrice, num, multiplier);
        num = x.num;
        AutoClicker = x.AutoClicker;
        AutoClickerPrice = x.AutoClickerPrice;
    }

    const TBE = function (Employee, EmployeePrice, num, multiplier) {
        y = f.BuyBuilding(Employee, EmployeePrice, num, multiplier);
        num = y.num;
        Employee = y.Employee;
        EmployeePrice = y.EmployeePrice;
    }

    /* ________________________ SENDING SCORE AREA _______________________________ */
    /* This section of the code is the part that sends the score from the client to the server. In this part
    of the code, the score is received by the server as it processed for the leaderboard. A timeout is also set
    to restrict the user from sending their score more than once every 5 minutes. When the user sends their score,
    the leaderboard is emptied and is re-filled with the most updated values from the server's database to make sure
    the user appears on the leaderboard - if they beat anyone in the top 5. */

    //document.getElementById("SendScoreButton").addEventListener('click', async event => {
    const SendScore = async function () {
        if (CanSend === true) {
            const score = num;
            const Playername = name;
            const data = { "Name": Playername, "Money": score };
            const response = Ajax.query(data);
        //     const options = {
        //         method: 'POST',
        //         headers: {
        //         'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(data)
        // };

        // const response = await fetch('/api', options);
        // const json = await response.json();
        // console.log(json);

        // NoMoney.innerHTML = "Score Sent.";
        // setTimeout(function(){ NoMoney.innerHTML ="" }, 2000);

        CanSend = false
        setTimeout(function(){ CanSend = true }, 300000);

        Names = document.getElementById("Names");
        Moneys = document.getElementById("Moneys");

        Names.textContent = "Name";
        Moneys.textContent = "Money";

        getData();

        }

        else {
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
            Names = document.getElementById("Names");
            Moneys = document.getElementById("Moneys");

            name.textContent = `${item.Name}`;
            money.textContent =  `£ ${item.Money}`;

            Names.append(name);
            Moneys.append(money);

        }
    }

    getData();
}



export default Object.freeze(gameUItest2);
