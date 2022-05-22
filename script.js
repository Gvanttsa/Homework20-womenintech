//burger bar
let navigation = document.getElementById('navbarlinks');
let burgerButton = document.getElementById('toggleBurger');
let firstLine = document.getElementById('burger1');
let secondline = document.getElementById('burger2');
let thirdline = document.getElementById('burger3')


burgerButton.addEventListener('click', function() {
    navigation.classList.toggle('activeNav')
    firstLine.classList.toggle('activeBurger1');
    secondline.classList.toggle('activeBurger2');
    thirdline.classList.toggle('activeBurger3');
   
});

// accordeon
let selectContainer = document.getElementsByClassName('contaier');

for (let i=0; selectContainer.length; i++) {
    selectContainer[i].addEventListener('click', function() {
        this.classList.toggle('activeP')
    })
}