import { isUndef } from '../util'

/**
 * Converts a string to UPPERCASE
 *
 * ('abc') => 'ABC'
 */

export const uppercase = (val) => isUndef(val) ? ''
	: val.toString().toUpperCase()
