var myImage = document.getElementById('img1');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/Rectangle19.jpg') {
        myImage.setAttribute('src','images/слайдер1картинка2.png');
    } else if (mySrc ==='images/слайдер1картинка2.png') {
        myImage.setAttribute('src','images/слайдер1картинка3.png');
    } else if (mySrc === 'images/слайдер1картинка3.png') {
        myImage.setAttribute('src','images/Rectangle19.jpg');
    }
}

var myImage2 = document.getElementById('img2');

myImage2.onclick = function() {
    var mySrc2 = myImage2.getAttribute('src');
    if (mySrc2 === 'images/Rectangle22.png') {
        myImage2.setAttribute('src', 'images/слайдер2картинка2.png');
    } else if (mySrc2 === 'images/слайдер2картинка2.png') {
        myImage2.setAttribute('src', 'images/слайдер2картинка3.png');
    } else if (mySrc2 === 'images/слайдер2картинка3.png') {
        myImage2.setAttribute('src', 'images/Rectangle22.png');
    }
}