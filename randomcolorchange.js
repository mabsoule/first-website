//Change color of header on webpage randomly

function init(){

    var h1tags = document.getElementsByTagName("h1");
    h1tags[1].onclick = changeColor;

}

function changeColor(){

  //this.innerHTML = "Click Here";
  var randomcolor = '#'+Math.floor(Math.random()*16777215).toString(16);
  this.style.color = randomcolor;

}

onload = init;
