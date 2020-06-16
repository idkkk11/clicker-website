const gameUItest = Object.create(null);

gameUItest.init = function () {

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

/* ___________________ CODE FOR AUTOMATIC MONEY __________________________ */

    /* This section of the code are functions that are run when the user has items purchased from
    the shop. The shop item are items that will add the user's money. These functions add the user's money
    with a set interval based on how many of the items they have. */

    const callingAutoClicker = function() {
        if (AutoClicker > 0) {
            const AutoClickerTimer = window.setInterval(AutoClickMechanism, 5000);
            function AutoClickMechanism() {
                num += addition;
                const Money = document.getElementById("Money");            
                Money.innerHTML = "£" + num;    /* DISPLAYS IN PLACE*/
            }
        }
    };
    
    const callingEmployee = function() {
        if (Employee > 0) {
            const EmployeeTimer = window.setInterval(EmployeeMechanism, 1000);
            function EmployeeMechanism() {
                num += addition;
                const Money = document.getElementById("Money");
                Money.innerHTML = "£" + num;    /* DISPLAYS IN PLACE*/
            }
        }
    };
    
    const callingBuilding = function() {
        if (Building > 0) {
            const BuildingTimer = window.setInterval(BuildingMechanism, 1000);
            function BuildingMechanism() {
                num += addition;
                const Money = document.getElementById("Money");
                Money.innerHTML = "£" + num;    /* DISPLAYS IN PLACE*/
            }
        }
    };

    const callingFactory = function() {
        if (Factory > 0) {
            const FactoryTimer = window.setInterval(FactoryMechanism, 83);
            function FactoryMechanism() {
                num += addition;
                const Money = document.getElementById("Money");
                Money.innerHTML = "£" + num;    /* DISPLAYS IN PLACE*/
            }
        }
    };



    /* _______________________ MAIN MONEY CLICKER ________________________ */
    /* This little section of the code is the computer button that adds one pound for every click
    the user does. It then updates the money shown on the screen. */

    document.getElementById("Clicker").onclick = function () {
        num += addition;
        const Money = document.getElementById("Money");
        Money.innerHTML = "£" + num;    /* DISPLAYS IN PLACE*/
    };


    /* _______________________ BUYING SHOP ITEMS _________________________ */
    /* This section of the code is for buying the shop items that are available in the screen. When an item
    is purchased through a click, it adds the corresponding item into the users "inventory" represented by a
    variable named after their respective item names. These functions also increase the price of the item
    after it is purchased by the multiplier. It then calls the set interval function to generate money.

    This section also imposes an else function that tells the users they cannot purchase the item when
    they do not have enough money - displayed on the status bar below the shop items.*/

    document.getElementById("AutoClickerButton").onclick = function () {
        if (num>=AutoClickerPrice) {
            num = num - AutoClickerPrice;
            AutoClickerPrice = Math.round(AutoClickerPrice * multiplier);
            AutoClicker += 1
            const AutoClickerDetails = document.getElementById("AutoClickerDetails");
            AutoClickerDetails.innerHTML = "Owned: " + AutoClicker + "<br/>" + "Price: £" + AutoClickerPrice;
            const Money = document.getElementById("Money");
            Money.innerHTML = "£" + num;    /* DISPLAYS IN PLACE*/
            callingAutoClicker();
        }
        else {
            const AutoClickerDetails = document.getElementById("AutoClickerDetails");
            AutoClickerDetails.innerHTML = "Owned: " + AutoClicker + "<br/>" + "Price: £" + AutoClickerPrice;
            const NoMoney = document.getElementById("NoMoney");
            NoMoney.innerHTML = "Not Enough Money to Make Purchase";
            setTimeout(function(){ NoMoney.innerHTML ="" }, 2000);
        }
    };

    document.getElementById("EmployeeButton").onclick = function () {

        if (num>=EmployeePrice) {
            num = num - EmployeePrice;
            EmployeePrice = Math.round(EmployeePrice * multiplier);
            Employee += 1
            const EmployeeDetails = document.getElementById("EmployeeDetails");
            EmployeeDetails.innerHTML = "Owned: " + Employee + "<br/>" + "Price: £" + EmployeePrice;
            const Money = document.getElementById("Money");
            Money.innerHTML = "£" + num;    /* DISPLAYS IN PLACE*/
            callingEmployee();
        }
        else {
            const EmployeeDetails = document.getElementById("EmployeeDetails");
            EmployeeDetails.innerHTML = "Owned: " + Employee + "<br/>" + "Price: £" + EmployeePrice;
            const NoMoney = document.getElementById("NoMoney");
            NoMoney.innerHTML = "Not Enough Money to Make Purchase";
            setTimeout(function(){ NoMoney.innerHTML ="" }, 2000);
        }
    };

    document.getElementById("BuildingButton").onclick = function () {

        if (num>=BuildingPrice) {
            num = num - BuildingPrice;
            BuildingPrice = Math.round(BuildingPrice * multiplier);
            Building += 1
            const BuildingDetails = document.getElementById("BuildingDetails");
            BuildingDetails.innerHTML = "Owned: " + Building + "<br/>" + "Price: £" + BuildingPrice;
            const Money = document.getElementById("Money");
            Money.innerHTML = "£" + num;    /* DISPLAYS IN PLACE*/
            callingBuilding();
        }
        else {
            const BuildingDetails = document.getElementById("BuildingDetails");
            BuildingDetails.innerHTML = "Owned: " + Building + "<br/>" + "Price: £" + BuildingPrice;
            const NoMoney = document.getElementById("NoMoney");
            NoMoney.innerHTML = "Not Enough Money to Make Purchase";
            setTimeout(function(){ NoMoney.innerHTML ="" }, 2000);
        }
    };

    document.getElementById("FactoryButton").onclick = function () {

        if (num>=FactoryPrice) {
            num = num - FactoryPrice;
            FactoryPrice = Math.round(FactoryPrice * multiplier);
            Factory += 1
            const FactoryDetails = document.getElementById("FactoryDetails");
            FactoryDetails.innerHTML = "Owned: " + Factory + "<br/>" + "Price: £" + FactoryPrice;
            const Money = document.getElementById("Money");
            Money.innerHTML = "£" + num;    /* DISPLAYS IN PLACE*/
            callingFactory();
        }
        else {
            const FactoryDetails = document.getElementById("FactoryDetails");
            FactoryDetails.innerHTML = "Owned: " + Factory + "<br/>" + "Price: £" + FactoryPrice;
            const NoMoney = document.getElementById("NoMoney");
            NoMoney.innerHTML = "Not Enough Money to Make Purchase";
            setTimeout(function(){ NoMoney.innerHTML ="" }, 2000);
        }
    };


    /* ________________________ SENDING SCORE AREA _______________________________ */
    /* This section of the code is the part that sends the score from the client to the server. In this part
    of the code, the score is received by the server as it processed for the leaderboard. A timeout is also set
    to restrict the user from sending their score more than once every 5 minutes. When the user sends their score,
    the leaderboard is emptied and is re-filled with the most updated values from the server's database to make sure
    the user appears on the leaderboard - if they beat anyone in the top 5. */

    document.getElementById("SendScoreButton").addEventListener('click', async event => {
        if (CanSend === true) {
            const score = num;
            const Playername = name;
            const data = { "Name": Playername, "Money": score };
            const options = {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
        };

        const response = await fetch('/api', options);
        const json = await response.json();
        console.log(json);

        NoMoney.innerHTML = "Score Sent.";
        setTimeout(function(){ NoMoney.innerHTML ="" }, 2000);

        CanSend = false
        setTimeout(function(){ CanSend = true }, 1000);

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
    )



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



export default Object.freeze(gameUItest);