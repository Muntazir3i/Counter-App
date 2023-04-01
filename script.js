let countMeter = document.getElementById("counter");
let saveEl = document.getElementById("save-el");
let counter = 0;
function increment(){
    counter += 1;
    countMeter.textContent = counter;
}


function save(){
    let saveCount =  counter + " - " ;
    saveEl.textContent += saveCount;    
    countMeter.textContent = 0;
    counter = 0;
}

