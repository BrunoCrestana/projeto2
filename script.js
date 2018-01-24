let titulo = document.querySelector('h1');
let texto = document.querySelector('p');

function mudarTitulo() {
  titulo.innerHTML = 'Sua cidade';
}

function mudarTexto() {

  texto.style.color = 'black';
  texto.style.backgroundColor = 'white';


}

function Cor(){
  if (texto.style.color == 'red') {
    texto.style.color = 'black';
  }else{
  texto.style.color ='red';
  texto.style.backgroundColor ='white';
  }
}
