import { fromJS } from 'immutable';
export function mergeDeeplyElements(page1, page2) {
    const immutablePage1 = fromJS(page1);
    const immutablePage2 = fromJS(page2);
    const merged = immutablePage1.mergeDeep(immutablePage2);
    return merged;
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

console.log(mergeDeeplyElements(page1, page2).toJS());