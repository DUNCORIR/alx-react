import { List } from 'immutable';

export function getListObject(array) {
    // Convert array into an immutable list
    return List(array);
}

export function addElementToList(list, element) {
    return list.push(element);
}