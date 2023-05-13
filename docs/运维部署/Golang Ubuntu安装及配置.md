# Golang Ubuntu安装及配置

```sh
#下载并且解压 Go 二进制文件到/usr/local目录
wget -c https://golang.org/dl/go1.16.5.linux-amd64.tar.gz -O -|sudo tar -xz -C /usr/local
#Go 目录添加到$PATH环境变量
vim $HOME/.profile
export PATH=$PATH:/usr/local/go/bin

source ~/.profile
go version

mkdir ~/go
```

