#### web前端部署

1. 安装nginx

   ``` 
   sudo apt install nginx
   ```

2. 修改配置文件

   ```
   sudo vim /etc/nginx/nginx.conf
   ```

   将配置文件中对应内容改成下面内容

   ``` js
   http {
   
   	##
   	# Basic Settings
   	##
   
   	sendfile on;
   	tcp_nopush on;
   	tcp_nodelay on;
   	keepalive_timeout 65;
   	types_hash_max_size 2048;
   	# server_tokens off;
   
   	# server_names_hash_bucket_size 64;
   	# server_name_in_redirect off;
   
   	include /etc/nginx/mime.types;
   	default_type application/octet-stream;
   
   	##
   	# SSL Settings
   	##
   
   	ssl_protocols TLSv1 TLSv1.1 TLSv1.2; # Dropping SSLv3, ref: POODLE
   	ssl_prefer_server_ciphers on;
   
   	##
   	# Logging Settings
   	##
   
   	access_log /var/log/nginx/access.log;
   	error_log /var/log/nginx/error.log;
   
   	##
   	# Gzip Settings
   	##
   
   	gzip on;
   	gzip_disable "msie6";
   	server {
   	    listen       8000;
               server_name  localhost;
   
               #charset koi8-r;
   
               #access_log  logs/host.access.log  main;
   
               location /api/ {
                   proxy_pass https://easyorder.cf/;
   	    }
               location / {
               	#root html;
               	#index index.htm index.html;
               	proxy_pass http://localhost:8080;
               }
   	}
   	# gzip_vary on;
   	# gzip_proxied any;
   	# gzip_comp_level 6;
   	# gzip_buffers 16 8k;
   	# gzip_http_version 1.1;
   	# gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
   
   	##
   	# Virtual Host Configs
   	##
   
   	include /etc/nginx/conf.d/*.conf;
   	# include /etc/nginx/sites-enabled/*;
   }
   ```



3. 安装node，npm

4. 进入项目运行

   ```
   npm install
   npm start 
   ```

   