import {
  COUNT_ADD,
  COUNT_SUB
} from '../actionTypes'


export function addCount(payload) {
  return {
    type: COUNT_ADD,
    payload: payload
  }
}

export function subCount(payload) {
  return {
    type: COUNT_SUB,
    payload: payload
  }
}
