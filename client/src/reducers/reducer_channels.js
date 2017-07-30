import { FETCH_CHANNELS, CREATE_CHANNEL } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_CHANNELS:
    console.log('ACTION:',action.payload.data);
    return _.mapKeys(action.payload.data, 'id');
  case CREATE_CHANNEL:
    return _.mapKeys(action.payload.data, 'id');
  default:
    return state;
  }   
}