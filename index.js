let change = document.getElementById('container');
let colorName = document.getElementById('details');

btn.addEventListener('click', () => {
    // coverts the maximium hexal color to decimal,which gives us 16777215;
    let maxVal = 0xFFFFFF;
    
     //this generates numbers randomly from the maximium hexal color that was converted to decimal: ;
    let randomNumber = Math.random() * maxVal;

    //this converts the random number generated to an integer(nearest whole number)
    randomNumber = Math.floor(randomNumber);
   
    // the number converted to an integer is not conveted to a string of base 16,while # is added to it,to display it as a hexal code.
    let random = "#" + randomNumber.toString(16);
    
    // this changes the backgroundColor to the color of the number generated that was converted to base 16.
change.style.backgroundColor = random;

// this displays the number generated
colorName.innerHTML =  random;

})