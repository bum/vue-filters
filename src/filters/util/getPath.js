// obj,'1.2.3' -> multiIndex(obj,['1','2','3'])
export const getPath = (obj, is) => multiIndex(obj, is.split('.'))

// obj,['1','2','3'] -> ((obj['1'])['2'])['3']
const multiIndex = (obj, is) => is.length ? multiIndex(obj[is[0]], is.slice(1)) : obj
