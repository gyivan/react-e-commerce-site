import Header from "./Header"
import CartItems from "./CartItems"

const CartPage = ( {
    cartData,
    showCart,
    clickShop
  } ) => {
    return (
      <div className="container">
        <Header
        title='Cart'
        showCart={showCart}
        clickShop={clickShop} />
        {(typeof cartData === 'undefined') ? (
              <p>Loading...</p>
            ) : (
              <CartItems items={cartData} />
            )}
      </div>
    )
  }

export default CartPage
