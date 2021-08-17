document.addEventListener('DOMContentLoaded', () => {

    //cards
    const cardArray = [
        {
            name: 'hasbulla',
            img: 'images/Hsbulla.png'
        },
        {
            name: 'hasbulla',
            img: 'images/Hasbulla.png'
        },
        {
            name: 'borgirkid',
            img: 'images/borgir-kid.png'
        },
        {
            name: 'borgirkid',
            img: 'images/borgir-kid.png'
        },
        {
            name: 'baburao',
            img: 'images/baburao.jpg'
        },
        {
            name: 'baburao',
            img: 'images/baburao.jpg'
        },
        {
            name: 'bhool-bhulaiyaa',
            img: 'images/Bhool-Bhulaiyaa.jpg'
        },
        {
            name: 'bhool-bhulaiyaa',
            img: 'images/Bhool-Bhulaiyaa.jpg'
        },
        {
            name: 'Hindustani-Bhau',
            img: 'images/Hindustani-Bhau.jpg'
        },
        {
            name: 'Hindustani-Bhau',
            img: 'images/Hindustani-Bhau.jpg'
        },
        {
            name: 'vijay-raaz-gutter',
            img: 'images/vijay-raaz-gutter.jpg'
        },
        {
            name: 'vijay-raaz-gutter',
            img: 'images/vijay-raaz-gutter.jpg'
        },  
    ]

    cardArray.sort(() => 0.5 - Math.random())

    //create your board
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');

    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = []

    function createBoard() {
        for(let i=0; i<cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosenId[0] === cardsChosenId[1]) {
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            alert('FAILED! Try again.');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You got them all';
        }
    }

    //flip cards
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }


    createBoard();

})