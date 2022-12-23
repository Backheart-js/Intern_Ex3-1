import httpRequest from "./httpRequest.js";

const currentCard = document.querySelector('.current--card');
const nextCard = document.querySelector('.next--card');
const prevCard = document.querySelector('.previous--card');

const listCard = [
    currentCard,
    nextCard,
    prevCard
]

let dataDog = [];

const getData = async () => {
    try {
        let response = await httpRequest.get('breeds/list/all');
        const listBreedsDog = Object.keys(response.message);
        const randomDog = listBreedsDog[Math.floor(Math.random() * listBreedsDog.length)];

        let listImage = await httpRequest.get(`https://dog.ceo/api/breed/${randomDog}/images`);
        dataDog = listImage.message;

        // currentCard.innerHTML = `
        //     <div class="card__image">
        //         <img src="${dataDog[0]}" alt="" />
        //     </div>
        // `
        listCard.forEach(function(card, index) {
            card.innerHTML = `
                <div class="card__image">
                    <img src="${dataDog[index]}" alt="" />
                </div>
            `
        })



    } catch (error) {
        throw error;
    }
}
getData();

