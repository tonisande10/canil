# canil
b7web

## caminho para instalaçao

npm init 
tsc --init 
mecher no arquivo tsconfig.json
npm install  express mustache-express dotenv
npm install --save-dev @types/express @types/mustache-express @types/node
npm install -g nodemon typescript ts-node
npm i --save sequelize
npm install validator
npm install --save-dev @types/validator
npm install --save-dev @types/sequelize
npm install mysql2


## server.ts

import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

dotenv.config();
const server = express();
server.set('view engine',  'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());
server.use(express.static(path.join(__dirname,'../public')));

//rotas

server.listen(process.env.PORT);