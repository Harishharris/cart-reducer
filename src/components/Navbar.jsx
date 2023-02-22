import "../App.css"
import { useContext } from "react"
import { cartContext } from "../context/cartContext"

export default function () {
  const { state } = useContext(cartContext)
  let total = 0
  state.forEach(item => {
    total += item.amount
  })

  return (
    <nav className='navbar'>
      <div>Redux Toolkit</div>
      <div>{total}</div>
    </nav>
  )
}
