import {
  CART_ADD_GOOD,
  CART_DELETE_GOOD
} from '../actionTypes'

export function addGood(payload) {
  return {
    type: CART_ADD_GOOD,
    payload: payload
  }
}

export function deleteGood(payload) {
  return {
    type: CART_DELETE_GOOD,
    payload: payload
  }
}
