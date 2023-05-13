## 核心业务



### `record`

`record` 适当地定义或更新数据库记录，它具有以下属性：

- `model` （需要）

  要创建（或更新）的模型的名称

- `id`

  此记录的[外部标识符](https://www.odoo.com/documentation/10.0/glossary.html#term-external-identifier)。强烈建议提供一个对于记录创建，允许后续定义修改或引用此记录对于记录修改，要修改的记录

- `context`

  创建记录时使用的上下文

- `forcecreate`

  在更新模式下，是否应该创建记录（如果它不存在）需要[外部ID](https://www.odoo.com/documentation/10.0/glossary.html#term-external-id)，默认为`True`。

### `field`

每条记录都可以由`field`标签组成，定义创建记录时要设置的值。`record`没有的A `field`将使用所有默认值（创建）或不执行任何操作（更新）。

A `field`具有必需`name`属性，要设置的字段的名称以及定义值本身的各种方法：

- 没有

  如果没有为该字段提供值，`False`则将在该字段上设置隐式。可用于清除字段，或避免使用字段的默认值。

- `search`

  对于[关系领域](https://www.odoo.com/documentation/10.0/reference/orm.html#reference-orm-fields-relational)，应该是一个[域](https://www.odoo.com/documentation/10.0/reference/orm.html#reference-orm-domains)场上的模型。将评估域，使用它搜索字段的模型，并将搜索结果设置为字段的值。如果字段是a，则仅使用第一个结果[`Many2one`](https://www.odoo.com/documentation/10.0/reference/orm.html#odoo.fields.Many2one)

- `ref`

  如果`ref`提供了属性，则其值必须是有效的 [外部标识](https://www.odoo.com/documentation/10.0/glossary.html#term-external-id)，该[标识](https://www.odoo.com/documentation/10.0/glossary.html#term-external-id)将被查找并设置为字段的值。主要用于[`Many2one`](https://www.odoo.com/documentation/10.0/reference/orm.html#odoo.fields.Many2one)和 [`Reference`](https://www.odoo.com/documentation/10.0/reference/orm.html#odoo.fields.Reference)领域

- `type`

  如果`type`提供了属性，则用于解释和转换字段的内容。字段的内容可以使用`file`属性通过外部文件提供，也可以通过节点的主体提供。可用的类型有：`xml`， `html`将子项提取`field`为单个文档，评估使用表单指定的任何[外部标识](https://www.odoo.com/documentation/10.0/glossary.html#term-external-id)`%(external_id)s`。 `%%`可用于输出实际*％*符号。`file`确保字段内容是当前模型中的有效文件路径，将该对保存为字段值`*module*,*path*``char`将字段内容直接设置为字段的值而不进行任何更改`base64`[base64](http://tools.ietf.org/html/rfc3548.html#section-3) - 对字段的内容进行编码，与该`file` *属性*结合使用，例如将图像数据加载到附件中`int`将字段的内容转换为整数并将其设置为字段的值`float`将字段的内容转换为浮点数并将其设置为字段的值`list`， `tuple`应包含任意数量的`value`具有相同属性的元素`field`，每个元素解析为生成的元组或列表的项，并将生成的集合设置为字段的值

- `eval`

  对于以前的方法不适合的情况，`eval` 属性只是评估它提供的任何Python表达式，并将结果设置为字段的值。评估上下文包含的各种模块（`time`，`datetime`， `timedelta`，`relativedelta`），解决了函数[外部标识符](https://www.odoo.com/documentation/10.0/glossary.html#term-external-identifiers)（`ref`）和如果适用的当前场中的模型对象（`obj`）

### `delete`

该`delete`标签可以删除先前定义的任何数量的记录。它具有以下属性：

- `model` （需要）

  应删除指定记录的模型

- `id`

  要删除的记录的[外部标识](https://www.odoo.com/documentation/10.0/glossary.html#term-external-id)

- `search`

  一个[域，](https://www.odoo.com/documentation/10.0/reference/orm.html#reference-orm-domains)用于查找要删除的模型的记录

`id`并且`search`是独家的

### `function`

该`function`标签调用模型，以及提供的参数的方法。它有两个必需参数`model`，`name`分别指定要调用的方法的模型和名称。

可以使用`eval`（应该评估一系列参数来调用方法）或`value`元素（参见`list` 值）来提供参数。

### `workflow`

该`workflow`标签将信号发送到一个现有的工作流程。可以通过`ref`属性（现有工作流的[外部标识](https://www.odoo.com/documentation/10.0/glossary.html#term-external-id)）或`value`返回工作流的标识的标记来指定工作流。

标签还具有两个必需属性`model`（链接到工作流的模型）和`action`（要发送到工作流的信号的名称）。

## 快捷键

由于Odoo的一些重要结构模型很复杂且涉及，因此数据文件提供了使用[记录标记](https://www.odoo.com/documentation/10.0/reference/data.html#reference-data-record)定义它们的更短替代方法 ：

### `menuitem`

定义`ir.ui.menu`具有多个默认值和回退的记录：

- 父菜单

  如果`parent`设置了属性，则它应该是 另一个菜单项的[外部ID](https://www.odoo.com/documentation/10.0/glossary.html#term-external-id)，用作新项的父项如果未`parent`提供，则尝试将该`name`属性解释为`/`分离的菜单名称序列，并在菜单层次结构中查找位置。在该解释中，自动创建中间菜单否则菜单被定义为“顶级”菜单项（*不是*没有父项的菜单）

- 菜单名称

  如果未`name`指定任何属性，则尝试从链接的操作中获取菜单名称（如果有）。否则使用记录`id`

- 组

  甲`groups`属性被解释为逗号分隔的序列 [外部标识符](https://www.odoo.com/documentation/10.0/glossary.html#term-external-identifiers)为`res.groups`模型。如果 [外部标识符](https://www.odoo.com/documentation/10.0/glossary.html#term-external-identifier)以减号（`-`）为前缀，则该组将从菜单的组中*删除*

- `action`

  如果指定，则该`action`属性应该是 菜单打开时要执行的操作的[外部id](https://www.odoo.com/documentation/10.0/glossary.html#term-external-id)

- `id`

  菜单项的[外部ID](https://www.odoo.com/documentation/10.0/glossary.html#term-external-id)



### `template`

创建一个[只](https://www.odoo.com/documentation/10.0/reference/views.html#reference-views-qweb)需要[视图](https://www.odoo.com/documentation/10.0/reference/views.html#reference-views-qweb)`arch` 部分的[QWeb视图](https://www.odoo.com/documentation/10.0/reference/views.html#reference-views-qweb)，并允许一些*可选*属性：

- `id`

  视图的[外部标识符](https://www.odoo.com/documentation/10.0/glossary.html#term-external-identifier)

- `name`，`inherit_id`，`priority`

  与相应字段相同`ir.ui.view`（nb：`inherit_id` 应该是[外部标识符](https://www.odoo.com/documentation/10.0/glossary.html#term-external-identifier)）

- `primary`

  如果设置为`True`并与a组合`inherit_id`，则将视图定义为主要视图

- `groups`

  逗号分隔的组[外部标识符](https://www.odoo.com/documentation/10.0/glossary.html#term-external-identifiers)列表

- `page`

  如果设置为`"True"`，则模板是网站页面（可链接到，可删除）

- `optional`

  `enabled`或者`disabled`，是否可以禁用视图（在网站界面中）及其默认状态。如果未设置，则始终启用视图。

### `report`

创建`ir.actions.report.xml`具有几个默认值的记录。

通常只是代理属性到相应的字段 `ir.actions.report.xml`，但也会自动在报告的“ 更多”菜单中创建项目 `model`。