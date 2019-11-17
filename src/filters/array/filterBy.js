import { convertArray, getPath, isArray, isPlainObject } from '../util'

/**
 * Filter filter for arrays
 *
 * @param {Array} arr
 * @param {String|Number} search
 * @param {Array} keys
 */

export const filterBy = (arr, search, ...keys) => {
	arr = convertArray(arr)
	if (search == null) return arr
	if (typeof search === 'function') return arr.filter(search)

	// cast to lowercase string
	search = ('' + search).toLowerCase()
	// const n = 2
	// extract and flatten keys
	// const keys = Array.prototype.concat.apply([], toArray(arguments, n))
	const res = []
	let item, key, val, j
	for (let i = 0, l = arr.length; i < l; i++) {
		item = arr[i]
		val = (item && item.$value) || item
		j = keys.length
		if (j) {
			while (j--) {
				key = keys[j]
				if ((key === '$key' && contains(item.$key, search)) ||
					contains(getPath(val, key), search)) {
					res.push(item)
					break
				}
			}
		} else if (contains(item, search)) res.push(item)
	}
	return res
}

function contains(val, search) {
	if (isPlainObject(val)) {
		const keys = Object.keys(val)
		let i = keys.length
		while (i--) {
			if (contains(val[keys[i]], search)) return true
		}
	} else if (isArray(val)) {
		let i = val.length
		while (i--) {
			if (contains(val[i], search)) return true
		}
	} else if (val != null) {
		return val.toString().toLowerCase().indexOf(search) > -1
	}
}
