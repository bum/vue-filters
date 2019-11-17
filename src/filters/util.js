export const isDef = (v) => v !== undefined && v !== null
export const isUndef = (v) => v === undefined || v === null
export const isBlank = (v) => isUndef(v) || v.toString() === ''
export const isNotBlank = (v) => isDef(v) && v.toString() !== ''
export const isNumber = (v) => typeof v === 'number'
export const isString = (v) => typeof v === 'string'
