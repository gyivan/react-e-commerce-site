import StoreItem from "./StoreItem"

//All Store Items list model
const StoreItems = ( {
  items,
  handleItemIdChange,
  handleQtyToAddChange,
  handleAddToCart
} ) => {
  return (
    <>
      {items.map(
        (item) => (
            <StoreItem key={item.id}
            item={item}
            handleItemIdChange={handleItemIdChange}
            handleQtyToAddChange={handleQtyToAddChange}
            handleAddToCart={handleAddToCart}
            />
        )
      )}
    </>
  )
}

export default StoreItems
