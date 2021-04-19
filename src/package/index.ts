import { App } from 'vue'
import Button from './button'

const components = [Button]
const install = function (app: App) {
  components.forEach((component: any) => {
    app.use(component)
  })
  return app
}

export default {
  install
}
