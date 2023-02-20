import StoreItems from "./StoreItems"
import Header from "./Header"

const StorePage = ( {
    storeData,
    showCart,
    clickCart,

    itemId,
    qtyToAdd,
    handleItemIdChange,
    handleQtyToAddChange,
    handleAddToCart
  } ) => {
    return (
      <div className="container">
        <Header
        title="Shop"
        showCart={showCart}
        clickCart={clickCart} />
        {(typeof storeData === 'undefined') ? (
              <p>Loading...</p>
            ) : (
              <StoreItems
              items={storeData}
              itemId={itemId}
              qtyToAdd={qtyToAdd}
              handleItemIdChange={handleItemIdChange}
              handleQtyToAddChange={handleQtyToAddChange}
              handleAddToCart={handleAddToCart}
              />
            )}
      </div>
    )
  }

export default StorePage
