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

var min = 3;
var max = 30;

function increaseFontSize() {
  var body = document.body,
      currentFontSize = parseFloat(window.getComputedStyle(body, null).fontSize);

  if (currentFontSize < max) {
    body.style.fontSize = ++currentFontSize + 'px';
  }
}

function decreaseFontSize() {
  var body = document.body,
      currentFontSize = parseFloat(window.getComputedStyle(body, null).fontSize);

  if (currentFontSize > min) {
    body.style.fontSize = --currentFontSize + 'px';
  }
}

document.querySelector('.IncreaseFont').addEventListener('click', increaseFontSize);


document.querySelector('.DecreaseFont').addEventListener('click', decreaseFontSize);
