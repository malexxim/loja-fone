/*
1 - Ter a janela que é o Browser na mão. ( Window, que é um api do browser)
2 - Ter o HTML inteiro, pra isso é preciso entrar dentro na janela (documente é api do browser)
3 - Precisamos do HTML na mão. De alguma forma precisamos estar dentro do HTML para localizar o coração no HTML
4 - Pra pegar o coração precisamos primeiro entrar na página, do nosso documento HTML. Essa linha toda pega o coração - const $heart = window.document.querySelector(".-heart");
5 - Precisamos pegar o coração na página, ou seja, uma referência dele no código
6 - Vamos pegar o clique no coração
7 - No momento que o usuário clicar, mostraremos um texto AE na tela
*/
/* 1 - Primeira coisa é achar a janela (window)
2 - Entrar dentro do HTML (document)
3 - buscar dentro do document (querySelector, query é busca)
4 - O seletor que funciona no CSS vai funcionar no javaScript
5 - Criar uma variável - const heart = (+ ->atribuição)
6 - Toda variável que guarda uma referência do HTML ou qualquer informação que vem do HTML, nesse caso é heart, a gente coloca um prefixo, um $.
É uma boa prática, apesar de funcionar sem o $, a gente ganha por saber no meio do código se você decifra alguma coisa, putz esse $ alguma coisa é uma variável que está guardando um elemento da página, uma tag, algum conteúdo específico da nossa página.
7 - Comando Alert mostra informaçao na tela
*/

const $heart = window.document.querySelector(".-heart");
const $stars = window.document.querySelectorAll(".star");
//let index = 0;
const positionLast = $stars.length - 1;

$heart.addEventListener("click", handleClick);

$stars.forEach(function($star, key) {
  if (key == 0) {
    $star.addEventListener("click", firstStar);
  }

  if (key == positionLast) {
    $star.addEventListener("click", lastStar);
  }

  if (key > 0 && key < positionLast) {
    $star.addEventListener("click", function() {
      middleStar(key);
    });
  }
});

/* $stars[0].addEventListener("click", firstStar);

$stars[1].addEventListener("click", function() {
  middleStar(1);
});

$stars[2].addEventListener("click", function() {
  middleStar(2);
});

$stars[3].addEventListener("click", function() {
  middleStar(3);
});

$stars[positionLast].addEventListener("click", lastStar);
*/

/*$stars.forEach(function($star) {
  $star.addEventListener("click", handleClick);
}); */

function handleClick() {
  this.classList.toggle("-active");
}

function firstStar() {
  $stars.forEach(function($star) {
    $star.classList.remove("-active");
  });
  this.classList.add("-active");
}

function lastStar() {
  $stars.forEach(function($star) {
    $star.classList.add("-active");
  });
}

function middleStar(index) {
  $stars.forEach(function($star, key) {
    $star.classList.remove("-active");

    if (key <= index) {
      $star.classList.add("-active");
    }
  });
}

/* Daqui pra baixo é como foi feito passo a passo até o código final acima

$heart.addEventListener("click", handleClickHeart);

$stars.forEach(function($star) {
  $star.addEventListener("click", handleStar);
});

function handleStar() {
  this.classList.toggle("-active");
}

$stars[0].addEventListener("click", handleClickStar0);
$stars[1].addEventListener("click", handleClickStar1);
$stars[2].addEventListener("click", handleClickStar2);
$stars[3].addEventListener("click", handleClickStar3);
$stars[4].addEventListener("click", handleClickStar4);


function handleClickHeart() {
   if ($heart.classList.contains("-active")) {
    console.log("verdade");
    $heart.classList.remove("-active"); // quando não tem a class active
   } else {
    console.log("mentira");
    $heart.classList.add("-active"); // quando tem a class active
  
  }

  this.classList.toggle("-active");
}

function handleClickStar0() {
  $stars[0].classList.toggle("-active");
}

function handleClickStar1() {
  $stars[1].classList.toggle("-active");
}

function handleClickStar2() {
  $stars[2].classList.toggle("-active");
}

function handleClickStar3() {
  $stars[3].classList.toggle("-active");
}

function handleClickStar4() {
  $stars[4].classList.toggle("-active");
}
*/
