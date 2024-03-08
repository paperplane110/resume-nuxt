---
title: "网页表单基础"
description: '今天让我们来了解一些关于网页表单的基础知识'
date: '2023/03/12'
image:
    src: '/img/articles/12_intro_form/intro_form_cover.jpg'
    alt: 'intro_form_cover'
    hash: 'L7ODUv00%O_NDiMxM_bb?d-=ROIA'
    photographer: 'Sincerely Media'
    url: 'https://unsplash.com/photos/nGrfKmtwv24'
tags: ['Front-end', 'HTML']
---

## 基本概念

表单在网页中扮演着重要角色，它主要负责上传用户的信息。
一个表单通常是一些 `input` 组件的集合，并被 `<fieldset>` 或 `<div>` 元素所包裹着。

以下是一些常用的表单元素

- `<form></form>`: 包裹整个表单，为表单的最外层
- `<fieldset></fieldset>`: 用来区分不同种类的信息
- `<legend></legend>`: 表头
- `<input />`: 输入，多种类型: 文字，单选，多选，checkbox
- `<label></label>`: 标签，和 input 组成一个组件整体，通过 `for` 属性和 input 中的 `id` 一一对应

通常 lable 和 input 组成一个小组件，组件常被 `<ul>`  `<ol>`  `<p>`  `<div>` 包裹。

下面我们从最内层、最基础的元素 `input` 开始了解表单

## 2. Input 元素

input 元素通常与 label 元素组成一个小组件（widget），通常用以下的形式关联在一起：

- 在 input 中，用`id`属性来声明这个输入的主题
- 在 label 中，用`for`属性来关联包含相同`id`的 input

```html
<label for="name">Name: </label>
<input id="name" type="text" placeholder="Enter your name" required />
```

在最初的 HTML 语法中，只有 `input` 作为表单的输入组件，
因此 `input` 下面这一些不同的类型来接受各种输入。
让我们一起来逐一了解一下

### 2.1 单行输入

这里列举了一些单行输入的 type

- text：文字输入组件，当选中时，移动端将自动弹出26键（或9键）键盘
- tel：电话号码输入组件，当选中时，移动端将自动显示为数字键盘
- url：链接输入组件
- email：电子邮箱输入组件
- search：搜索组件，当输入文字后，将在右侧显示❌，点击后可以清除搜索内容
- password：输入的字符将显示为圆点，但发送时没被加密，建议使用 https 传输加密协议
- hidden：用户不可见，但仍然随着表格一起发送，该输入不应该绑定 label

::tip{type="tip" title="Live demo"}
你可以通过这个链接获得更直观的感受：[live demo](https://mdn.github.io/learning-area/html/forms/native-form-widgets/single-line-text-fields.html)
::

### 2.2 Checkboxes and radio buttons

::tip{type="info" title="Buy something..."}
<fieldset>
  <ul>
    <li>
      <label for="apple">Apple🍎 </label>
      <input type="checkbox" id="apple" name="sl" value="apple" />
    </li>
    <li>
      <label for="milk">Milk🥛 </label>
      <input type="checkbox" id="milk" name="sl" value="milk" />
    </li>
    <li>
      <label for="eggs">Eggs🥚 </label>
      <input type="checkbox" id="eggs" name="sl" value="eggs" />
    </li>
  </ul>
</fieldset>
::

#### Checkbox

- type: checkbox
- id: 复选框的 id，与 label 元素绑定
- name: 跟这个组件绑定的变量的名字
- value: 当选中时，给变量所赋予的值
- checked (optional): 是否默认选中
  
#### Radio button

和复选框基本一致

### 2.3 实际按钮

::tip{type="info" title="Three kinds of button input"}
<input class="btn" type="submit" value="提交"/>
<input class="btn" type="reset" value="重置表格"/>
<input class="btn" type="button" value="按钮"/>
::

input 和 button 还包含以下三种特殊的类型，分别表示提交表单、重置表单、以及普通按钮。

- submit：点击后将发送 GET 请求，并通过 URL 参数进行数据的提交
- reset：点击后，所在 `<form>` 中所有的输入重置
- button：无特殊功能，用于自定义

### 2.4 图片按钮

::tip{type="info" title="图片按钮"}
<input id="image" type="image" alt="image button" src="/img/articles/12_intro_form/intro_form_cover.jpg" name="pos" width="270" height="200"/>
::

图片按钮和图片基本一致，当点击时，将发送以图片为参考系下鼠标的相对位置。

- alt: 当图片加载失败时，替代显示
- src: 图片源地址
- name: 代表图片的名字，后续坐标通过 name.x 和 name.y 来获取
- width: 图片宽度
- height: 图片高度

点击后将发送如下`GET`请求

```
GET http://foo.com?pos.x=123&pos.y=456 HTTP/1.1
```


## 2.5 文件上传按钮

文件上传按钮，用户可以通过它上传一个或多个文件，一个文件上传按钮通常包括以下属性:

- type: file
- name: 自定义的名字
- accept: 接受某种类型的文件
  - "image/*"
  - "video/*"
  - "audio/*"
- mutiple: 可选，上传多个文件。不写时，上传一个文件。

## 3. Summary

在这片文章中，我们学习了关于网页表单的基础知识，包括：

- single line input: text, tel, email, search ...
- checkable input: checkbox and radio
- actual button: submit, reset, and button
- Image button
- File picker

通过这些基础的组件，我们可以开始编写自己的表单了！

**感谢你的阅读!**

## 4. Reference

- [Web forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
