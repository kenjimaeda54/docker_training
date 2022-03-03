FROM php:8-apache

WORKDIR  /var/www/html
# dokcer named
# docker run -v nomedovolume:/data => 
# :/precisa ser o workdir do container
# workdir tem a funcionalidade de identeficar o diretorio onde o arquivo esta
# alguns commandos dependem do workdir
# como o composer, o php composer, o php composer install, o php composer update
# docker container run -dp 3000:80 --name container_php2   -v phpvolume:/var/www/html/messages  --rm php_volumes 


# docker bind
# vai ser salvo na propria maquina
# docker run -v $(pwd)/messages:/var/www/html/messages -dp 3000:80 --name container_php2 --rm php_volumes

# no linux precisa liberar a permissao para process.php
#  chmod o+wx  process.php messages
 

COPY . . 

EXPOSE 80  
#porta aqui tem que ser 80 por causa da imagem do php

RUN chown -R www-data:www-data /var/www/html

# volumes e para persistir dados, algo parecido com context
# existe tres tipos de volumes
# anonimos(anonymous): nao tem nomes
# nomeados(named): tem nomes
# bind mounts(bind): uma maneira de salvar dados na nossa maquina