import CartPage from "./CartPage";
import StorePage from "./StorePage";

const AppContent = ( {
    storeData,
    cartData,
    showCart,
    clickCart,
    clickShop,

    handleItemIdChange,
    handleQtyToAddChange,
    handleAddToCart
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
    clickCart={clickCart}
    
    handleItemIdChange={handleItemIdChange}
    handleQtyToAddChange={handleQtyToAddChange}
    handleAddToCart={handleAddToCart}
    /> }
    </>
  )
  }

export default AppContent
