FROM node:latest

# workdir seria qual diretorio desjaria trabalhar(project,app,src)
# vai servir de referencia para comando cp,mv,rm,etc
WORKDIR /src

COPY package*.json  .

RUN npm install

COPY . .

EXPOSE  3000

CMD [ "node", "index.js" ]
