//Social Media Icons Hover Colorup
function colorImageSc(){
  document.getElementById('sc').src = './sc_colored.png';
}
function revertColorSc(){
  document.getElementById('sc').src = './sc_white.png';
}

function colorImageFb(){
  document.getElementById('fb').src = './fb_colored.png';
}
function revertColorFb(){
  document.getElementById('fb').src = './fb_white.png';
}

function colorImageTwitter(){
  document.getElementById('twitter').src = './twitter_colored.png';
}
function revertColorTwitter(){
  document.getElementById('twitter').src = './twitter_white.png';
}

document.getElementById('sc').onmouseover = colorImageSc;
document.getElementById('sc').onmouseout = revertColorSc;
document.getElementById('fb').onmouseover = colorImageFb;
document.getElementById('fb').onmouseout = revertColorFb;
document.getElementById('twitter').onmouseover = colorImageTwitter;
document.getElementById('twitter').onmouseout = revertColorTwitter;

//Form Rating System Animation
  function colorStar1() {
    document.getElementById('star1').style.color = "red";
    document.getElementById('star2').style.color = "#112d4e";
    document.getElementById('star3').style.color = "#112d4e";
    document.getElementById('star4').style.color = "#112d4e";
    document.getElementById('star5').style.color = "#112d4e";
  }
  function colorStar2() {
    document.getElementById('star1').style.color = "red";
    document.getElementById('star2').style.color = "red";
    document.getElementById('star3').style.color = "#112d4e";
    document.getElementById('star4').style.color = "#112d4e";
    document.getElementById('star5').style.color = "#112d4e";
  }
  function colorStar3() {
    document.getElementById('star1').style.color = "red";
    document.getElementById('star2').style.color = "red";
    document.getElementById('star3').style.color = "red";
    document.getElementById('star4').style.color = "#112d4e";
    document.getElementById('star5').style.color = "#112d4e";
  }
  function colorStar4() {
    document.getElementById('star1').style.color = "red";
    document.getElementById('star2').style.color = "red";
    document.getElementById('star3').style.color = "red";
    document.getElementById('star4').style.color = "red";
    document.getElementById('star5').style.color = "#112d4e";
  }
  function colorStar5() {
    document.getElementById('star1').style.color = "red";
    document.getElementById('star2').style.color = "red";
    document.getElementById('star3').style.color = "red";
    document.getElementById('star4').style.color = "red";
    document.getElementById('star5').style.color = "red";
  }


//Form fill validation
  function checkAns(){
  var name = document.getElementById('name').value;
  var star1 = document.getElementById('star1').style.color;
  var star2 = document.getElementById('star2').style.color;
  var star3 = document.getElementById('star3').style.color;
  var star4 = document.getElementById('star4').style.color;
  var star5 = document.getElementById('star5').style.color;
  var rating = "";

  if(name == ""){
    alert("Please enter your name before you submit");
  }
  else if (star5 == "red"){
    rating = "5";
    alert("Hey there " + name + ". You rated us " + rating + " stars. " +
    "Thanks for your feedback. We promise to put it to good use.");
  }
  else if (star4 == "red"){
    rating = "4";
    alert("Hey there " + name + ". You rated us " + rating + " stars. " +
    "Thanks for your feedback. We promise to put it to good use.");
  }
  else if (star3 == "red"){
    rating = "3";
    alert("Hey there " + name + ". You rated us " + rating + " stars. " +
    "Thanks for your feedback. We promise to put it to good use.");
  }
  else if (star2 == "red"){
    rating = "2";
    alert("Hey there " + name + ". You rated us " + rating + " stars. " +
    "Thanks for your feedback. We promise to put it to good use.");
  }
  else if (star1 == "red"){
    rating = "1";
    alert("Hey there " + name + ". You rated us " + rating + " star. " +
    "Thanks for your feedback. We promise to put it to good use.");
  }
  else {
    alert("Select a rating before you submit");
  }


}

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

//Animation for Introduction
  function enlargeOnHover(){
    document.getElementById('content').style.transform = "scale(1.2)";
    document.getElementById('content').style.transitionDuration = '1s';
    document.getElementById('toTop').style.visibility = 'visible';
  }
  function reduceOnReturn() {
    document.getElementById('content').style.transform = "scale(1)";
    document.getElementById('content').style.transitionDuration = '1s';
  }

  //Back to top button disappear
  function toTopDisappear(){
    document.getElementById('toTop').style.visibility = 'hidden';
  }

  //Editor Details Animations
  function appear(){
    document.getElementById('editor').style.visibility = 'visible';
  }
  function disappear(){
    document.getElementById('editor').style.visibility = 'hidden';
  }
