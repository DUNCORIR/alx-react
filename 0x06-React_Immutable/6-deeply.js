import { fromJS } from 'immutable';
export function mergeDeeplyElements(page1, page2) {
    const immutablePage1 = fromJS(page1);
    const immutablePage2 = fromJS(page2);
    const merged = immutablePage1.mergeDeep(immutablePage2);
    return merged;
}