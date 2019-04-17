# ui

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 项目规范

### 风格指南

该项目规范大都摘至
See [vue standard](https://cn.vuejs.org/v2/style-guide/).

### 命名规范

1. 文件夹命名

kebab-case,小写字母开头 e.g. component-a

```js
'button-demo.js'
```

2. 组件命名规范

**组件名为多个单词**
组件名应该为多个单词的, 根组件除外
这样做的好处是避免跟 Html 元素相冲突, 因为 html 元素的名称都是单个单词的

- 单文件组件命名
  单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。
  项目使用 kebab-case,小写字母开头

  ```md
  <!-- bad -->

  pages/
  | - myPage.vue

  pages/
  | - mypage.vue

  <!-- good -->

  pages/
  | - MyPage.vue

  <!-- good 项目推荐写法 -->

  pages/
  | - my-page.vue
  ```

- 基础组件: components 下的组件
  应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App 或 V
  必须使用"大驼峰命名法"命名法

  ```js
  'MenuItem.vue'
  export default {
    name: 'MenuItem'
  }
  ```

- 单例组件
  **只应该拥有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性**

  ```md
  <!-- bad -->

  pages/
  | - Sidebar.vue
  ```

  <!-- good -->

  pages/
  | - TheSiderbar.vue

  ```

  ```

* **组件文件和组件使用相同的名字**

3. 样式命名

- id 使用"小驼峰命名法"
- class 使用 kebab-case, 小写字母开头

4. js 命名

- 属于类的.js 文件，除 index.js 外，使用 PascalBase 风格
- 其他类型的.js 文件，使用 kebab-case 风格
- 属于 Api 的，统一加上 Api 后缀

5. Store 命名

- state/getters/action/Module 使用"小驼峰命名法"
- Mutation 使用 全部大写的下划线命名法

6. 前端路由命名

路径使用全小写命名法

7. 变量命名规范

- 普通变量命名

  - 命名方法 ：驼峰命名法

  - 命名规范 ：
    - 命名必须是跟需求的内容相关的词
    - 命名是复数的时候需要加 s 即可
    ```js
    let name = '名称'
    let names = ['名称1', '名称2']
    ```

- 常量

  - 命名方法: 全部大写

  - 命名规范: 使用大写字母和下划线来组合命名，下划线用以分割单词

  ```js
  const BASIC_NUMBER = 1
  ```

8. vue 编写规范

- props
  对设置的 prop 进行类型判断

```js
// bad
export default {
  props: ['prop1', 'prop2']
}
// good
export default {
  props: {
    prop1: String
  }
}
// good
export default {
  props: {
    status: {
      type: String,
      required: true,
      validator: function(value) {
        return (
          ['syncing', 'synced', 'version-conflict', 'error'].indexOf(value) !==
          -1
        )
      }
    }
  }
}
```

- 私有属性命名
  在插件、混入等扩展中始终为自定义的私有属性使用 $_ 前缀。并附带一个命名空间以回避和其它作者的冲突 (比如 $_yourPluginName_)

### Vue 方法放置顺序

编写 vue 文件时代码的先后顺序规范

```js
export default {
  // mixin
  mixins: ['some mixin'],
  // 引用的组件
  components: {}
  // 属性
  props: {}
  // 组件自身数据
  data: function() {return {}},
  // 生命周期
  created() {},
  mounted(){},
  activited(){},
  update() {},
  beforeRouteUpdate(){},
  // 方法
  metods: {},
  // 过滤器
  filter: {},
  // 计算属性
  computed: {},
  // 监听属性
  watch: {}
}
```
