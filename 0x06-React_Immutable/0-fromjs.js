// Converting into an immutable object using fromJs
import {fromJS} from 'immutable';


export default function getImmutableObject(object) {
    const immutableMap = fromJS(object);
    return immutableMap;
}