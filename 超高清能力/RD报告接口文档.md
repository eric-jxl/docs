# RD 报告 API 文档

请求 URl 前缀本地例如(http:localhost:8000),下面用 URL 代替

# 前置条件

_1、supervisor 启动 Django 进程_

_2、supervisor 启动 celery 队列==celery_all_task==和==celery_msu== 或者启动==report:_==,启动方式==sudo supervisorctl== 进入命令行，==start celery*all_task==和 ==start_celery_msu== ,或者==start report:*==(相当于启动了前面两个队列)\_

3、检查 Redis 和 Mysql 是否正常启动

## 1、新建任务

```bash
POST URL:/api/vmdapp/new_task/
```

### 参数列表(body json 格式)

| 名称       | 类型  | 是否必须 | 描述     |
| ---------- | ----- | -------- | -------- |
| name       | `str` | 是       | 序列名称 |
| scene_type | `str` | 是       | 场景类型 |

### Headers 参数

| 名称          | 类型  | 是否必须 | 描述                             |
| ------------- | ----- | -------- | -------------------------------- |
| Authorization | `str` | 是       | 请求 Token 令牌(有效时长 2 小时) |

### 请求示例

```json
POST URL:/api/vmdapp/new_task/
Headers
Authorization  JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUyNjk0MDA5LCJpYXQiOjE2NTI2ODY4MDksImp0aSI6IjRhMmQ3NzgxM2UxNTQ0NDQ4YWY1YWIyY2I3YTEwZWQ3IiwidXNlcl9pZCI6MX0.o0FM25jDWjAYa8ZZspIax10xHYlEe8H1feA5BZS-fKc

{
    "name":"Test4",
    "scene_type":"近景类型"
}
```

### 返回示例

```json
{
  "code": 2000,
  "data": {
    "name": "Test4",
    "scene_type": "近景类型"
  },
  "msg": "新增任务成功"
}
```

## 2、上传待测视频

```bash
POST URL:/api/vmdapp/upload_video/{task_id}/
```

### 参数列表

| 名称       | 类型  | 是否必须 | 描述             |
| ---------- | ----- | -------- | ---------------- |
| task_id    | `int` | 是       | 任务 ID          |
| video_name | `str` | 是       | 视频名称         |
| file_path  | `str` | 是       | 视频文件存放路径 |

### Headers 参数

| 名称          | 类型  | 是否必须 | 描述                             |
| ------------- | ----- | -------- | -------------------------------- |
| Authorization | `str` | 是       | 请求 Token 令牌(有效时长 2 小时) |

### 请求示例

```json
POST URL:/api/vmdapp/upload_video/10/
Headers
Authorization  JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUyNjk0MDA5LCJpYXQiOjE2NTI2ODY4MDksImp0aSI6IjRhMmQ3NzgxM2UxNTQ0NDQ4YWY1YWIyY2I3YTEwZWQ3IiwidXNlcl9pZCI6MX0.o0FM25jDWjAYa8ZZspIax10xHYlEe8H1feA5BZS-fKc

{
    "video_name":"信源-1080p-cut.ts",
    "file_path":"CBA-0407-裁剪视频ts/1080p/信源-1080p-cut.ts"
}
```

### 返回

```json
{
  "code": 2000,
  "data": {
    "video_task": 10,
    "video_name": "信源-1080p-cut.ts",
    "video_path": "/data/video_test/CBA-0407-裁剪视频ts/1080p/信源-1080p-cut.ts"
  },
  "msg": "上传视频成功"
}
```

## 3、视频转码

```bash
POST URL:/api/vmdapp/transcoding_video/{video_id}/
```

### 参数列表

| 名称     | 类型  | 是否必须 | 描述    |
| -------- | ----- | -------- | ------- |
| video_id | `int` | 是       | 视频 id |

### Headers 参数

| 名称          | 类型  | 是否必须 | 描述                             |
| ------------- | ----- | -------- | -------------------------------- |
| Authorization | `str` | 是       | 请求 Token 令牌(有效时长 2 小时) |

### 请求示例

```json
POST URL:/api/vmdapp/transcoding_video/6/
Headers
Authorization  JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUyNjk0MDA5LCJpYXQiOjE2NTI2ODY4MDksImp0aSI6IjRhMmQ3NzgxM2UxNTQ0NDQ4YWY1YWIyY2I3YTEwZWQ3IiwidXNlcl9pZCI6MX0.o0FM25jDWjAYa8ZZspIax10xHYlEe8H1feA5BZS-fKc


```

### 返回示例

```json
{
  "code": 2000,
  "data": null,
  "msg": "视频转码成功"
}
```

## 4、一键检测

```bash
POST URL:/api/vmdapp/video_check/{int:video_id}/
```

### 参数列表

| 名称     | 类型  | 是否必须 | 描述    |
| -------- | ----- | -------- | ------- |
| video_id | `int` | 是       | 视频 ID |

### Headers 参数

| 名称          | 类型  | 是否必须 | 描述                             |
| ------------- | ----- | -------- | -------------------------------- |
| Authorization | `str` | 是       | 请求 Token 令牌(有效时长 2 小时) |

### 请求示例

```json
POST URL:/api/vmdapp/video_check/4/
Headers
Authorization  JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUyNjk0MDA5LCJpYXQiOjE2NTI2ODY4MDksImp0aSI6IjRhMmQ3NzgxM2UxNTQ0NDQ4YWY1YWIyY2I3YTEwZWQ3IiwidXNlcl9pZCI6MX0.o0FM25jDWjAYa8ZZspIax10xHYlEe8H1feA5BZS-fKc
```

### 返回示例

```json
{
  "code": 2000,
  "data": null,
  "msg": "一键检测完毕"
}
```

### 5、生成 word 报告

```bash
POST URL:/api/vmdapp/save_word/int:task_id/
```

### 参数列表

| 名称    | 类型  | 是否必须 | 描述        |
| ------- | ----- | -------- | ----------- |
| task_id | `int` | 是       | 任务序列 ID |

### 请求示例

```json
POST URL:/api/vmdapp/save_word/4/
Headers
Authorization  JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUyNjk0MDA5LCJpYXQiOjE2NTI2ODY4MDksImp0aSI6IjRhMmQ3NzgxM2UxNTQ0NDQ4YWY1YWIyY2I3YTEwZWQ3IiwidXNlcl9pZCI6MX0.o0FM25jDWjAYa8ZZspIax10xHYlEe8H1feA5BZS-fKc
```

### 返回示例

```json
{
    "code": 2000,
    "data": null,
    "msg": "生成word报告成功"
}
# word 存放地址为/data/video_test/doc/下。名称为task_xXx.docx
```
