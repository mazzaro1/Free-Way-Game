let meusPontos = 0;

function incluiPontos(){
    textAlign(CENTER)
    textSize(25)
    fill(color(255,240,60))
    text(meusPontos, width /4, 28)
}

function marcaPonto(){
    if (yAtor <= 15){
        meusPontos +=1;
        somDoPonto.play();
    }
    if (yAtor <= 15){
        yAtor =366;
    }
}

function perderPonto(){
    if (meusPontos > 0){
        meusPontos -= 1
    }
}

