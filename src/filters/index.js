// Import all vue component to comps
import * as string from './string'
import * as array from './array'
import { isArray, isString } from './util'

const filters = { ...string, ...array }

// Declare install function executed by Vue.use()
export function install(Vue, options = {}) {
	if (install.installed) {return} else {install.installed = true}
	const names = !options.filters ? Object.keys(filters)
		: isArray(options.filters) ? options.filters
			: isString(options.filters) ? options.filters.trim().split(' ')
				: Object.keys(filters)
	names.forEach(name => filters[name] && Vue.filter(name, filters[name]))
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
