---
category: UA
---

# useStates

    模拟useState,可以控制多个state

## 使用

```ts
import { useStates } from '@yu-kit/hooks'
```

### 参数

- `object`

```
任意值：必选
```

### 返回参数

- `[object,(values: (keyof T)[]) => void]`

```
object 包含多个状态的对象
(values: (keyof T)[]) => void 状态设置函数
```
