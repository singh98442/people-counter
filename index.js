// document.getElementById("zero").innerText=10

// let count = 0;
// console.log(count);

// let myage = 27;
// console.log(myage);

// let myage = 27;
// let humanratiodog = 7;
// let mydogage = myage * humanratiodog;
// console .log(mydogage);

// let bonuspoint = 50;
//  bonuspoint = bonuspoint + 100;
//  bonuspoint = bonuspoint-25;
//  bonuspoint = bonuspoint + 70;
//   console.log(bonuspoint);

let count = 0;

function increment(){
    // count = count + 1;
    count+=1;
    document.getElementById("zero").innerText=count;
  
}

function decrement(){
    count = count - 1;
    document.getElementById("zero").innerText=count;
}
 function save(){
    document.getElementById("previous").innerText+= "-"+count;
    
 }

//  let usernsme = "suren"
//  let message = "hi, i am from Nepal"
//  let result = usernsme+" " + message;
//  console.log(result);

function reset(){
    count = 0;
    document.getElementById("zero").innerText=count;

}
