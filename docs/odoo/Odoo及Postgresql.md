# Odoo及Postgresql

## PostgreSQL允许远程连接
```bash
sudo apt install -y postgresql postgresql-contrib
#创建数据库用户odoo，输入两次密码odoo
sudo -u postgres createuser --createdb --no-createrole --no-superuser --pwprompt odoo

#/etc/postgresql/9.x/main/postgresql.conf
listen_addresses = '*
#修改同目录pg_hba.conf
# TYPE  DATABASE  USER  CIDR-ADDRESS  METHOD
host  all  all 0.0.0.0/0 md5

sudo service postgresql restart
```

## odoo serive启动
```shell
#odoo服务自启动 odoo.service
[Unit]
Description=Odoo10
Requires=postgresql.service
After=postgresql.service
[Service]
Type=simple
PermissionsStartOnly=true
User=odoo
Group=odoo
SyslogIdentifier=odoo10
ExecStart=/usr/bin/python /home/jxleric95/odoo10/server/odoo-bin -c /home/jxleric95/odoo10/server/petty_cash.conf
[Install]
WantedBy=default.target

$ systemctl enable odoo10.service
$ systemctl start odoo10.service
$	systemctl daemon-reload
```

