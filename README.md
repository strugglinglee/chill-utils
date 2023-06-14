# chill-utils

一个封装了 JS 的一些常用方法的工具

## 食用方法

1. 下载 npm 包

```shell
npm i chill-utils
```

2. 使用 Validate 校验函数
```js
import { Validate } from 'chill-utils'
const mobile = '17726366787'
Validate.mobileCheck(mobile) //true
```

3. 使用 Common 内的公共方法

```js
const trrigerDebounce = Common.debounce(async () => {
  console.log('trriger debounce')// 只会打印最后一次的
})
trrigerDebounce()
trrigerDebounce()
```