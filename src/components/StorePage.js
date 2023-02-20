import StoreItems from "./StoreItems"
import Header from "./Header"

const StorePage = ( {
    storeData,
    showCart,
    clickCart,

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
              handleItemIdChange={handleItemIdChange}
              handleQtyToAddChange={handleQtyToAddChange}
              handleAddToCart={handleAddToCart}
              />
            )}
      </div>
    )
  }

export default StorePage
