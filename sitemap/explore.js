//Navigation Bar Functions
function openFunction(){
  document.getElementById('menu').style.width='40vh';
  document.getElementById('a1').style.visibility='visible';
  document.getElementById('a2').style.visibility='visible';
  document.getElementById('a3').style.visibility='visible';
  document.getElementById('a4').style.visibility='visible';
  document.getElementById('a5').style.visibility='visible';
  document.getElementById('a6').style.visibility='visible';
  document.getElementById('a7').style.visibility='visible';
}
function closeFunction(){
  document.getElementById('menu').style.width='0';
  document.getElementById('a1').style.visibility='hidden';
  document.getElementById('a2').style.visibility='hidden';
  document.getElementById('a3').style.visibility='hidden';
  document.getElementById('a4').style.visibility='hidden';
  document.getElementById('a5').style.visibility='hidden';
  document.getElementById('a6').style.visibility='hidden';
  document.getElementById('a7').style.visibility='hidden';
}

//Social Media Icons Hover Colorup
function colorImageSc(){
  document.getElementById('sc').src = './sc_colored.png';
}
function revertColorSc(){
  document.getElementById('sc').src = './sc.png';
}

function colorImageFb(){
  document.getElementById('fb').src = './fb_colored.png';
}
function revertColorFb(){
  document.getElementById('fb').src = './fb.png';
}

function colorImageTwitter(){
  document.getElementById('twitter').src = './twitter_colored.png';
}
function revertColorTwitter(){
  document.getElementById('twitter').src = './twitter.png';
}

document.getElementById('sc').onmouseover = colorImageSc;
document.getElementById('sc').onmouseout = revertColorSc;
document.getElementById('fb').onmouseover = colorImageFb;
document.getElementById('fb').onmouseout = revertColorFb;
document.getElementById('twitter').onmouseover = colorImageTwitter;
document.getElementById('twitter').onmouseout = revertColorTwitter;

//Editor Details Animations
function appear(){
  document.getElementById('editor').style.visibility = 'visible';
}
function disappear(){
  document.getElementById('editor').style.visibility = 'hidden';
}
