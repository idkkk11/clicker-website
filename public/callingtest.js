import gameUItest from "./gameUItest.js";

document.getElementById("Clicker").addEventListener("click", getMoney);

document.getElementById("AutoClickerButton").addEventListener("click", BuyAutoClicker);
document.getElementById("EmployeeButton").addEventListener("click", BuyBuilding);
document.getElementById("BuildingButton").addEventListener("click", BuyEmployee);
document.getElementById("FactoryButton").addEventListener("click", BuyFactory);

getData();