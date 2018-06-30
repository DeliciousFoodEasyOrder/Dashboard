# 补充性规格说明

# 修改历史
|版本|日期|描述|作者|
|:--:|:--:|:--:|:--:|
|V1.0|2018/06/05|第一个草案，进行基本补充说明|ZhangJiaqiao|


## 简介
本文档记录了好吃易点所有未在用例中描述的需求。

## 功能性
1. 日志和错误处理
</br>在服务端后台进行持久性存储，记录残生的所有错误。
2. 安全性
任何使用需要经过用户的认证，即要登陆后才可以执行。

## 可用性
人性因素：
1. 顾客点餐系统
    + 顾客能够在40cm外轻松识别手机上的文本和图片。
    + 避免使用红色和绿色，以方便色盲患者使用。
1. 商家管理系统
    + 店长能够在50cm外轻松识别电脑屏幕上的文本信息
    + 避免使用红色和绿色，以方便色盲患者使用。

快捷性：
</br>无错的点餐交易处理很重要，因为顾客希望能够快速点餐并用餐，否则会给他们的用餐体验带来负面影响。

提示性：
商家管理系统应有提示和报警，通过声音或者弹出框来提示店长。
## 可靠性
1. 可适应性
</br>好吃易点的不同用户在处理点餐时，都能够适应其不同的需求并完成业务。
2. 可配置性
好吃易点点餐系统业务比较简单，能够满足大多数餐馆的业务需求，且因为运行在网页上，所以只需一台拥有浏览器的电脑即可完成配置。对于顾客端，只需有一台能够安装小程序的智能手机即可完成配置。

## 实现约束
整套系统采用多种语言技术进行实现，前端分别用Web2.0和小程序，后端则采用go语言，每部分完成其固有的逻辑功能，实现逻辑分离，且易于拥有不同技能的成员开发。

## 免费开源构建
由于项目较小且没有资金支持，所以我们在项目中用的都是免费的开源框架和构件。
1. Vue.js渐进式JavaScript框架
2. elementUI
3. negroni go服务器框架
4. mux go服务器路由
5. go-jwt-middleware jwt中间件
## 接口
1. 重要硬件
+ 支持微信小程序的智能手机
+ 支持主流浏览器的PC

## 法律问题
我们全部使用免费开源的构件，但是因为我们暂时不进行商业应用，所以不必关心法律问题。