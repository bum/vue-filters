import { isNotEmpty } from '../util'

/**
 * Converts a string to lowercase
 *
 * ('AbC') => 'abc'
 */

export const lowercase = (val) => isNotEmpty(val)
	? val.toString().toLowerCase()
	: ''
