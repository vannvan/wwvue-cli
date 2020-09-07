# wwvue-cli

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

### 开发规范

- 接口管理:  
  按照不同的功能模块采取对应的名称文件进行存放，index 已采取自动引入, 页面使用时导入具体的接口即可。  
   示例：

  ```js
  import { post } from './http'
  export default {
    getUserList: (p) => post('/api/userList', p), //获取用户列表
  }
  //组件内
  const { getUserList } = require('@/api').User
  getUserList().then((res) => {
    //TODO
  })
  ```

- 静态资源：  
  图片资源较多的情况下，建议采用的图片模块划分形式  
  a. 采取不同功能模块命名进行划分，  
  b. icon、background、功能大图进行划分  
  此脚手架已将 scss 相关配置初始化，为避免项目样式杂乱，项目严禁同时使用多个 css 扩展语言  
  其他因项目有特殊需求的不同配置形式可根据具体情况进行调整和变更。

- 页面及组件：  
  所有页面均需在 pages 下进行开发，每个功能模块拥有一个文件夹，具体层级可根据模块的大小进行规划，建议不超过三级，特属于某个模块内的子组件存放在当前模块内部即可，通用性组件存放在 components 文件夹下

- 路由管理:  
  路由已采用全局自动化加载进行配置，特殊页面仍可采取手动配置进行引入，自动加载路由会排除功能模块下的子组件文件，故某模块下不作为页面使用的组件均需放在其对应的 components 文件夹下，router/index.js 对路由及权限关系管理有基础示例

- store 管理：  
  store 已采取自动化加载进行配置，须根据不同功能的模块进行划分命名，避免因 store 过多造成的混乱，具体可参照初始化文件下的使用方式

- utils：  
  utils 是用于抽离可作为全局或可重复使用的方法的封装，遵循一个函数只有一个功能的思想，方法的指定需考虑一定的扩展性和健壮性，必须写函数的注释说明。

- 代码格式化：
  项目采用 vue 脚手架默认的 eslint 规范，严禁关闭全局的 eslint 验证，编辑器建议安装 prettier 进行代码美化
- 组件开发： [vue 开发风格指南](https://cn.vuejs.org/v2/style-guide/)  
  建议按照以下书写顺序进行组件开发，没有使用到的可以忽略

```js
export default {
  name: '',

  mixins: [],

  components: {},

  props: {},

  data() {
    return {
      menuList: [], // 必要的注释说明
    }
  },

  computed: {
    formattedValue() {
      // ...
    },
    //空行
    styles() {
      // ...
    },
  },

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {
    //方法功能说明
    onInput() {
      // ...
    },
    //空行
    onChange() {
      // ...
    },
  },
}
```

### 注意事项
