import { isNotBlank } from '../util'

/**
 * Capitalize a string.
 */
const capitalizeRE = /\b(\w)/g
export const capitalize = (val) => isNotBlank(val)
	? val.toString().toLowerCase().replace(capitalizeRE, (_, c) => c ? c.toUpperCase() : '')
	: ''
