import { isNotEmpty, isUndef } from '../util'

/**
 * Converts a string to UPPERCASE
 *
 * ('abc') => 'ABC'
 */
export const uppercase = (val) => isNotEmpty(val)
	? val.toString().toUpperCase()
	: ''
