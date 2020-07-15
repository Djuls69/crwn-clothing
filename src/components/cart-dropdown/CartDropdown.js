import React from 'react'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'
import './CartDropdown.scss'

const mapState = state => ({
  cartItems: selectCartItems(state)
})

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>go to checkout</CustomButton>
    </div>
  )
}

export default connect(mapState)(CartDropdown)