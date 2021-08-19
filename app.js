function pin(){
    let inputValue = Math.round(Math.random() * 10000);
    let inputpin = inputValue + '';
    if(inputpin.length == 4){
        return inputpin
    }else{
        return pin();
    }
}
function getPin() {
    document.getElementById('pin-value').value = pin()
}

document.getElementById('key-pad').addEventListener('click', function(event){
    let number = event.target.innerText
    let inputNumber = document.getElementById('input-key');
    if(isNaN(number)){
        if(number == 'C'){
            inputNumber.value = '';
        }
    }else{
        let previseNumber = inputNumber.value;
        let newNumber = previseNumber + number
        inputNumber.value = newNumber;
    }
})

document.getElementById('submit-pin').addEventListener('click', function(){
    let getPin = document.getElementById('pin-value').value;
    let submitPin = document.getElementById('input-key').value;
    if(getPin == submitPin){
        document.getElementById('pin-matched').style.display = 'block'
        document.getElementById('pin-fail').style.display = 'none'
        let tryCount = document.getElementById('try-limit');
        tryCount.innerText = 3;
    }else{
        document.getElementById('pin-matched').style.display = 'none'
        document.getElementById('pin-fail').style.display = 'block'
        let tryCount = document.getElementById('try-limit');
        let tryLeft = parseInt(tryCount.innerText) - 1
        if(tryLeft >= 0){
            tryCount.innerText = tryLeft;
        }
    }
})