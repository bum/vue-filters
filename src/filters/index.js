// Import all vue component to comps
import * as string from './string'
import * as array from './array'
import { isArray, isString } from './util'

const transforms = { ...string, ...array }

// Declare install function executed by Vue.use()
export function install(Vue, options = {}) {
	if (install.installed) {return} else {install.installed = true}
	const names = !options.filters ? Object.keys(transforms)
		: isArray(options.filters) ? options.filters
			: isString(options.filters) ? options.filters.trim().split(' ')
				: Object.keys(transforms)
	names.forEach(name => transforms[name] && Vue.filter(name, transforms[name]))
}

// Auto-install when vue is found (eg. in browser via <script> tag)
const GlobalVue = typeof window !== 'undefined' ? window.Vue
	: (typeof global !== 'undefined' ? global.Vue : null)
if (GlobalVue) GlobalVue.use({ install })

// auto generated plugin for each of components
const filters = {}
Object.keys(transforms).forEach(name => {
	const install = (Vue) => {
		if (install.installed) {return} else install.installed = true
		Vue.filter(name, transforms[name])
	}
	install.installed = false

	filters[name + 'Filter'] = install
})

// To allow use as module(npm / webpack / etc.) export component
export default {
	install,
	...filters,
}

export * from './string'
export * from './array'
export const filter = function (func) {
	return { install: (Vue) => Vue.filter(func.name, func) }
}

// export const uppercaseFilter = makeFilter(string.capitalize)
// export const CurrencyFilter = makeFilter(string.currency)
// export const LowercaseFilter = makeFilter(string.lowercase)
// export const PlaceholderFilter = makeFilter(string.placeholder)
// export const PluralizeFilter = makeFilter(string.pluralize)
// export const TrimFilter = makeFilter(string.trim)
// export const TruncateFilter = makeFilter(string.truncate)
//
// export const UppercaseFilter = makeFilter(string.uppercase)
// export const FilterByilter = makeFilter(array.filterBy)
// export const FindByFilter = makeFilter(array.findBy)
// export const LimitByFilter = makeFilter(array.limitBy)
// export const OrderByFilter = makeFilter(array.orderBy())
