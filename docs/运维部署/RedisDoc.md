# Redis 安装与配置

```shell
#编译安装
$ wget https://download.redis.io/releases/redis-6.2.1.tar.gz
$ tar xzf redis-6.2.1.tar.gz
$ cd redis-6.2.1
$ make
$ make install
$ apt install redis-tools
$ src/redis-server

#试验交互
$ src/redis-cli

#Mac ：brew update && brew install redis
#Ubuntu：apt-get update && apt-get upgrade && apt-get install redis
vi /etc/redis/redis.conf 
#bind 127.0.0.1
daemonize yes   #redis-server 后台启动
requirepass 1qaz2wsx   #设置redis密码
ps -ef |grep redis
redis-cli INFO | grep ^db
```



## Python Redis 连接

```python
 pip install redis
 import redis
 pool = redis.ConnectionPool(host=host, port=port, password=password, db=db, decode_responses=True) #decode_responses 防止中文编码乱码
  cursor = redis.StrictRedis(connection_pool=pool) 
#Redis 类用于向后兼容旧版本的redis-py，对Redis的接口实现做了部分修改Redis类中将参数num和value的顺序交换了
#推荐使用redis.StrictRedis 和Redis命令行语法兼容
```



# redis 数据类型

## 1.String  
***string 类型是二进制安全的。意思是 redis 的 string 可以包含任何数据。比如jpg图片或者序列化的对象。string 类型是 Redis 最基本的数据类型，string 类型的值最大能存储 512M*B**
**常用命令**：**get、set、incr、decr、mget**等

**实现方式**：String在redis内部存储默认就是一个字符串，被redisObject所引用，当遇到incr,decr等操作时会转成数值型进行计算，此时redisObject的encoding字段为int。

> 获取字符串长度
> 往字符串append内容
> 设置和获取字符串的某一段内容
> 设置及获取字符串的某一位（bit）
> 批量设置一系列字符串的内容

```redis
redis> SET key value
"OK"
redis> get key
value
redis > EXPIRE key seconds
redis > ttl key #-1代表永久
(integer) -1
```



## 2.Hash
***Hash 是一个键值(key => value)对集合。Redis hash 是一个 string 类型的 field 和 value 的映射表，hash 特别适合用于存储对*象**

**常用命令**.*HMSET, HGET*

```redis
redis> HSET myhash field1 "Hello" field2 "World"
"OK"
redis> HGET myhash field1
"Hello"
redis> HGETALL myhash #获取所有键值
"Hello"
"World"
```





## 3.List

***list 列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素到列表的头部（左边）或者尾部（右边）***

**常用命令**：***lpush（添加左边元素）,rpush,lpop（移除左边第一个元素）,rpop,lrange（获取列表片段，LRANGE key start stop）等***

**实现方式**：Redis list的实现为一个双向链表，即可以支持反向查找和遍历，更方便操作，不过带来了部分额外的内存开销，Redis内部的很多实现，包括发送缓冲队列等也都是用的这个数据结构。

```redis
将一个或多个值插入到列表头部
LPUSH key value1 [value2] 

获取列表指定范围内的元素
LRANGE key start stop 

移除列表的最后一个元素，返回值为移除的元素。
RPOP key 
```



## 4.Set

***set 是string类型的无序集合。集合是通过hashtable实现的，概念和数学中个的集合基本类似，可以交集，并集，差集等等，set中的元素是没有顺序的。所以添加，删除，查找的复杂度都是O(1)***

**常用命令**：***sadd,spop,smembers,sunion***

**实现方式**： *set 的内部实现是一个 value永远为null的HashMap，实际就是通过计算hash的方式来快速排重的，这也是set能提供判断一个成员是否在集合内的原因*

使用场景： ①交集，并集，差集：(Set)

```redis
sadd key member
```



## 5.Zset

**zset 和 set 一样也是string类型元素的集合,且不允许重复的成员。 *zadd 命令：*添加元素到集合，元素在集合中存在则更新对应score**

**常用命令**：***zadd,zrange,zrem,zcard等***

