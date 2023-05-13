
# Ubuntu 部署nginx、生成泛域名证书

## nginx脚本
```python
import os
os.system("sudo -i")
os.system("apt-get update && apt-get upgrade")
os.system("apt-get install nginx")
os.system("apt-get install -y build-essential libtool  build-essential gcc libpcre3 libpcre3-dev zlib1g-dev openssl")

#nginx index位置
/usr/share/nginx/html
#nginx bin路径
/usr/sbin/nginx

#修复pip3
python3 -m ensurepip
```


## certbot
```shell
#Let's Encrypt 配置泛域名通用证书
sudo apt update && sudo apt install certbot
pip3 install certbot-nginx
certbot certonly --manual  -d "*.example.com" --preferred-challenges dns-01 --server https://acme-v02.api.letsencrypt.org/directory
```


## Netdata
```shell
#Netdata监控平台
bash <(curl -Ss https://my-netdata.io/kickstart.sh)
killall netdata
cp system/netdata.service  /etc/systemd/system/
systemctl daemon-reload
systemctl enable netdata
systemctl start netdata
http://localhost:19999 #访问地址
```



```shell

#File Browser
#Linux
curl -fsSL https://raw.githubusercontent.com/filebrowser/get/master/get.sh | bash

#Mac
brew tap filebrowser/tap
brew install filebrowser

#windows
iwr -useb https://raw.githubusercontent.com/filebrowser/get/master/get.ps1 | iex

filebrowser -r /path/to/your/files

filebrowser config set --branding.name "Eric" \
    --branding.files "/home/jxleric95/jupyter" \
    --branding.disableExternal
```



```shell
#nginx.service
[Unit]
Description=A high performance web server and a reverse proxy server
Documentation=man:nginx(8)
After=network.target

[Service]
Type=forking
PIDFile=/run/nginx.pid
ExecStartPre=/usr/sbin/nginx -t -q -g 'daemon on; master_process on;'
ExecStart=/usr/sbin/nginx -g 'daemon on; master_process on;'
ExecReload=/usr/sbin/nginx -g 'daemon on; master_process on;' -s reload
ExecStop=-/sbin/start-stop-daemon --quiet --stop --retry QUIT/5 --pidfile /run/nginx.pid
TimeoutStopSec=5
KillMode=mixed

[Install]
WantedBy=multi-user.target
```



```mysql
#安装Mysql
sudo apt-get install -y mysql-server mysql-client
sudo netstat -tap | grep mysql
mysql -u root -p
#修改mysql密码
 cd /etc/mysql                      // 进入mysql子目录
 sudo vim debian.cnf
#开启远程访问
grant all privileges on *.* to 'root'@'%' identified by '密码'; 
 
#安装Postgresql
sudo apt install -y postgresql postgresql-contrib
```

```shell
#! /usr/bin/env sh

#启动odoo及关闭odoo脚本
case $1 in
        start)nohup /usr/bin/python /home/jxleric95/odoo10/server/odoo-bin -c /home/jxleric95/odoo10/server/petty_cash.conf >out.log 2>&1 &;;
       stop) kill -9 $(ps -x |grep odoo|awk '{print $1}');;

       *) echo "require start|stop";;
esac
  
```



```shell
#安装zsh
apt update
apt install zsh -y
chsh -s /bin/zsh
#Oh My Zsh 比较常用的两个插件是 zsh-autosuggestions 与 zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

#Gitee
git clone https://gitee.com/phpxxo/zsh-autosuggestions.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

#解决chsh: PAM: Authentication failure，直接修改用户配置，把bash改成zsh
sudo vim /etc/passwd

root:x:0:0:root:/root:/usr/bin/bash
apt install git -y
#sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

#卸载oh-my-zsh
 uninstall_oh_my_zsh zsh
    或者
 #sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/uninstall.sh)"
```



```bash
apt install -y git wget

--ssh密码登陆
vi  /etc/ssh/sshd_config
PermitRootLogin yes #允许root登录
PermitEmptyPasswords no #不允许空密码登录
PasswordAuthentication yes # 设置是否使用口令验证。
--ssh使用密钥登录
cat id_rsa.pub >> authorized_keys
chmod 600 authorized_keys
RSAAuthentication yes
PubkeyAuthentication yes
PasswordAuthentication no #禁用密码
service sshd restart

--certbot SSL证书 三个月更新
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
sudo certbot --nginx  OR  sudo certbot certonly --nginx
sudo certbot renew --dry-run 测试更新证书
```

```nginx
#user  nobody;
worker_processes  1;
error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;
#pid        logs/nginx.pid;

events {
    worker_connections  1024;
}
http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    gzip  on;

    server {
        listen       80;
        server_name  www.jxlss.cn;
        location / {
            root   html;
            index  index.html index.htm;
      			rewrite ^(.*)$  https://$host$1 permanent;
        }


    }
    #HTTPS server
    server {
        listen       443  ssl;
        server_name  www.jxlss.cn;
        

        ssl_certificate      www.jxlss.cn.pem;
        ssl_certificate_key  www.jxlss.cn.key;
        ssl_ciphers  HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers  on;
    
        location / {
            root   html;
            index  index.html index.htm;
        }
    }

}
```

```nginx
upstream odoo{
  server  ;
}
supsteam odoochat{
  server  ;
}

server {
   listen       80; 
   server_name  odoo.jxlss.cn;
   location /{
      rewrite ^(.*)$  https://$host$1 permanent;
   }   
}



#HTTPS server
server {
    listen 443 ssl;
    server_name odoo.jxlss.cn;
    ssl_certificate /etc/letsencrypt/live/odoo.jxlss.cn/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/odoo.jxlss.cn/privkey.pem; # managed by 
    ssl_session_timeout 5m; 
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2; #表示使用的TLS协议的类型。
    ssl_prefer_server_ciphers on; 
    location /longpolling {
        proxy_pass http://odoochat;
    }   
    location / { 
        proxy_pass http://odoo;
    }   
    location ~* /web/static/ {
       proxy_cache_valid 200 90m;
       proxy_buffering    on; 
       expires 864000;
       proxy_pass http://odoo;
   }   
    
}
```

