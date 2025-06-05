import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  // Step 2
    const immutableMap = fromJS(object);
    // Access the value using the array of keys
    return immutableMap.getIn(array, 'default value');
}

console.log(accessImmutableObject({
  user: {
    name: {
      first: 'Jane',
      last: 'Doe'
    }
  }
}, ['user', 'name', 'first']));  // should print: Jane