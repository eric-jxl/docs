(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{297:function(t,a,n){"use strict";n.r(a);var s=n(14),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"面经"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面经"}},[t._v("#")]),t._v(" 面经")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#q-高并发情况下-如何保障接口的幂等性"}},[t._v("Q:高并发情况下，如何保障接口的幂等性?")])]),a("li",[a("a",{attrs:{href:"#q-高并发下保证顺序消费"}},[t._v("Q:高并发下保证顺序消费")])]),a("li",[a("a",{attrs:{href:"#q-rabbitmq-pub-与-sub-消费能力不一致-如何解决"}},[t._v("Q:RabbitMQ pub 与 sub 消费能力不一致，如何解决？")])]),a("li",[a("a",{attrs:{href:"#q-celery-保证结果幂等性"}},[t._v("Q:Celery 保证结果幂等性")])]),a("li",[a("a",{attrs:{href:"#q-celery-异步执行可能出现的问题及解决方案"}},[t._v("Q:Celery 异步执行可能出现的问题及解决方案")])]),a("li",[a("a",{attrs:{href:"#q-python-保障并发读写一致性"}},[t._v("Q:Python 保障并发读写一致性？")])])])]),a("p"),t._v(" "),a("h3",{attrs:{id:"q-高并发情况下-如何保障接口的幂等性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-高并发情况下-如何保障接口的幂等性"}},[t._v("#")]),t._v(" Q:高并发情况下，如何保障接口的幂等性?")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[t._v("在高并发场景下，保障接口的幂等性是非常重要的。下面列出了几种常用的方法：\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" 唯一 ID：在请求中使用唯一 ID 标识每个请求，服务器在处理请求时可以检测该 ID 是否已经处理过。这种方式通常需要依赖于数据存储机制，例如数据库、缓存等。\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" Token 机制：在请求中使用 Token 标识每个请求，服务器在处理请求时可以检测该 Token 是否已经被使用。这种方式通常需要使用分布式缓存或者数据库来存储 Token 信息。\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" 悲观锁：在处理请求时使用悲观锁，即在处理请求之前加锁，确保同一时间只有一个线程可以处理请求。这种方式通常适用于请求处理时间较短的场景。\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("4.")]),t._v(" 乐观锁：在处理请求时使用乐观锁，在更新数据时先判断数据版本是否一致，如果不一致则放弃更新。这种方式通常适用于请求处理时间较长的场景。\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("5.")]),t._v(" 令牌桶算法：使用令牌桶算法来控制请求处理的速率，避免请求过多导致系统压力过大。令牌桶算法实现方式很多，包括基于 Redis、Zookeeper 等分布式存储平台的实现。\n\n需要注意的是，以上方法并不是完全可靠的。在特定情况下仍可能出现重复请求或者并发处理的问题。因此，在实际应用中需要综合考虑系统的性能和业务特点，选择一种适合的方法来保障接口幂等性。同时，需要对各种异常情况进行充分的测试和预防，提高系统的稳定性和鲁棒性。\n")])])]),a("h3",{attrs:{id:"q-高并发下保证顺序消费"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-高并发下保证顺序消费"}},[t._v("#")]),t._v(" Q:高并发下保证顺序消费")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[t._v("在 RabbitMQ 中，要保证顺序消费可以采用以下几种方法：\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" 单队列单消费者模式：使用单队列单消费者模式可以保证消息的顺序性。这种方式下，所有消息都会先被存储在同一个队列中，然后由同一个消费者按照顺序消费。\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" 多队列单消费者模式：如果需要多个消费者并行处理消息，但是又需要保证消息的顺序性，可以采用“轮询分配”方式。即将不同的消息发送到不同的队列中，并且每个队列只有一个消费者。这样就可以通过控制消息进入不同队列的速度来保证消息的顺序性。\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" 使用消息标识：在发送消息时，可以为每个消息添加一个唯一的标识符（如消息 ID），然后在消费者端对消息进行排序。消费者可以维护一个消息列表，在接收到消息时将其加入列表，并按照标识符顺序排列。然后再按照顺序逐个处理消息。\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("4.")]),t._v(" 自定义插件：RabbitMQ 提供了插件机制，可以根据自己的需求编写定制化插件。例如，可以编写一个插件，在消息进入队列之前，先判断该消息的相关属性（如路由键）是否与已经入队的消息的相关属性相同，如果相同则将其加入到该消息的队列中，否则将其暂时缓存。等待前面的消息处理完毕后再继续处理后面的消息。\n\n需要注意的是，在以上方法中，单队列单消费者模式的性能最好，但是不适合并发消费；多队列单消费者模式适合需要并行处理的场景，但是增加了队列和消费者的数量；使用消息标识需要额外的排序操作，对性能有一定影响；自定义插件需要编写定制化代码，实现难度较大。根据具体情况选择最适合的方法可以提高消费效率，并保证消息的顺序性。\n\n在分布式高并发场景下，保证消息顺序性需要考虑更多因素。以下是一些常用的方法：\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" 使用分区顺序：将消息按照其关键字（如订单 ID）的哈希值进行分区，每个分区对应一个队列。同一个分区内的消息只会被同一个消费者处理，不同分区之间的消息则可以并行处理。\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" 消费者并行处理：针对同一个分区内的消息，可以使用多个消费者并行处理。这样可以提高处理效率，同时不影响消息的顺序性。\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" 消息缓存和重试：在消费者端消费消息时，可以采用一些技术手段来保证消费的幂等性，避免重复消费。如果某个消息的处理失败，可以将其缓存起来，并定期重试，确保消息被正确处理。\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("4.")]),t._v(" 分布式事务：在一些特殊场景下，需要保证消息的处理与其他业务操作的原子性。这时可以采用分布式事务机制，例如基于 XA 协议实现的分布式事务框架 Atomikos、Bitronix 等。\n\n需要注意的是，在分布式高并发场景下，为了保证系统的吞吐量，通常需要使用异步方式处理消息。这意味着消费者处理消息的时间长短可能存在差异，从而导致消息的顺序性无法保证。综合使用以上方法，可以在保证消息顺序性的前提下尽可能提高系统的吞吐量和稳定性。\n")])])]),a("h3",{attrs:{id:"q-rabbitmq-pub-与-sub-消费能力不一致-如何解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-rabbitmq-pub-与-sub-消费能力不一致-如何解决"}},[t._v("#")]),t._v(" Q:RabbitMQ pub 与 sub 消费能力不一致，如何解决？")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" 提高消费者的处理速度：\n   增加消费者数量，可以通过在消费者端启动多个进程或线程来实现。如果使用的是 RabbitMQ 提供的客户端库，如 pika 或 amqp，那么可以使用 channel.basic_qos 方法设置 prefetch_count 参数控制每个消费者在接收消息时最多能够处理的未确认消息数量。\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" 增加 RabbitMQ 节点：\n   可以通过在不同机器上部署 RabbitMQ 节点，将消息队列负载分散到不同的节点上。如果使用集群模式，可以通过添加新节点的方式扩展 RabbitMQ 集群。\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" 调整 RabbitMQ 参数：\n   根据具体情况调整 RabbitMQ 参数，可以通过修改 rabbitmq.config 文件或者在启动命令中指定参数来实现。例如，可以增大 vm_memory_high_watermark 参数值以增加内存阈值；可以增大 heartbeat_timeout 参数值以增加心跳超时时间等\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("4.")]),t._v(" 使用 ACK 确认机制：\n   在消费者端通常使用 basic_ack 方法发送 ACK 确认消息来表示已成功消费该消息。在消费者出现异常时，可以使用 basic_nack 和 basic_reject 方法拒绝消费消息，并将消息返回给 RabbitMQ，让其重新分发给其他消费者\\*。\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("5.")]),t._v(" 消息压缩：\n   可以使用 gzip 或 zlib 等压缩算法对消息进行压缩，然后再发送到 RabbitMQ。在消费者端接收到消息后，可以先解压再进行处理。\n\n需要注意的是，在实际应用中，不同情况下可能需要使用不同的方法来解决发布订阅速度不一致的问题。同时，还需要考虑系统的可靠性、安全性、稳定性等方面的因素。\n")])])]),a("h3",{attrs:{id:"q-celery-保证结果幂等性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-celery-保证结果幂等性"}},[t._v("#")]),t._v(" Q:Celery 保证结果幂等性")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[t._v("在 Celery 中，保证结果的幂等性是非常重要的，因为同一个任务可能会被多次执行，而且在任务执行过程中可能会出现很多异常情况。以下是一些实现方法：\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" 使用 Redis 或其他分布式锁来确保任务的唯一性。\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" 在任务执行前查询某个状态，并以此判断是否执行该任务。例如，在处理用户订单的任务中，可以查询该订单是否已经被处理过了，如果已经处理过了，则不再执行此任务。\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" 对于需要进行数据更新的任务，在更新前先查询某个字段是否已经被更新过了，如果已经更新过了，则不再重复更新。例如，在更新用户账户余额的任务中，可以查询该用户账户余额是否已经被更新过，如果已经更新过，则不再执行此任务。\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("4.")]),t._v(" 对于需要进行数据删除的任务，可以使用逻辑删除，避免重复删除同一条记录，或者查询是否已经被删除。\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("5.")]),t._v(" 在任务执行完成后，可以记录任务执行的结果，并将执行结果存储到数据库或缓存中，以便后续查询和验证。\n\n需要注意的是，以上方法只是一些示例，具体的实现方法需要根据业务场景和数据模型进行具体设计。同时，需要对任务执行过程中可能出现的异常情况进行详细的分析和测试，以确保任务的幂等性。\n")])])]),a("h3",{attrs:{id:"q-celery-异步执行可能出现的问题及解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-celery-异步执行可能出现的问题及解决方案"}},[t._v("#")]),t._v(" Q:Celery 异步执行可能出现的问题及解决方案")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[t._v("在 Celery 中，异步执行任务的同时，可能会出现以下一些问题：\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" 任务重复执行：如果由于某种原因，任务在执行过程中被意外中断，Celery 将尝试重新启动该任务。这可能导致任务被多次执行。\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" 任务执行超时：如果任务需要执行的时间过长，或者依赖于外部资源，例如网络连接或数据库操作，那么可能会超出 Celery 的默认执行超时时间。如果在超时之前任务没有完成，则 Celery 将终止该任务。\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" 内存泄漏：如果任务需要大量内存或者存在内存泄漏问题，那么可能会导致 Celery 的工作进程崩溃或者系统资源耗尽。\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("4.")]),t._v(" 并发竞争：如果多个任务需要同时访问共享资源，例如数据库或缓存，那么可能会出现并发竞争问题，导致数据不一致或者性能下降。\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("5.")]),t._v(" 大量任务积压：如果任务提交速度过快，而任务处理速度跟不上，那么可能会导致大量任务积压，最终影响系统的稳定性和可用性。\n\n针对以上问题，可以采取以下一些措施：\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" 设置任务唯一标识，避免任务重复执行。\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" 设置适当的任务执行超时时间，并根据实际情况进行调整。\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" 对任务执行的资源消耗情况进行监控，避免内存泄漏等问题。\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("4.")]),t._v(" 在并发访问时使用锁或者限制并发数，避免竞争问题。\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("5.")]),t._v(" 优化任务处理性能，例如使用分布式架构、增加工作进程数量等方式，提升任务处理速度和系统吞吐量。\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("6.")]),t._v(" 监控任务队列长度和处理速度，及时采取扩容等措施避免任务积压。\n\n需要注意的是，以上措施只是一些示例，具体的应对方法需要根据业务场景和实际情况进行具体设计。同时，也需要对异步执行的任务进行详细的测试和评估，确保任务可以稳定、高效地执行。\n")])])]),a("h3",{attrs:{id:"q-python-保障并发读写一致性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-python-保障并发读写一致性"}},[t._v("#")]),t._v(" Q:Python 保障并发读写一致性？")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[t._v("在 Python 中，可以采用以下几种方式来保障并发读写的一致性：\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" 采用线程安全的数据结构：Python 提供了一些线程安全的数据结构，例如 queue.Queue、threading.Lock、threading.RLock 等。这些数据结构可以帮助我们在多个线程之间进行同步和协调。\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" 使用锁机制：锁是一种经典的同步机制，它可以控制对共享资源的访问。Python 中提供了 threading.Lock 和 threading.RLock 两种锁实现，可以用来保证多线程之间的互斥性。\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" 使用条件变量：条件变量是一种高级的同步机制，它可以让一个或多个线程等待某个特定条件的出现。Python 中提供了 threading.Condition 类用于实现条件变量。\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("4.")]),t._v(" 使用信号量：信号量是一种计数器，它可以用来限制对共享资源的并发访问。Python 中提供了 threading.Semaphore 类用于实现信号量。\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("5.")]),t._v(" 使用读写锁：读写锁是一种特殊的锁，它允许多个读操作同时进行，但只允许一个写操作进行。Python 中提供了 threading.RLock 和 threading.Lock 类用于实现读写锁。\n\n需要注意的是，以上方法并不是适用于所有场景的通用解决方案，具体应该根据业务场景和数据模型进行选择和优化。同时，在实际应用中，需要对并发读写的一致性进行详细的测试和评估，以确保系统的正确性和可靠性。\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);