import { isUndef } from '../util'

/**
 * Converts a string to lowercase
 *
 * ('AbC') => 'abc'
 */

export const lowercase = (val) => isUndef(val) ? ''
	: val.toString().toLowerCase()
