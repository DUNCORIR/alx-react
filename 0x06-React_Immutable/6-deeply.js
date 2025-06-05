import { Map, fromJS } from 'immutable';
import util from 'util';

export default function mergeDeeplyElements(page1, page2) {
    const immutablePage1 = fromJS(page1);
    const immutablePage2 = fromJS(page2);
    
    return immutablePage1.mergeDeep(immutablePage2);
}

const page1 = {
  'user-1': {
    id: 1,
    name: 'test',
    likes: {
      1: {
        uid: 1234,
      }
    }
  },
};

const page2 = {
  'user-1': {
    likes: {
      2: {
        uid: 134,
      }
    }
  },
};

console.log(util.inspect(mergeDeeplyElements(page1, page2).toJS(), { depth: null, colors: true }));
