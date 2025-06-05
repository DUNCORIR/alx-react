import { Map, is } from 'immutable';

export function areMapsEqual(map1, map2) {
    // Check if two Immutable Maps are equal
    return is(map1, map2); 
}