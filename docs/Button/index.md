    ---
    category: UA
    ---

    # Button
    按钮组件

    ## Usage

    ``` ts
      import { Button } from "@yu-kit/shared"

      // do something
    ```

    ## 文档

    ### 参数
        ```
        /**放置在按钮左边的图标 */
        leftIcon?: React.ReactNode;
        /** 按钮宽度*/
        width?: number;
        /**按钮类型: 主要按钮、次要按钮（幽灵按钮）、文字按钮、提交按钮、边框按钮 */
        type?: 'primary' | 'secondary' | 'text' | 'submit' | 'border';
        /** 按钮尺寸*/
        size?: 'small' | 'medium' | 'large';
        /**按钮颜色 */
        color?: string;
        /** 按钮圆角类型*/
        radiusType?: 'default' | 'square' | 'no-radius';
        /**loading效果 */
        loading?: boolean;
        /** 渐变按钮颜色, 仅在type为primary时可用, 优先级大于color*/
        gradientColor?: string;
        /**自定义样式 */
        style?: React.CSSProperties;
        /** 添加className*/
        className?: string;
        /**是否禁用 */
        disabled?: boolean;
        block?: boolean;
        /** 按钮辅助文字，仅在large为large时可用*/
        extra?: string;
        /** 点击事件 */
        onClick?: (e: React.MouseEvent) => void;
        ```

 
