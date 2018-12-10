# HTML

É uma linguagem de marcação que tem as seguintes responsabilidades:

- Conteúdo;
- Semântico(tags);
- Estrutura

- `<h1>` - heading 1 - 6
  Usamos ele quando queremos definir o título

- `<a>` - Link - (a de anchor)
  Usamos ela para definir a navegação do usuário. Se você tem um texto que você quer que o usuário clique e ele vá para outro lugar você pode usar essa tag junto com o atributo `href`. Exemplo de um `a` que o usuário é direcionado para o site da collabcode.training:

```
<a href="http://www.collabcode.training">CollabCode.Training</a>
```

# CSS

é uma linguagem de estilo, isso quer dizer que ela tem as seguintes responsabilidades:

- Visual

- `float`
  A `float` cria um novo contexto, o elemento que adquiri a propriedade float fica a frente do outro elemento.
  Porém nunca esconde o conteúdo como um texto.
  O que vai definir o width e o hight do float do elemento quando inicialmente não colocamos valores é o tamanho do conteúdo.

- `Seletores Básicos:` - `tag` (preso a tag), `id` ( simbolizado pelo ponto só pode ter um por página), `class` ( simbolizado pelo #, pode usar N vezes na mesma página) - sempre procurar usar a class, é mais fácil para manutenção

- Display:
  `display:inline` - deixa os elementos ficar um do lado do outro na mesma linha. (obs: elemento tag `a` é um elemento display: inline). Uma vez que o elemento é display: inline, ele não define nem o widht e nem o height.(na verdade não funcionam)
  )

`display:block` deixa definir o width e o height, não deixa na mesma linha como padrão.

`display:inline-block` deixa definir o width e o height e deixa os elementos na mesma linha

- Position

`position:absolute`
Como float, ele criar um novo contexto.
O que define o width e o height é o conteúdo.
Usando as quatros propriedades top, bottom, left e right a gente consegue mover algum elemento (header) em relação a página.

`vertical-align`funciona com `display:inline-block` quando existem dois elementos

- <dl> description list - itens da descrição (preço, frete...)

- <dt> description title - Título

- <dd> define description - definições do que estamos escrevendo

- Atalhos - dl>dt+dd
  dl>dt+dd*7
  dl>dt{Título}+dd*7

  Quando existe o sinal de maior `>`, quer dizer que estamos pegando o filho direto ex: `.header-store > .navigation`
