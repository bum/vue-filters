import { convertArray, isObject, toArray, getPath } from '../util'

/**
 * Filter filter for arrays
 *
 * @param {String|Array<String>|Function} ...sortKeys
 * @param {Number} [order]
 */

export function orderBy(arr) {
	let comparator = null
	let sortKeys
	arr = convertArray(arr)

	// determine order (last argument)
	let args = toArray(arguments, 1)
	let order = args[args.length - 1]
	if (typeof order === 'number') {
		order = order < 0 ? -1 : 1
		args = args.length > 1 ? args.slice(0, -1) : args
	} else {
		order = 1
	}

	// determine sortKeys & comparator
	let firstArg = args[0]
	if (!firstArg) {
		return arr
	} else if (typeof firstArg === 'function') {
		// custom comparator
		comparator = (a, b) => firstArg(a, b) * order
	} else {
		// string keys. flatten first
		sortKeys = Array.prototype.concat.apply([], args)
		comparator = (a, b, i) => {
			i = i || 0
			return i >= sortKeys.length - 1
				? baseCompare(a, b, i)
				: baseCompare(a, b, i) || comparator(a, b, i + 1)
		}
	}

	function baseCompare(a, b, sortKeyIndex) {
		const sortKey = sortKeys[sortKeyIndex]
		if (sortKey) {
			if (sortKey !== '$key') {
				if (isObject(a) && '$value' in a) a = a.$value
				if (isObject(b) && '$value' in b) b = b.$value
			}
			a = isObject(a) ? getPath(a, sortKey) : a
			b = isObject(b) ? getPath(b, sortKey) : b
		}
		return a === b ? 0 : a > b ? order : -order
	}

	// sort on a copy to avoid mutating original array
	return arr.slice().sort(comparator)
}
