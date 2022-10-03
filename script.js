const executeBtn = document.querySelector("#num-btn-execute");
const numInput = document.querySelector("#num-value");
const numbers = document.querySelector("#numbers");
const bodyDiv = document.querySelector(".bodyDiv");
const numDisplay = document.querySelector("#numDisplay");


clickCount=0
executeBtn.addEventListener("click", (event) => {
    clickCount+=1
    
function clickFunction(){

  let numToPrint = numInput.value;

  for (let i = 0; i <= numToPrint; i++) {
    let numbers = document.createElement("div");
    numbers.className = "numBlocks";
    numbers.innerText = i;
    numbers.style.color = 'white'

    if (i%2==0) {
        numbers.style.backgroundColor = "#2db81d";
    } else{numbers.style.backgroundColor = "#f73152";}
    


// Any interger is Prime if it is not divisible by any integer less than OR equal to its square root

function isPrime(i) {
    let root = Math.floor(Math.sqrt(i))
  
//   if (i==2 || i==3) {
//     return true
//   } else if (i==0 || i==1) {
//     return false
//   }

if(i==0 || i==1) {
        return false
      }


    for (let j=2; j<=root; j++) {
      if (i%j==0) {
        return false
      }
       
    } 
    
    return true
  }
  
  if (isPrime(i)==true) {
    numbers.style.backgroundColor = "#ffd000";
    numbers.style.color = "black";
  }
 


    numDisplay.appendChild(numbers);
  }

}
console.log(clickCount)
if (clickCount>0) {
    numDisplay.innerHTML = " "
    clickCount=0
    clickFunction()
    
} else {
    clickFunction()
}




});
