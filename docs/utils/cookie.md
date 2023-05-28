## Cookie

::: tip
本组件库不提供cookie的操作，请直接使用 "js-cookie" 库来操作cookie
:::

安装

```
yarn add js-cookie
```

使用

```
Cookies.set('name', 'value', { expires: 365 })
Cookies.get('name') // => 'value'
Cookies.remove('name')
```
expires后面的数字代表过期时间是7天。


如果想使用以小时为单位的过期时间，请这样写：

```
import Cookies form 'js-cookie'
 
let num = 2 //失效时间是几小时
let time= new Date(new Date().getTime() + num * 60 * 60 * 1000);
Cookies.set('key', 'value', {
    expires: time
});
```

详细请见js-cookie的介绍

