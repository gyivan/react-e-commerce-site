import { useState } from "react"

//Individual Store Item model
const StoreItem = ( {item,
  handleAddToCart,
  handleItemIdChange,
  handleQtyToAddChange
} ) => {

  const [image, setImage] = useState(null)

  // Dynamically import the image using the item name
  import(`./images/${item.name}.jpg`).then(image => {
    setImage(image.default)
  })

  return (
    <div className={`item ${item.isInCart ? 'inCart' : ''}`}>
      <h3>{image && <img src={image} alt={item.name} />}
      {item.name}
      <p>{item.price}</p>
      </h3>
      <form onSubmit={handleAddToCart}>
      <label for={item.qtyToAdd}>Quantity to add to cart: </label>
      <input type="number" id={item.qtyToAdd} name="quantity" min="0" />
      <input type="submit" value="Add to Cart" className="btn" />
      </form>
    </div>
  )
}

export default StoreItem
