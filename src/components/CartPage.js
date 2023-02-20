import Header from "./Header"

const CartPage = ( {
    showCart,
    clickShop
  } ) => {
    return (
      <div className="container">
        <Header
        title='Cart'
        showCart={showCart}
        clickShop={clickShop} />
      </div>
    )
  }

export default CartPage
