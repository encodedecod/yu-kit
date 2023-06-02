    ---
    category: UA
    ---

    # ElementHandler
    用于函数式的隐藏显示组件 让组件的使用不再受组件内部使用的限制

    ## Usage

    ``` ts
       import { ElementHandler } from "@yu-kit/shared"

      const {} = ElementHandler(组件)

      // do something
    ```

    ## 文档

    ### 参数 [组件]：必选
        ```
        如需支持原本的组件动画 组件需自带可选的visible visible用于控制组件的显示和隐藏
        ```
    
    ### 返回值：`{ show: (props: T) => void, hide: () => void, info: (props: T & { duration?: number }) => void}`

    -   show：显示组件

        ```
        参数为组件的props
        ```

    -   hide：隐藏组件

        ```
       通常
        ```
    -   info：一段时间后显示组件

        ```
       通常
        ```