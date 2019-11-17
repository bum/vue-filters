export const makeFilter = (func) => {
	const install = (Vue) => {
		if (install.installed) {return} else install.installed = true
		Vue.filter(func.name, func)
	}
	return { install }
}
