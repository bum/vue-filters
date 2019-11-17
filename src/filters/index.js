// Import all vue component to comps
import * as util from './util'

const filters = { ...util }

// Declare install function executed by Vue.use()
export function install(Vue) {
	if (install.installed) {return} else {install.installed = true}
	Object.keys(filters).forEach(name => Vue.filter(name, filters[name]))
}

// Auto-install when vue is found (eg. in browser via <script> tag)
const GlobalVue = typeof window !== 'undefined' ? window.Vue
	: (typeof global !== 'undefined' ? global.Vue : null)
if (GlobalVue) GlobalVue.use({ install })

// auto generated plugin for each of components
// const plugins = {}
// Object.keys(comps).forEach(name => {
// 	const install = (Vue) => {
// 		if (install.installed) {return} else install.installed = true
// 		Vue.component(name, comps[name])
// 	}
// 	install.installed = false
//
// 	plugins[name + 'Plugin'] = install
// })

// To allow use as module(npm / webpack / etc.) export component
export default {
	install,
	...filters,
}
