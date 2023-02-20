import CartItem from "./CartItem"

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
