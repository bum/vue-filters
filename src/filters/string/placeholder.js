import { isBlank } from '../util'

/**
 *  If the value is missing outputs the {placeholder}
 *
 * (null, {placeholder}) => {placeholder}
 * ('foo', {placeholder}) => 'foo'
 */

export const placeholder = (val, placeholder) => isBlank(val) ? placeholder : val
