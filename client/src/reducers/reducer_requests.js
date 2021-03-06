import { FETCH_FRIEND_REQUESTS } from '../actions';
import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
  case FETCH_FRIEND_REQUESTS:
    return _.mapKeys(action.payload.data, 'id');
  default:
    return state;
  }
}