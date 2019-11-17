import { isUndef } from '../util'

/**
 * Capitalize a string.
 */
const capitalizeRE = /\b(\w)/g
export const capitalize = (val) => isUndef(val) ? ''
	: val.toString().toLowerCase().replace(capitalizeRE, (_, c) => c ? c.toUpperCase() : '')
