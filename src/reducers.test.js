import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';
import * as reducers from './reducers';

describe('searchRobots', () => {
  it('should return the initial state', () => {
    let reduced_state = reducers.searchRobots(undefined, {});

    expect(reduced_state).toEqual({ searchField: '' });
  });

  it('should handle CHANGE_SEARCH_FIELD', () => {
    let reduced_state = reducers.searchRobots(
      undefined,
      {
        type: CHANGE_SEARCH_FIELD,
        payload: 'abc',
      }
    );

    expect(reduced_state).toEqual({ searchField: 'abc' });
  });
});

describe('requestRobots', () => {
  let initial_robots_state = {
    isPending: false,
    robots: [],
    error: null,
  };

  it('should return the initial state', () => {
    let reduced_state = reducers.requestRobots(undefined, {});

    expect(reduced_state).toEqual(initial_robots_state);
  });

  it('should handle REQUEST_ROBOTS_PENDING', () => {
    let reduced_state = reducers.requestRobots(
      initial_robots_state,
      { type: REQUEST_ROBOTS_PENDING }
    );

    expect(reduced_state).toEqual({
      isPending: true,
      robots: [],
      error: null,
    });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    let reduced_state = reducers.requestRobots(
      initial_robots_state,
      {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: 123,
            name: 'test',
            email: 'test@gmail.com',
          }
        ]
      }
    );

    expect(reduced_state).toEqual({
      isPending: false,
      robots: [{
        id: 123,
        name: 'test',
        email: 'test@gmail.com',
      }],
      error: null,
    });
  });

  it('should handle REQUEST_ROBOTS_FAILED', () => {
    let reduced_state = reducers.requestRobots(
      initial_robots_state,
      { type: REQUEST_ROBOTS_FAILED, payload: 'Grrrrr...' }
    );

    expect(reduced_state).toEqual({
      isPending: false,
      robots: [],
      error: 'Grrrrr...',
    });
  });
});
