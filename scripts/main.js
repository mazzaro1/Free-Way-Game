function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraACarro(imagemCarro, xCarro, yCarro);
  movimentaCarro();
  movimentaAtor();
}