# docker-compose 使用

Compose is a tool for defining and running multi-container Docker applications.

## Overview

使用docker-compose，能将多个不同的容器组合起来运行，方便地定义容器间的协作关系。

Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.

Compose works in all environments: production, staging, development, testing, as well as CI workflows.

Using Compose is basically a three-step process:

Define your app’s environment with a `Dockerfile` so it can be reproduced anywhere.

Define the services that make up your app in `docker-compose.yml` so they can be run together in an isolated environment.

Run `docker-compose up` and Compose starts and runs your entire app.

A `docker-compose.yml` looks like this:

```yaml
version: '3'
services:
  web:
    build: .
    ports:
    - "5000:5000"
    volumes:
    - .:/code
    - logvolume01:/var/log
    links:
    - redis
  redis:
    image: redis
volumes:
  logvolume01: {}
```

Compose has commands for managing the whole lifecycle of your application:

- Start, stop, and rebuild services
- View the status of running services
- Stream the log output of running services
- Run a one-off command on a service

## Example 示例

以本项目后台服务器的为例，

```yaml
version: '3'

services:
  rest-api:
    image: dfeo/rest-api
    networks:
      - net
      - nginx-net
    volumes:
      - /root/mnt/easyorder/static:/go/src/app/static

  db:
    image: "mysql:5.7"
    volumes:
      - /root/mnt/easyorder/mysql/mysql:/var/lib/mysql
      - /root/mnt/easyorder/mysql/init:/docker-entrypoint-initdb.d
    environment:
      MYSQL_ROOT_PASSWORD: password
    networks:
      - net

networks:
  nginx-net:
    external: true
  net:
    ipam:
      driver: default
      config:
        -
          subnet: 172.18.0.0/16
```

该文件表明，

- 一共产生2个容器，`rest-api`和`db`，和1个网络`net`；并将一个已有的外部网络`nginx-net`加入进来。
- `rest-api`服务采用`dfeo/rest-api`镜像构建([Dockerhub地址](https://hub.docker.com/r/dfeo/rest-api/))，在网络`net`和`nginx-net`中，并将容器内的`/go/src/app/static`目录挂载到`/root/mnt/easyorder/static`下
- `db`服务采用`mysql:5.7`镜像，在网络`net`中，挂载了数据目录和初始化目录，并设置了初始密码。
- `nginx-net`是外部网络，是`nginx`代理服务器所在的网络，用于反向代理服务器
- `net`是在`172.18.0.0/16`网段上的`bridge`网络，用于连通数据库和服务器，使服务器能够访问数据库服务。
