import { FETCH_MESSAGES } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_MESSAGES:
    return _.mapKeys(action.payload, 'id');
  default:
    return state;
  }   
}