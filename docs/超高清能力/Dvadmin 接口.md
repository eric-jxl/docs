# 标签

## 1.创建标签

```
POST /api/v1/material/create_label/
```

#### 参数

| 名称 | 类型 | 必填 | 描述   |
| ---- | ---- | ---- | ------ |
| name | str  | 是   | 标签名 |

#### 请示示例

```json
{
    "name":"test"
}
```



#### 返回结果

```json
{
    "result":{
        "id":1,"nme":"标签1"
    },
    "code":200,
    "msg":"success"
}
```



## 2.修改标签

```
POST /api/v1/material/update_label/
```



#### 参数

| 名称       | 类型 | 必填 | 描述       |
| ---------- | ---- | ---- | ---------- |
| lable_id   | Int  | 是   | 标签id     |
| label_name | Str  | 是   | 修改标签名 |

#### 请示示例

```json
{
    "lable_id":1,
    "label":"标签2"
}
```



#### 返回结果

```json
{
    "result":{},
    "code":200,
    "msg":"success"
}
```





## 3.删除标签

```
POST /api/v1/material/delete_label/
```



#### 参数

| 名称     | 类型 | 必填 | 描述   |
| -------- | ---- | ---- | ------ |
| lable_id | Int  | 是   | 标签id |

#### 请示示例

```json
{
    "lable_id":1
}
```



#### 返回结果

```json
{
    "result":{},
    "code":200,
    "msg":"success"
}
```



## 4.查看所有标签

```json
GET /api/v1/material/get_all_lable/
```



#### 返回结果

```json
{
    "result":[
        {"id":1,"name":"test1"},
    	{"id":2,"name":"test2"},
    ],
    "code":200,
    "msg":"success"
}
```





# 文件

## 1.编辑文件

```json
POST /api/v1/material/update_file/
```

#### 参数

| 名称          | 类型 | 必填 | 描述     |
| ------------- | ---- | ---- | -------- |
| file_id       | str  | 是   | 文件id   |
| introduce     | Str  | 否   | 简介     |
| label         | str  | 否   | 标签名   |
| directory_seq | str  | 否   | 目录序列 |
| mos           | str  | 否   | mos值    |
| d_mos         | str  | 否   | d_mos值  |
| psnr          | str  | 否   | psnr值   |
| vmaf          | str  | 否   | vmaf值   |

#### 请示示例

```json
{
    "file_id":1,
    "introduce":"文件简介",
    "label":"www",
    "directory_seq":"1",
    "mos":"22.33",
    "d_mos":"22.33",
    "psnr":"2.22",
    "vmaf":"2.22",
}
```

#### 返回结果

```json
{
    "result":{},
    "code":200,
    "msg":"success"
}
```



## 2.删除文件

```
POST /api/v1/material/delete_file/
```

#### 参数

| 名称      | 类型 | 必填 | 描述     |
| --------- | ---- | ---- | -------- |
| file_path | str  | 是   | 文件路径 |

#### 请示示例

```json
{
    "file_path":"/data/video_test/test.ts"
}
```



#### 返回结果

```json
{
    "result":{},
    "code":200,
    "msg":"success"
}
```



## 3.查看文件属性

```json
GET /api/v1/material/get_fileinfo/
```

#### 参数

| 名称    | 类型 | 必填 | 描述   |
| ------- | ---- | ---- | ------ |
| file_id | Int  | 是   | 文件id |

#### 请示示例

```json
{
    "file_id":1
}
```



#### 返回结果

```json
{
    "result":{
        "id":1,
        "file_catalogue":"所属目录",
        "file_name":"目录2",
        "file_format":"文件格式",
        "file_path":"/home/migu/xx.ts",
        "introduce":"备注"，
        "mos":"222",
        "d_mos":"22333",
        "psnr":"22.22",
        "vmaf":"22.33",      
    },
    "code":200,
    "msg":"success"
}
```





# 修改文件目录

## 1.修改文件存放目录

```
POST /api/v1/material/update_dir/
```

#### 参数

| 名称          | 类型 | 必填 | 描述           |
| ------------- | ---- | ---- | -------------- |
| dir_id        | id   | 是   | 文件存放目录id |
| parent_id     | Id   | 是   | 上级目录id     |
| introduce     | str  | 否   | 备注           |
| directory_seq | str  | 否   | 排序           |

#### 请示示例

```json
{
    "dir_id":1,
    "parent_id":1，
    "introduce":"简介",
    "directory_seq":"1"
}
```



#### 返回结果

```json
{
    "result":{},
    "code":200,
    "msg":"success"
}
```



## 2.查看目录属性

```json
GET /api/v1/material/get_dir/
```

#### 参数

| 名称      | 类型 | 必填 | 描述       |
| --------- | ---- | ---- | ---------- |
| dir_id    | int  | 是   | 目录id     |
| parent_id | Int  | 是   | 上级目录id |

#### 请示示例

```json
{
    "parent_id":1,
    "dir_id":2,
}
```



#### 返回结果

```json
{
    "result":[{
        "id":1,
        "name":"目录1",
        "directory_seq":"序列1",
        "introduce":"xxxxx"
    }],
    "code":200,
    "msg":"success"
}
```
