import CartPage from "./CartPage";
import StorePage from "./StorePage";

const AppContent = ( {
    storeData,
    cartData,
    showCart,
    clickCart,
    clickShop
  } ) => {
  return (
    <>
    { showCart ? 
    <CartPage
    cartData={cartData}
    showCart={showCart}
    clickShop={clickShop} />
    :
    <StorePage
    storeData={storeData}
    showCart={showCart}
    clickCart={clickCart} /> }
    </>
  )
  }

export default AppContent
