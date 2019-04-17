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

## 代码规范

### Vue 项目的命名

1. 文件夹、
   kebab-case,小写字母开头 e.g. component-a
2. 样式命名
   2.1 id 使用"小驼峰命名法"
   2.2 class 使用 kebab-case, 小写字母开头
3. js 命名规范
   3.1 属于类的.js 文件，除 index.js 外，使用 PascalBase 风格
   3.2 其他类型的.js 文件，使用 kebab-case 风格
   3.3 属于 Api 的，统一加上 Api 后缀
4. Store
   3.1 state/getters/action/Module 使用"小驼峰命名法"
   3.2 Mutation 使用 全部大写的下划线命名法
5. 组件
   4.1 单文件组件命名使用 kebab-case,小写字母开头
   4.2 components 下的组件必须使用"大驼峰命名法"命名法
   4.3 组件文件和组件使用相同的名字
6. 前端路由
   路径使用全小写命名法

### Vue 方法放置顺序

```js
export default {
  components: {}
  props: {}
  data: function() {return {}},
  created() {},
  mounted(){},
  activited(){},
  update() {},
  beforeRouteUpdate(){},
  metods: {},
  filter: {},
  computed: {},
  watch: {}
}
```
