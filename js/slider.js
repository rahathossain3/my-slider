const images = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg'
];
let imgIndex = 0;
const imgElement = document.getElementById('slider-image');

setInterval(() => {

    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    console.log(imgUrl);
    imgElement.setAttribute('src', imgUrl)
    imgIndex++;

}, 1000)