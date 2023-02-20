import CartItem from "./CartItem"
import { FaTimes } from "react-icons/fa"

const CartItems = ( {items} ) => {

  return (
    <>
      {items.map(
        (item) => (
            <CartItem key={item.id} item={item} />
        )
      )}
    </>
  )
}

export default CartItems
