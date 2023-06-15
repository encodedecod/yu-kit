# YuButton

::: tip
按钮组件
:::

## 使用

```ts
import { YuButton } from '@yu-kit/components'
```

| 名称       |                类型                |                                     描述 |    默认值 |
| ---------- | :--------------------------------: | ---------------------------------------: | --------: |
| leftIcon   |          React.ReactNode           |                     放置在按钮左边的图标 |           |
| type       |   'primary' ; 'text' ; 'border'`   |                                 按钮类型 | 'primary' |
| size       |    'small' ; 'medium' ; 'large'    |                                 按钮尺寸 |  'medium' |
| radiusType | 'default' ; 'square' ; 'no-radius' |                             按钮圆角类型 | 'default' |
| loading    |              boolean               |                             loading 效果 |     false |
| style      |        React.CSSProperties         |                               自定义样式 |           |
| className  |               string               |                           添加 className |           |
| disabled   |              boolean               |                                 是否禁用 |     false |
| extra      |               string               | 按钮辅助文字，仅在 large 为 large 时可用 |           |
| onClick    |   (e: React.MouseEvent) => void    |                                 点击事件 |           |
