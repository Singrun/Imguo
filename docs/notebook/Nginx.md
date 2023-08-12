---
title: 常用Nginx命令
tags:
 - nginx
---

# 常用Nginx命令

## 查看Nginx版本

```shell
nginx -v
```

## 查看Nginx配置文件

```shell
nginx -t
```

## 重启Nginx

```shell
nginx -s reload
```

## 查看Nginx进程

```shell
ps -ef | grep nginx
```

## 查看Nginx服务状态

```shell
systemctl status nginx
```

## 查看Nginx服务端口

```shell
ss -tnlp | grep nginx
```

## 查看Nginx服务进程

```shell
ps -ef | grep nginx
```


