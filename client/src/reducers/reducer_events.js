import { CREATE_EVENT, DELETE_EVENT } from '../actions';
import _ from 'loadash';

export default function(state = {}, action) {
  switch (action.type) {
  case CREATE_EVENT:
    return _.mapKeys(action.payload.data, 'id');
  case DELETE_EVENT:
    return _.mapKeys(action.payload.data, 'id');
  default:
    return state;
  }
}