import "./App.css"
import Items from "./components/Items"
import Navbar from "./components/Navbar"
import { useReducer } from "react"
import { cartContext } from "./context/cartContext"
import cartItems from "../src/cartItems"

function reducer(state, action) {
  switch (action.type) {
    case "CLEAR_CART":
      return []
    case "INCREASE":
      return state.map(item =>
        item.id === action.payload
          ? { ...item, amount: item.amount + 1 }
          : { ...item }
      )
    case "DECREASE":
      const interState = state.map(item =>
        item.id === action.payload
          ? { ...item, amount: item.amount - 1 }
          : { ...item }
      )
      return interState.filter(item => item.amount > 0)
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, cartItems)
  return (
    <cartContext.Provider value={{ state, dispatch }}>
      <Navbar />
      <Items />
    </cartContext.Provider>
  )
}

export default App
