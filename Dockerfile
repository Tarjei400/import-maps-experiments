FROM docker.kindredgroup.com/nginx:1-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY src /usr/share/nginx/html
