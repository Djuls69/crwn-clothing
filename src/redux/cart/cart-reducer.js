import { cartActionsTypes } from './cart-types'
import { addItemToCart } from './cart-utils'

const initState = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case cartActionsTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case cartActionsTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    default:
      return state
  }
}

export default cartReducer