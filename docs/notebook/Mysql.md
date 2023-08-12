---
title: 常用MySQL命令
tags:
 - mysql
---

# 常用MySQL命令

## 查看MySQL版本

```shell
mysql -V
```

## 连接MySQL

```shell
mysql -h
```

## 查看MySQL服务状态

```shell
systemctl status mysqld
```

## 查看MySQL服务端口

```shell
ss -tnlp | grep mysql
```

## 查看MySQL服务进程

```shell
ps -ef | grep mysql
```

## 查看MySQL服务配置文件

```shell
cat /etc/my.cnf
```
