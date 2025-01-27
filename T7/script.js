const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAyCCDBTNKkBMXkRHgFUpGMADCWXaVu9R5bQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWEV2a47GShGnK1R_DzfpqBwT_sBIoLJLHBQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRhNqKwSoschnxGnh0Ie4OS2wMwqmRKHatuQ&s"
];
var currentIndex = 0;

function showImage(index) {
    var img = document.getElementById('currentImage');
    img.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

window.onload = function() {
    showImage(currentIndex);
}