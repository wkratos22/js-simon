var myArray = [];

for( let i = 0; i <= 4; i++){
    var num = Math.floor(Math.random() * 99 + 1);
    myArray.push(num);
}
console.log(myArray);
document.getElementById("numeri").innerHTML = myArray ;


const myTimeout = setTimeout(myGreeting, 2000);
function myGreeting() {
	for( let k = 0; k <= 4; k++){
        let numInseriti = prompt("inserisci i numeri che hai appena visto");
  	}
}

let numGiusto = 0;
let numSbagliato = 0;

if (numInseriti[k] == num[i]){
    numGiusto++;    
} else {
    numSbagliato++;
}

alert("Bravo hai inserito" + numGiusto + "numeri giusti!, e hai fatto" + numSbagliato + "errori!")



