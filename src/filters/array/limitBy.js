import { convertRangeToArray, isArray, isNumber, isString, isUndef, toNumber } from '../util'

/**
 * Limit filter for arrays
 *
 * @param {Number|Array} arr (If Number, decimal expected)
 * @param {Number} n
 * @param {Number|String} offset (Decimal expected)
 */

export const limitBy = (arr, n, offset) => {
	if (!isArray()) arr = convertRangeToArray(arr)
	const off = isUndef(offset) ? 0
		: (isString(offset) ? parseInt(offset, 10) : offset)

	n = toNumber(n)
	return isNumber(n) ? arr.slice(off, off + n)
		: arr
}
