live-code

npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string;

//cria migrate
npx sequelize-cli db:migrate
//desfaz a ultima versão da migrate
npx sequelize-cli db:migrate:undo
//desfaz uma migrate especifica
db:migrate:undo --name [data-hora]-create-[nome-da-tabela].js

//gerar exemplo de insert para inserir no banco
npx sequelize-cli seed:generate --name demo-pessoa
//rodar todas as seeds
npx sequelize-cli db:seed:all
//desfaz o ultimo seed
npx sequelize db:seed:undo
//desfaz seed especifico
npx sequelize-cli db:seed:undo --seed nome-do-arquivo
//desfaz todos os seeds
npx sequelize-cli db:seed:undo:all