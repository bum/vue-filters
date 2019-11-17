import { toArray } from '../util'

/**
 * 'item' => 'items'
 *
 * @params
 *  an array of strings corresponding to
 *  the single, double, triple ... forms of the word to
 *  be pluralized. When the number to be pluralized
 *  exceeds the length of the args, it will use the last
 *  entry in the array.
 *
 *  e.g. ['single', 'double', 'triple', 'multiple']
 */

export function pluralize(value) {
	let args = toArray(arguments, 1)
	return args.length > 1
		? (args[value % 10 - 1] || args[args.length - 1])
		: (args[0] + (value === 1 ? '' : 's'))
}
