import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';
import * as actions from './actions';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

describe('setSearchField', () => {
  it('should create an action to search robots', () => {
    let term = 'An Example Search Term';

    let consequence = actions.setSearchField(term);

    expect(consequence).toEqual({
      type: CHANGE_SEARCH_FIELD,
      payload: 'An Example Search Term',
    });
  });
});

describe('requestRobots', () => {
  let mockStore;

  beforeEach(() => {
    mockStore = configureMockStore([thunkMiddleware]);
  });

  it('should handle REQUEST_ROBOTS_PENDING', () => {
    let store = mockStore();

    store.dispatch(actions.requestRobots());

    expect(store.getActions().shift()).toEqual({ type: REQUEST_ROBOTS_PENDING });
  });
});
