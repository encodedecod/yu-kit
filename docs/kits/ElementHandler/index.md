---
category: UA
---

# ElementHandler

    用于函数式的隐藏显示组件 让组件的使用不再受组件内部使用的限制

## 使用

```ts
import { ElementHandler } from '@yu-kit/kit'
const { show, hide, info } = ElementHandler(组件)
```

## 文档

### 参数 [组件]：必选

```
如需支持原本的组件动画 组件需自带可选的visible visible用于控制组件的显示和隐藏
```

### 返回值：

- `show:(props: T) => void`

```
显示组件 参数为组件的props (props: T) => void
```

- `hide:() => void`

```
隐藏组件
```

- `info:(props: T & { duration?: number }) => void`

```
一段时间后显示组件
```
