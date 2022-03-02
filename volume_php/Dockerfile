FROM php:8-apache

WORKDIR  /var/www/html

COPY . . 

EXPOSE 80  
#porta aqui tem que ser 80 por causa da imagem do php

RUN chown -R www-data:www-data /var/www/html

# volumes e para persistir dados, algo parecido com context
# existe tres tipos de volumes
# anonimos(anonymous): nao tem nomes
# nomeados(named): tem nomes
# bind mounts(bind): uma maneira de salvar dados na nossa maquina