import StoreItem from "./StoreItem"

//All Store Items list model
const StoreItems = ( {
  items,
  itemId,
  qtyToAdd,
  handleItemIdChange,
  handleQtyToAddChange,
  handleAddToCart
} ) => {
  return (
    <div>
      {items.map(
        (item) => (
            <StoreItem key={item.id}
            item={item}
            />
        )
      )}

      
      <form onSubmit={handleAddToCart}>
      <div>
      <label>Item ID: </label>
      <input type="number" value={itemId} min="1" max="5" onChange={handleItemIdChange} />
      </div>
      <div>
      <label>Quantity to add to cart: </label>
      <input type="number" value={qtyToAdd} min="0" onChange={handleQtyToAddChange} />
      <input type="submit" value="Add to Cart" className="btn" />
      </div>
      </form>
    </div>
  )
}

export default StoreItems
