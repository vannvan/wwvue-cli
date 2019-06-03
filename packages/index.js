// Copyright (c) 2019 by https://github.com/vannvan.
// All Rights Reserved.

import WIcon from './icon/index';
const components = [
  WIcon
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  WIcon
}
