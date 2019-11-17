import { isString } from './index'

export const toNumber = (value) => {
	if (isString(value)) {
		return value
	} else {
		const parsed = Number(value)
		return isNaN(parsed) ? value : parsed
	}
}
