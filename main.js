var pic=0;
var slides=[];
var time = 4000;
slides[0]='img/brian1.png';
slides[1]='img/brian2.png';
slides[2]='img/brian3.png';
slides[3]='img/brian4.png';
i=0;

function slideshow(){
    document.getElementById("slide").src=slides[i];
    if(i<slides.length - 1 ){
        i=i+1;
    }
    else{
        i=0;
    }
    
    setTimeout("slideshow()",time);
}


window.onload=slideshow;


function about(){
    document.getElementById("images").style.display='none';
    document.getElementById("schedule").style.display='none';
    document.getElementById("merch").style.display='none';
    document.getElementById("about").style.display='flex';
    

}

function schedule(){
    document.getElementById("images").style.display='none';
    document.getElementById("schedule").style.display='flex';
    document.getElementById("merch").style.display='none';
    document.getElementById("about").style.display='none';
    

}

function merch(){
  
        document.getElementById("images").style.display='none';
        document.getElementById("schedule").style.display='none';
        document.getElementById("merch").style.display='flex';
        document.getElementById("about").style.display='none';
        
}