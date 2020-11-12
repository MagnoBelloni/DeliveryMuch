# DeliveryMuch

Este projeto foi construído para a realização de um teste para a empresa [DeliverMuch](https://www.deliverymuch.com.br/).

![Preview](https://github.com/MagnoBelloni/DeliveryMuch/blob/main/print.png)

## Início

### Pré-requisitos:

Você precisa do NodeJS e do NPM instalado em sua máquina.
E de uma chave para a api do [Giphy](https://developers.giphy.com/docs/sdk).
Além disso crie um arquivo .env na raiz do projeto e coloque a chave como o exemplo abaixo. O exemplo também pode ser visualizado com o arquivo: [.env.example](https://github.com/MagnoBelloni/DeliveryMuch/blob/main/.env.example).

```
GIPHY_API_KEY=SUA_CHAVE
```

```
npm install
npm run start
```

### Alternativa(Docker)

Você vai precisar do Docker instalado em sua máquina.
E de uma chave para a api do [Giphy](https://developers.giphy.com/docs/sdk).

```
docker image build -t delivery_much .
docker run --name delivery_much -e GIPHY_API_KEY='SUA_CHAVE' -p 3000:3000 -d delivery_much
```

## Construído com:

-   [Typescript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale.
-   [Express](https://expressjs.com/pt-br/) - Fast, unopinionated, minimalist web framework for Node.js
-   [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
-   [RecipePuppy](http://www.recipepuppy.com/about/api/) - This api lets you search through recipe puppy database of over a million recipes by keyword and/or by search query.
-   [Giphy](https://developers.giphy.com/docs/sdk) - The first and largest GIF search engine, you gain free access to our ever-growing content library of GIFs and Stickers, plus brand new features like animated Emoji and Text
-   [Docker](https://www.docker.com/) - Package Software into Standardized Units for Development, Shipment and Deployment

## Autor:

-   **Magno Belloni** - [LinkedIn](https://www.linkedin.com/in/magnobelloni/)
