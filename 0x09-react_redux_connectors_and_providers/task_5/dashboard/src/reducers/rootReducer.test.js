import rootReducer from './rootReducer';
import { Map } from 'immutable';

describe('rootReducer', () => {
  it('should return the initial combined state', () => {
    const state = rootReducer(undefined, {});
    expect(state).toEqual(
      Map({
        courses: Map({}),
        notifications: Map({}),
        ui: Map({
          isNotificationDrawerVisible: false,
          isUserLoggedIn: false,
          user: Map({}),
        }),
      })
    );
  });
});