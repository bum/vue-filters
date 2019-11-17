import { isNumber, isUndef, isString } from '../util'

/**
 *  Truncate at the given length, make sure result is within that length
 *
 * ('1234567890', 9) => '123456...'
 */

export const truncate = (val, length) => isUndef(val) || !isString(val) || !isNumber(length) || length <= 3 || val.length <= length
	? val
	: val.substring(0, length - 3) + '...'
