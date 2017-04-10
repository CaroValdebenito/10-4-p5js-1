var education = [
  "1994",
  "1996",
  "1998",
  "2000",
  "2002",
  "2004",
  "2006",
  "2008",
  "2010",
]

var percentage = [96,98,100,100,96,94,92,85,84]

//movies.push("Matrix");
//oscars.push(4);

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight/2);
  canvas.parent('here');
  noLoop();
}

function windowResized() {
  //este ajuste es cuma: no estoy ajustando el ancho en relación al canvas, sino a la ventana
  //fíjense que también estoy utilizando el CSS para ajustar un ancho máximo de 100%
  resizeCanvas(windowWidth, windowHeight/2);
}

function draw() {
  background(25);
  for(var x = 0; x <= education.length; x++){
    //defino el blanco con 100/255 de transparencia
    fill(255,100);
    // el tamaño del texto es igual a la cantidad de oscars ganados * 3
    textSize((percentage[x]*1/4));
    // aquí dame el nro. de oscar ganado y ubícalo en una parte del ancho del canvas
    text(percentage[x], ((width/(education.length+1))*(x+1)), (height/2));
    //re-defino el blanco
    fill(255);
    // ahora cambia el tamaño de texto a 12 px, como valor fijo para todo lo que sigue
    textSize(12);
    // dame el nombre de la película correspondiente y ubícala en una parte del ancho
    text(education[x], ((width/(education.length+1))*(x+1)), ((height/2)+12),((windowWidth/(education.length+1))-50),100);
  }
}
