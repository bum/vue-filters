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

export const pluralize = (val, ...args) => !args || args.length === 0
	? ''
	: args.length === 1
		? args[0] + (val === 1 ? '' : 's')
		: args[val % 10 - 1] || args[args.length - 1]
