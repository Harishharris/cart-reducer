import { useContext } from "react"
import "../App.css"
import { cartContext } from "../context/cartContext"

export default function Items() {
  const { state: cartItems, dispatch } = useContext(cartContext)

  let total = 0
  cartItems.forEach(item => {
    total = total + item.price * item.amount
  })
  total = total.toFixed(2)
  if (!cartItems.length) {
    return <h1>Your Bag is Empty</h1>
  }

  return (
    <>
      {cartItems.map(item => (
        <div key={item.id} className='each-phone'>
          <img src={item.img} />
          <p>{item.title}</p>
          <p>{item.price}</p>
          <div className='button'>
            <button
              onClick={() => dispatch({ type: "INCREASE", payload: item.id })}>
              +
            </button>
            <p>{item.amount}</p>
            <button
              onClick={() => dispatch({ type: "DECREASE", payload: item.id })}>
              -
            </button>
          </div>
        </div>
      ))}
      <hr></hr>
      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Clear Cart
      </button>
      <p> Total: {total}</p>
    </>
  )
}
