---
category: UA
---

# useLoading

    方法前后执行loading, 并返回loading与执行函数

## 使用

```ts
import { useLoading } from '@yu-kit/hooks'
```

## 文档

### 参数

- `(...arg: V[]) => Promise<void>`

```
异步函数函数：必选
```

### 返回参数

- `[boolean,(arg: V[]) => Promise<void>]`

```
[loading,错误捕获封装好的异步执行函数]
```
