export const isDef = (v) => v !== undefined && v !== null
export const isUndef = (v) => v === undefined || v === null


// not(null || undefined || NaN || emptyString("") || 0 || false)
export const isTruthy = (v) => !!v
// truthy && not zero
export const isNotEmpty = (v) => v || v === 0
export const isEmpty = (v) => !v && v !== 0

export const isBlank = (v) => isEmpty(v) || v.trim() === ''
export const isNotBlank = (v) => isNotEmpty(v) && v.trim() !== ''

export const isNumber = (v) => typeof v === 'number'
export const isString = (v) => typeof v === 'string'
export const isArray = (obj) => Array.isArray(obj)

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
export const isObject = (obj) => obj !== null && typeof obj === 'object'


/**
 * Get the raw type string of a value, e.g., [object Object].
 */
const _toString = Object.prototype.toString

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
export const isPlainObject = (obj) => _toString.call(obj) === '[object Object]'
