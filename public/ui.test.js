import f from "./FunctionList.js";

const describe = window.describe;
const it = window.it;
const fc = window.fastcheck;
const chai = window.chai;

window.addEventListener("DOMContentLoaded", function () {

    const Num = 100000;
    const Factory = 0;
    const FactoryPrice = 4000;
    const multiplier = 1.15;
    const Building = 0;
    const BuildingPrice = 600;

    const expectedfactoryprice = 4600;
    const expectednum = 99400;

    const arbNum = fc.nat(100000);
    const arbFactory = fc.nat(50);
    const arbBuilding = fc.nat(20);

    describe("Example Based Testing", function () {
        it("Buy operations work as expected.", function () {

            const bought = f.BuyFactory(Factory, FactoryPrice, Num, multiplier);
            chai.expect(bought.FactoryPrice).to.deep.equal(expectedfactoryprice);

        });

        it("Buying a building should reduce the user's money.", function () {

            const buyingbuilding = f.BuyBuilding(Building, BuildingPrice, Num, multiplier);
            chai.expect(buyingbuilding.num).to.deep.equal(expectednum);
        });

    });


    describe("Buying a factory with a random amount of money", function() {
        it("Given a random money and factory amount", function () {
            fc.assert(fc.property(
                arbNum,
                arbFactory,

                function (Factory, FactoryPrice, Num, multiplier) {
                    const j = f.BuyFactory(Factory, FactoryPrice, Num, multiplier);
                    console.log(j);
                    return j.Factory === (Factory + 1);
                }
            ));
        });
    });

});