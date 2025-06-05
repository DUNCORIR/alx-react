import { List } from 'immutable';

export function getListObject(array) {
    // Convert array into an immutable list
    return List(array);
}

export function addElementToList(list, element) {
    return list.push(element);
}

const list = getListObject(['apple', 'banana']);
console.log(addElementToList(list, 'cherry').toJS());