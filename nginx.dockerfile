FROM nginx:latest

MAINTAINER Jairo Rodrigues

# PARA ARQUIVOS ESTATICOS
# COPY /public /var/www/public

# CONFIG NGINX
COPY nginx.conf /etc/nginx/nginx.conf

# PERMISSAO ARQUIVOS ESTATICOS
# RUN chmod 755 -R /var/www/public

EXPOSE 80 443

ENTRYPOINT ["nginx"]

# Parametros extras para o entrypoint
CMD ["-g", "daemon off;"]
