---
title: 升级OpenSSH
tags:
 - openssh
---

# 升级OpenSSH

::: tip
Zlib官网：http://www.zlib.net <br/>
OpenSSL官网：https://www.openssl.org <br/>
OpenSSH官网：https://www.openssh.com
:::


## 升级SSH
先通过yum更新，将openssh升级到最新版本

```shell
yum update openssh
```
::: warning
如果报错 /var/run/yum.pid已被锁定
:::

则执行命令删除：
```shell
rm -rf /var/run/yum.pid
```
由于yum中的openssh版本较低，所以需要手动编译升级openssh

## 安装所需依赖

```shell
yum install -y gcc gcc-c++ make zlib-devel openssl-devel pam-devel
```

## 下载源码
从官网下载zlib、openssl、openssh的源码包，解压到指定目录

```shell
wget https://www.openssl.org/source/openssl-1.1.1t.tar.gz
wget http://www.zlib.net/zlib-1.2.13.tar.gz
wget https://cdn.openbsd.org/pub/OpenBSD/OpenSSH/portable/openssh-8.2p1.tar.gz
```

## 解压缩
```shell
tar -zxvf openssl-1.1.1t.tar.gz
tar -zxvf zlib-1.2.13.tar.gz
tar -zxvf openssh-8.2p1.tar.gz
```

## 编译安装zlib
```shell
cd zlib-1.2.13
./configure --prefix=/usr/local/zlib
make && make install
```

## 编译安装openssl
```shell
cd openssl-1.1.1t
./config --prefix=/usr/local/openssl -d shared
make && make install
echo "/usr/local/openssl/lib" >> /etc/ld.so.conf
ldconfig -v
```

## 编译安装openssh

### 编译安装前先备份原有openssh
```shell
mv /usr/sbin/sshd /usr/sbin/sshd.bak
mv /usr/bin/ssh /usr/bin/ssh.bak
```

### 备份原有openssh配置文件
此处采用systemd管理openssh，所以备份的文件较多
```shell
mv /etc/ssh/sshd_config /etc/ssh/sshd_config.bak
mv /etc/ssh/ssh_config /etc/ssh/ssh_config.bak
mv /etc/pam.d/sshd /etc/pam.d/sshd.bak
mv /etc/pam.d/ssh /etc/pam.d/ssh.bak
mv /etc/sysconfig/sshd /etc/sysconfig/sshd.bak
mv /etc/sysconfig/ssh /etc/sysconfig/ssh.bak
mv /usr/lib/systemd/system/sshd.service /usr/lib/systemd/system/sshd.service.bak
mv /usr/lib/systemd/system/sshd.socket /usr/lib/systemd/system/sshd.socket.bak
mv /usr/lib/systemd/system/sshd@.service /usr/lib/systemd/system/sshd@.service.bak
mv /usr/lib/systemd/system/sshd-keygen.service /usr/lib/systemd/system/sshd-keygen.service.bak
```

如不采用systemd管理openssh，则只需备份以下文件即可
```shell
mv /etc/ssh/sshd_config /etc/ssh/sshd_config.bak
mv /etc/ssh/ssh_config /etc/ssh/ssh_config.bak
mv /etc/pam.d/sshd /etc/pam.d/sshd.bak
mv /etc/pam.d/ssh /etc/pam.d/ssh.bak
```


### 编译安装openssh
```shell
cd openssh-8.2p1
./configure --prefix=/usr/local/openssh --sysconfdir=/etc/ssh --with-zlib=/usr/local/zlib --with-ssl-dir=/usr/local/openssl --with-pam --with-md5-passwords --with-privsep-path=/var/empty/sshd --with-privsep-user=sshd --with-tcp-wrappers
make && make install
```

### 卸载原有openssh
```shell
yum remove openssh
```

### 修改配置文件
```shell
vim /etc/ssh/sshd_config
```

修改如下配置：
```shell
#Port 22
Port 22
#PermitRootLogin yes
PermitRootLogin yes
#PasswordAuthentication yes
PasswordAuthentication yes
#PermitEmptyPasswords no
PermitEmptyPasswords no
#UseDNS no
UseDNS no
#PubkeyAuthentication yes
PubkeyAuthentication yes
```

### 拷贝文件
```shell
cp /usr/local/openssh/sbin/sshd /usr/sbin/sshd
cp /usr/local/openssh/bin/ssh /usr/bin/ssh
```

### 恢复备份的配置文件
此处OpenSSH采用systemd管理，所以需要恢复的文件较多
```shell
cp /user/lib/systemd/system/sshd.service.bak /usr/lib/systemd/system/sshd.service
cp /user/lib/systemd/system/sshd.socket.bak /usr/lib/systemd/system/sshd.socket
cp /user/lib/systemd/system/sshd@.service.bak /usr/lib/systemd/system/sshd@.service
cp /user/lib/systemd/system/sshd-keygen.service.bak /usr/lib/systemd/system/sshd-keygen.service
```
如不采用systemd管理openssh，则只需拷贝以下文件即可
```shell
cp openssh-9.2p1/contrib/redhat/sshd.init /etc/init.d/sshd
cp openssh-9.2p1/contrib/redhat/sshd.pam /etc/pam.d/sshd
cp openssh-9.2p1/contrib/redhat/sshd.sysconfig /etc/sysconfig/sshd
```

### 调整文件权限
```shell
chmod 755 /usr/sbin/sshd
chmod 755 /usr/bin/ssh
chmod 644 /usr/lib/systemd/system/sshd.service
chmod 644 /usr/lib/systemd/system/sshd.socket
chmod 644 /usr/lib/systemd/system/sshd@.service
chmod 644 /usr/lib/systemd/system/sshd-keygen.service
chmod 600 /etc/ssh/ssh_host_rsa_key
chmod 600 /etc/ssh/ssh_host_dsa_key
chmod 600 /etc/ssh/ssh_host_ecdsa_key
chmod 600 /etc/ssh/ssh_host_ed25519_key
```

### 重启sshd服务
```shell
systemctl restart sshd
```

## 常用命令

### 查看sshd服务状态
```shell
systemctl status sshd
```

### 查看sshd版本
```shell
sshd -V
```

### 查看ssh版本
```shell
ssh -V
```

### 查看ssh连接
```shell
netstat -anp | grep ssh
```

### 查看ssh服务端口
```shell
ss -tnlp | grep ssh
```

### 查看ssh服务进程
```shell
ps -ef | grep ssh
```

### 查看OpenSSL版本
```shell
openssl version
```

### 查看zlib版本
```shell
zlib version
```

## 记录日志

```shell
vim /etc/ssh/sshd_config
```
修改如下配置：

```shell
# Logging
SyslogFacility AUTHPRIV
LogLevel INFO
```