**实现方式**：Redis sorted set的内部使用HashMap和跳跃表(SkipList)来保证数据的存储和有序，HashMap里放的是成员到score的映射，而跳跃表里存放的是所有的成员，排序依据是HashMap里存的score,使用跳跃表的结构可以获得比较高的查找效率，并且在实现上比较简单。

```redis
zadd key score member

```







| 类型                 | 简介                                                   | 特性                                                         | 场景                                                         |
| -------------------- | ------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| String(字符串)       | 二进制安全                                             | 可以包含任何数据,比如jpg图片或者序列化的对象,一个键最大能存储512M |                                                              |
| Hash(字典)           | 键值对集合,即编程语言中的Map类型                       | 适合存储对象,并且可以像数据库中update一个属性一样只修改某一项属性值(Memcached中需要取出整个字符串反序列化成对象修改完再序列化存回去) | 存储、读取、修改用户属性                                     |
| List(列表)           | 链表(双向链表)                                         | 增删快,提供了操作某一段元素的API                             | 1、最新消息排行等功能(比如朋友圈的时间线) 2、消息队列        |
| Set(集合)            | 哈希表实现,元素不重复                                  | 1、添加、删除、查找的复杂度都是O(1) 2、为集合提供了求交集、并集、差集等操作 | 1、共同好友 2、利用唯一性,统计访问网站的所有独立ip 3、好友推荐时,根据tag求交集,大于某个阈值就可以推荐 |
| Sorted Set(有序集合) | 将Set中的元素增加一个权重参数score,元素按score有序排列 | 数据插入集合时,已经进行天然排序                              | 1、排行榜 2、带权重的消息队列                                |



```python
#1. 基于List的 LPUSH+BRPOP 的实现
使用rpush和lpush操作入队列，lpop和rpop操作出队列。

List支持多个生产者和消费者并发进出消息，每个消费者拿到都是不同的列表元素。
但是当队列为空时，lpop和rpop会一直空轮训，消耗资源；所以引入阻塞读blpop和brpop（b代表blocking），阻塞读在队列没有数据的时候进入休眠状态，一旦数据到来则立刻醒过来，消息延迟几乎为零。

#2. SUB/PUB，订阅/发布模式
SUBSCRIBE，用于订阅信道

PUBLISH，向信道发送消息

UNSUBSCRIBE，取消订阅

此模式允许生产者只生产一次消息，由中间件负责将消息复制到多个消息队列，每个消息队列由对应的消费组消费。

可见，Pub/Sub 模式不适合做消息存储，消息积压类的业务，而是擅长处理广播，即时通讯，即时反馈的业务。

#3. 基于Sorted-Set的实现
Sortes Set(有序列表)，类似于java的SortedSet和HashMap的结合体，一方面她是一个set，保证内部value的唯一性，另一方面它可以给每个value赋予一个score，代表这个value的排序权重。内部实现是“跳跃表”。

有序集合的方案是在自己确定消息顺ID时比较常用，使用集合成员的Score来作为消息ID，保证顺序，还可以保证消息ID的单调递增。通常可以使用时间戳+序号的方案。确保了消息ID的单调递增，利用SortedSet的依据Score排序的特征，就可以制作一个有序的消息队列了。

#4. 基于Stream类型的实现
Stream为redis 5.0后新增的数据结构。支持多播的可持久化消息队列，实现借鉴了Kafka设计。
Redis Stream的结构如上图所示，它有一个消息链表，将所有加入的消息都串起来，每个消息都有一个唯一的ID和对应的内容。消息是持久化的，Redis重启后，内容还在。




'''
生产者生产速度大于消费者消费速度，面临消息不断堆积的问题，随着消息数据的堆积，队列是开启限流措施，还是丢弃某些消息，更或者是把消息数据进行持久化。对于基于redis实现的消息队列，一般为可忍受部分消息丢失的业务，所以很多人选择丢弃消息的方案。
另一种方案是基于redis单线程机制，可以增加消费者数量，这也是仅仅针对消息只被消费一次的场景。当然也可以选择持久化方案，但是会对redis的性能产生影响'''

```





##Celery 分布式异步架构



<img src="/Users/eric/Downloads/Doc/c8892f2b081d79d3e6efa402ee83aaaa.png" alt="Celery 分布式异步架构" style="zoom:100%;" />









