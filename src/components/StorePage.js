import StoreItems from "./StoreItems"
import Header from "./Header"

const StorePage = ( {
    storeData,
    showCart,
    clickCart,
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
              <StoreItems items={storeData} />
            )}
      </div>
    )
  }

export default StorePage
