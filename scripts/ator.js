//código do ator
let xAtor = 100;
let yAtor = 366;
let colisao = false;


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 25, 25);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 2;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 2;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 2;
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 2;
    
  }
}

function verificaColisao(){
  for (let i = 0; i <imagemCarros.length ; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if(colisao){
      colidiu();
    }
  }
}

function colidiu(){
  yAtor = 366
  xAtor= 100;
}

function colisaoBorda(){
  if (yAtor > 365){
    yAtor = 365
  }
  if (xAtor > 469){
    xAtor = 469
  }
}