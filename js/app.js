import httpRequest from "./httpRequest.js";

const currentCard = document.querySelector('.current--card');
const nextCard = document.querySelector('.next--card');
const prevCard = document.querySelector('.previous--card');

const currentImg = document.querySelector('.current--image')
const nextImg = document.querySelector('.next--image')
const prevImg = document.querySelector('.previous--image')


const listCard = [
    currentCard,
    nextCard,
    prevCard
]

const listImg = [
    currentImg,
    nextImg,
    prevImg
]

let dataDog = [];

const renderImg = function(list, data, type) {
    if (type === 1) {   //1 là card
        list.forEach(function(element, index) {
            element.innerHTML = `
                <div class="card__image">
                    <img src="${data[index]}" alt="" />
                </div>
            `
        })
    }
    else {  // 2 là background
        list.forEach(function(element, index) {
            element.innerHTML = `
                <img src="${data[index]}" alt="" />
            `
        })
    }
}

const getData = async () => {
    try {
        let response = await httpRequest.get('breeds/list/all');
        const listBreedsDog = Object.keys(response.message);
        const randomDog = listBreedsDog[Math.floor(Math.random() * listBreedsDog.length)];

        let listImage = await httpRequest.get(`https://dog.ceo/api/breed/${randomDog}/images`);
        dataDog = listImage.message;

        renderImg(listCard, dataDog,1); //render ra Card
        renderImg(listImg, dataDog,2);  //render ra background đằng sau
    } catch (error) {
        throw error;
    }
}
getData();

