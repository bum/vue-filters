import { filterBy } from './filterBy'

/**
 * Get first matching element from a filtered array
 *
 * @param {Array} arr
 * @param {String|Number} search
 */
export const findBy = (arr, search) => {
	let array = filterBy(arr, search)
	array.splice(1);
	return array;
}
