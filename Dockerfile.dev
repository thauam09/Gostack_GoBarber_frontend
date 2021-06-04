# a partir da imagem do node versão 10.24.1
FROM node:10.24.1

# copiar package.json e package-log.json para instalação das dependências
COPY package.json package-lock.json /var/app/gobarber_web/

# diretório padrão da aplicação
WORKDIR /var/app/gobarber_web/

# instalaçao das dependências
RUN npm install

# copiar todos arquivos do projeto
COPY . /var/app/gobarber_web/

# liberar porta 3000 do container
EXPOSE 3000

# rodar comando yarn start para subir a aplicação
CMD ["npm", "start"]