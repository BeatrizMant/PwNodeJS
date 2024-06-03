// Efeito scroll
window.revelar = ScrollReveal({reset:true}) // Resetar os elementos do site

// Topo do site

// Sugestoes series
revelar.reveal('.sessao1', {
    duration: 2000, 
    distance: '80px',
    delay: 350,
    origin: 'left'
})

revelar.reveal('.sessao2', {
    duration: 2000, 
    distance: '80px',
    delay: 500,
    origin: 'left'
})

revelar.reveal('.s1', {
    duration: 2000, 
    distance: '30px',
    delay: 350
})

revelar.reveal('.s2', {
    duration: 2000, 
    distance: '30px',
    delay: 400
})

revelar.reveal('.s3', {
    duration: 2000, 
    distance: '30px',
    delay: 450
})

revelar.reveal('.s4', {
    duration: 2000, 
    distance: '30px',
    delay: 500
})

revelar.reveal('.s5', {
    duration: 2000, 
    distance: '30px',
    delay: 550
})

revelar.reveal('.s6', {
    duration: 2000, 
    distance: '30px',
    delay: 600
})

// Cards 
revelar.reveal('.efeito-card1', {
    duration: 2000, 
    distance: '90px',
    delay: 700,
    origin: 'top'
})

revelar.reveal('.efeito-card2', {
    duration: 2000, 
    distance: '90px',
    delay: 700,
    origin: 'left'
})

revelar.reveal('.efeito-card3', {
    duration: 2000, 
    distance: '90px',
    delay: 700,
    origin: 'right'
})

revelar.reveal('.efeito-card4', {
    duration: 2000, 
    distance: '90px',
    delay: 300,
    origin: 'bottom'
})

revelar.reveal('.efeito', {
    duration: 1900, 
    distance: '90px',
    delay: 600
})

revelar.reveal('.efeito-carrossel', {
    duration: 1900, 
    distance: '90px',
    delay: 600
})

revelar.reveal('.efeitoTit', {
    duration: 1900, 
    distance: '90px',
    delay: 600
})

revelar.reveal('.c1', {
    duration: 2000, 
    distance: '120px',
    delay: 250
})

revelar.reveal('.c2', {
    duration: 2100, 
    distance: '120px',
    delay: 500
})

revelar.reveal('.c3', {
    duration: 2200, 
    distance: '120px',
    delay: 750
})

revelar.reveal('.c4', {
    duration: 2300, 
    distance: '120px',
    delay: 1000
})

revelar.reveal('.c5', {
    duration: 2400, 
    distance: '120px',
    delay: 1250
})

revelar.reveal('.c6', {
    duration: 2500, 
    distance: '120px',
    delay: 1500
})

revelar.reveal('.c7', {
    duration: 2600, 
    distance: '120px',
    delay: 1750
})

revelar.reveal('.c8', {
    duration: 2700, 
    distance: '120px',
    delay: 2000
})

revelar.reveal('.c9', {
    duration: 2800, 
    distance: '120px',
    delay: 2250
})

revelar.reveal('.efeitoChegada1', {
    duration: 1000, 
    distance: '80px',
    delay: 350,
    origin: 'left'
})
revelar.reveal('.efeitoChegada2', {
    duration: 1000, 
    distance: '80px',
    delay: 300,
    origin: 'right'
})

// Filtros 
filterSelection("tudo")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "tudo") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


var filtros = document.getElementById("filtros");
var btns = filtros.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

