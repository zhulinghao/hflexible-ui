import VRadio from './Radio'

const components = [
  VRadio
]

const install = function (app) {
  if (install.installed) return
  components.map(component => app.use(component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  VRadio
}