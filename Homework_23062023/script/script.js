// Task 1.1
let paragraphs = new Array();
let paragraphsI = new Array();
for(let i = 0; i < 10; i++){
    paragraphs[i] = "Paragraph" + i;
    paragraphsI[i] = document.createElement("p");
    document.body.append(paragraphsI[i]);
    paragraphsI[i].innerText = paragraphs[i];
    paragraphsI[i].addEventListener("click", function(){paragraphsI[i].innerText = "*******";});
}

//Tasks 1.2, 1.3
let cards = document.getElementsByClassName('card');

for(let i = 0; i < cards.length; i++) {
    let clicksCount = 1;
    cards[i].addEventListener('click', function () {
        if(clicksCount%2 != 0) {this.classList.add('active'); clicksCount += 1;}
        else {this.classList.toggle('active'); clicksCount += 1;} 
    })   
}


// Task 1.4

let link = ['https://wallpapershigh.com/alpina/alpina-b30-1', 'https://wallpapershigh.com/alpina/alpina-b30-1', 'https://wallpapershigh.com/alpina/alpina-b30-1'];

let smallBox = document.querySelector('.small');
let showLarge = document.getElementById('showLarge');
link.forEach(function(large) {
    let smalls = document.createElement('img');
    smalls.src = large;
    smalls.classList.add('smalls');
    smalls.addEventListener('click', function () {
        showLarge.setAttribute('src', large)
    });
    smallBox.appendChild(smalls);
})