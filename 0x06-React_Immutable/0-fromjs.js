// Converting into an immutable object using fromJs
import {fromJS} from 'immutable';


export default function getImmutableObject(object) {
    const immutableMap = fromJS(object);
    return immutableMap;
}

console.log(getImmutableObject({
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
}).toJS());
