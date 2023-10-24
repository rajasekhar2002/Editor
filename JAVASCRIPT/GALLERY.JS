// Galary Images Code
var allImg=document.images;
function allImgTags(){
    for(i=0;i<=allImg.length;i++)
    {
        allImg[i].src=`./ASSET/IMAGES/${i}.jpg`
    }
}
allImgTags()
var globalSrc;

function passSrc(urlOfimg){
    document.getElementById("imageselected").src=`${urlOfimg}`
    document.getElementById("imageeditselection").style.display="flex"
    document.getElementById("imagescontainer").style.display="none"
    globalSrc=urlOfimg;
}

function closeselectphoto(){
    document.getElementById("imageeditselection").style.display="none"
    document.getElementById("imagescontainer").style.display="flex"
}

// imageEditjs

function imageEdit(){
    var blurVal=document.getElementById("blur").value
    var brightnessVal=document.getElementById("brightness").value
    var contrastVal=document.getElementById("contrast").value
    var grayscaleVal=document.getElementById("grayscale").value
    var huerotateVal=document.getElementById("hue").value
    var invertVal=document.getElementById("invert").value
    var opacityVal=document.getElementById("opacity").value
    var saturateVal=document.getElementById("saturate").value
    var sepiaVal=document.getElementById("sepia").value

    document.getElementById("image").style.filter=`blur(${blurVal}px)brightness(${brightnessVal}%)
    contrast(${contrastVal}%)grayscale(${grayscaleVal}%)hue-rotate(${huerotateVal}deg)invert(${invertVal}%)opacity(${opacityVal}%)saturate(${saturateVal}%)sepia(${sepiaVal}%)`


    var Scalexval=document.getElementById("Scalex").value
    var Scaleyval=document.getElementById("Scaley").value
    var Skewxval=document.getElementById("Skewx").value
    var Skewyval=document.getElementById("Skewy").value
    var Translatexval=document.getElementById("Translatex").value
    var Translateyval=document.getElementById("Translatey").value
    var Rotx=document.getElementById("Rotx").value
    var Roty=document.getElementById("Roty").value
    var Rotz=document.getElementById("Rotz").value

    document.getElementById("image").style.transform=`scaleX(${Scalexval}) scaleY(${Scaleyval}) skewX(${Skewxval}deg) skewY(${Skewyval}deg) translateX(${Translatexval}px) translateY(${Translateyval}px) rotateX(${Rotx}deg) rotateY(${Roty}deg) rotateZ(${Rotz}deg)`
}

function editwindowopen(){
    document.getElementById("image").src=`${globalSrc}`
    document.getElementById("galleryheading").innerHTML=""
    document.getElementById("imageeditselection").style.display="none"
    document.getElementById("imagescontainer").style.display="none"
    document.getElementById("editwindow").style.display="flex"
}


