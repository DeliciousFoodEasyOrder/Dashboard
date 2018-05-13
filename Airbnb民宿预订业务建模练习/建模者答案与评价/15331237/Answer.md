参看Airbnb民宿预订.md，

#绘制Airbnb民宿预订系统的用例图。

![这里写图片描述](https://img-blog.csdn.net/20180512153151844?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20xODcxODMwMDQ3MQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
#至少完成一个详述用例，并绘制该用例的活动图。

**民宿预订系统用例**
**范围**：Airbnb民宿预订
**级别**：用户目标
**主要参与者**：住客
**涉及及其关注点**：
**食客**：希望能选择合心意，无偏差的民宿
**餐厅管理者**：希望能够基本无延迟的得到订单确认的通知。
**前置条件**：食客必须注册登录应用。
**成功保证**：准确及时地完成订单确认的消息传递，及时更新房源真实信息。
**主成功场景**：
住客输入民宿查找范围后浏览并选择民宿查看详情
住客找到合意的民宿后发起预定订单
扩展：房主在发现订单数据有异常时应可以对此提出疑问，便立刻向后端进行同步数据。
**交替场景**：

 1. 住客未找到合意的民宿
 2. 住客合意民宿没有空闲房源

**特殊需求**：应支持多国语言
**技术和数据变元素**：确认订单后，支付成功后才提交订单。
**发生频率**：经常发生
**杂项**：UI要做的简洁易懂

![这里写图片描述](https://img-blog.csdn.net/20180512154201696?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20xODcxODMwMDQ3MQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

#对Airbnb民宿预订系统进行领域建模。

![这里写图片描述](https://img-blog.csdn.net/2018051215435529?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20xODcxODMwMDQ3MQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

#至少选择一个系统中的对象，进行状态建模。
**状态集合**:

S={新建订单, 订单已注册, 订单已授权, 订单已确认, 订单已取消, 订单已出单}

**事件集合**：

E={创建, 注册, 授权, 修改, 支付, 出单, 取消}

![这里写图片描述](https://img-blog.csdn.net/20180512154552119?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20xODcxODMwMDQ3MQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

#至少选择一个系统中的场景，绘制系统顺序图。
![这里写图片描述](https://img-blog.csdn.net/20180512160956134?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20xODcxODMwMDQ3MQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)