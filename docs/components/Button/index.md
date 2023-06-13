# Button

::: tip
按钮组件
:::

## Usage

```ts
import { Button } from '@yu-kit/components'
```

| 名称          |                          类型                           |                                     描述 |
| ------------- | :-----------------------------------------------------: | ---------------------------------------: |
| leftIcon      |                     React.ReactNode                     |                     放置在按钮左边的图标 |
| width         |                         number                          |                                 按钮宽度 |
| type          | 'primary' ; 'secondary' ; 'text' ; 'submit' ; 'border'` |                                 按钮类型 |
| size          |              'small' ; 'medium' ; 'large'               |                                 按钮尺寸 |
| color         |                         string                          |                                 按钮颜色 |
| radiusType    |           'default' ; 'square' ; 'no-radius'            |                             按钮圆角类型 |
| loading       |                         boolean                         |                             loading 效果 |
| gradientColor |                         string                          |                             渐变按钮颜色 |
| style         |                   React.CSSProperties                   |                               自定义样式 |
| className     |                         string                          |                           添加 className |
| disabled      |                         boolean                         |                                 是否禁用 |
| block         |                         boolean                         |                               是否为块级 |
| extra         |                         string                          | 按钮辅助文字，仅在 large 为 large 时可用 |
| onClick       |              (e: React.MouseEvent) => void              |                                 点击事件 |
