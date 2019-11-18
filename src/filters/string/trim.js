import { isDef } from '../util'

export const trim = (str) => isDef(str)
	? str.trim()
	: ''
