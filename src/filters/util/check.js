export const isDef = (v) => v !== undefined && v !== null
export const isUndef = (v) => v === undefined || v === null
export const isBlank = (v) => isUndef(v) || v.toString() === ''
export const isNotBlank = (v) => isDef(v) && v.toString() !== ''

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
