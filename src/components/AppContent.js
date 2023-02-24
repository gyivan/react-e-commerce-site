import CartPage from "./CartPage";
import StorePage from "./StorePage";

const AppContent = ( {
    storeData,
    cartData,
    showCart,
    clickCart,
    clickShop,

    itemId,
    qtyToAdd,
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
    
    itemId={itemId}
    qtyToAdd={qtyToAdd}
    handleItemIdChange={handleItemIdChange}
    handleQtyToAddChange={handleQtyToAddChange}
    handleAddToCart={handleAddToCart}
    /> }
    </>
  )
  }

export default AppContent
