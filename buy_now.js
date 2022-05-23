alert ("I'm Live")

//Adding variables to store our data
const usrInput = document.querySelector ('.text-area')
const userLetterPreviw = document.querySelector('.noah')
const userPricerPreviw = document.querySelector('#plaqueprice')

//Count Letter Function
function countLetters(some_data){
    //console.log(some_data.length * 5);
    const optName = some_data.replace(' ','')
    const price = optName.length *5;

    console.log('Username:', some_data);
    console.log('Price:', price);

    userLetterPreviw.textContent = some_data;
    userPricerPreviw.textContent = '$'+ price;
}

//countLetters('Olayinka')
//countLetters('Dabo')
//countLetters('Henry')
//countLetters('Rob')
//countLetters('Noah Olatory')
//countLetters('Nkem')

usrInput.addEventListener('input', function(e) {
    countLetters(e.target)
})

