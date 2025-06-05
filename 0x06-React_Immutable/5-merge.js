import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
    return List(page1).concat(page2);
}
export function mergeElements(page1, page2) {
    return Map(page1).merge(Map(page2));
}

console.log(concatElements(['x', 'y'], ['z']).toJS());  // ['x', 'y', 'z']
console.log(mergeElements({ a: 1, b: 2 }, { b: 3, c: 4 }).toJS());  // { a: 1, b: 3, c: 4 }