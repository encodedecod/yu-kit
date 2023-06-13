---
category: UA
---

# useStates

    模拟useState,可以控制多个state

## Usage

```ts
import { useStates } from '@yu-kit/hooks'
```

### 参数

```
T 任意值：必选
```

### 返回 1

```
T:object 包含多个状态的对象
```

### 返回 2

```
(values: (keyof T)[]) => void 状态设置函数
```
