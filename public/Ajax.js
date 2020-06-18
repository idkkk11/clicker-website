const Ajax = Object.create(null);

Ajax.query = async function (data) {

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

}

export default Object.freeze(Ajax);