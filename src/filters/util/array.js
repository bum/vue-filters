import { isArray, isPlainObject } from './index'

/**
 * Convert an Array-like object to a real Array.
 */
export function toArray(list, start) {
	start = start || 0
	let i = list.length - start
	const ret = new Array(i)
	while (i--) ret[i] = list[i + start]
	return ret
}

export const convertArray = (value) => {
	if (isArray(value)) {
		return value
	} else if (isPlainObject(value)) {
		// convert plain object to array.
		const keys = Object.keys(value)
		let i = keys.length
		const res = new Array(i)
		let key
		while (i--) {
			key = keys[i]
			res[i] = {
				$key: key,
				$value: value[key],
			}
		}
		return res
	} else {
		return value || []
	}
}


export const convertRangeToArray = (range) => [...Array(range + 1).keys()].slice(1)
