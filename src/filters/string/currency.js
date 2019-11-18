/**
 * 12345 => $12,345.00
 *
 * @param {String} currency
 * @param {Number} decimals Decimal places
 */
import { isEmpty } from "@/filters/util";

const digitsRE = /(\d{3})(?=\d)/g

export function currency(val, currency, decimals) {
	if (isEmpty(val)) return ''
	val = parseFloat(val)
	if (!isFinite(val)) return ''
	currency = currency != null ? currency : '$'
	decimals = decimals != null ? decimals : 2
	const stringified = Math.abs(val).toFixed(decimals)
	const _int = decimals
		? stringified.slice(0, -1 - decimals)
		: stringified
	const i = _int.length % 3
	const head = i > 0
		? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
		: ''
	const _float = decimals
		? stringified.slice(-1 - decimals)
		: ''
	const sign = val < 0 ? '-' : ''
	return sign + currency + head +
		_int.slice(i).replace(digitsRE, '$1,') +
		_float
}
