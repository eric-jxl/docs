# Jupyter 远程配置



```bash
pip3 install jupyter
jupyter notebook
#生成配置文件
jupyter notebook --generate-config

c.NotebookApp.allow_remote_access = True #允许远程连接
c.NotebookApp.ip='0.0.0.0' # 设置所有ip皆可访问
c.NotebookApp.password = 'argon2:$argon2id$v=19$m=10240,t=10,p=8$6LoiRAPJgwV9Dhbuvg1Hvg$x18tsWhMzBrlqYDZ0g9WY71GBWLq3JffO9RdSiYn+gw'
c.NotebookApp.open_browser = False # 禁止自动打开浏览器
c.NotebookApp.port =8888

c.NotebookApp.allow_root = True #Whether to allow the user to run the notebook as root.
#设置访问目录
c.NotebookApp.notebook_dir = '/home/jxleric95/jupyter' 
c.NotebookApp.base_url = '/jupyter'
```

```python
#生成jupyter登录token
from notebook.auth import passwd
passwd()
```

```nginx
location /jupyter {
    proxy_pass              http://jupyter;
    proxy_set_header        X-Real-IP $remote_addr;
    proxy_set_header        Host $host;
    proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_http_version      1.1;
    proxy_set_header        Upgrade $http_upgrade;
    proxy_set_header        Connection "upgrade";
    proxy_redirect          off;
}
```

