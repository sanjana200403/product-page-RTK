import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Products from '../components/Products'
import { remove } from '../store/cartSlice'

const Cart = () => {
  const selector = useSelector((state)=>state.cart)
  const dispatch = useDispatch()
  const handleRemove =(id)=>{
    dispatch(remove(id))

  }
  return (
    <div className='cart-items'>
      {
        selector.map((item)=>{
          return(
            <div className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-info">
                <h2 className="cart-item-name">{item.title}</h2>
                <p className="cart-item-description">{item.description}</p>
                <p className="cart-item-price">${item.price}</p>
                <button className="cart-item-remove" onClick={()=>{
                  handleRemove(item.id)
                }}>Remove</button>
            </div>
        </div>

          )
        })
      }

    
    </div>
  )
}

export default Cart
