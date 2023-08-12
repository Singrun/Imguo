---
title: 常用Redis命令
tags:
 - redis
---
# 常用Redis命令

## 查看Redis版本

```shell
redis-cli -v
```
```shell
redis-cli --version
```


## 查看Redis服务状态

```shell
systemctl status redis
```

## 查看Redis服务端口

```shell
ss -tnlp | grep redis
```

## 查看Redis服务进程

```shell
ps -ef | grep redis
```

## 查看Redis服务配置文件

```shell
cat /etc/redis.conf
```

## 查看Redis服务配置

```shell
redis-cli config get *
```