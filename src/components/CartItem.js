import { useState } from "react"
import { FaTimes } from "react-icons/fa"

const CartItem = ( {item} ) => {

  const [image, setImage] = useState(null)

  // Dynamically import the image using the item name
  import(`./images/${item.name}.jpg`).then(image => {
    setImage(image.default)
  })

  return (
    <div className="item">
      <h3>{item.id}{image && <img src={image} alt={item.name} />}
      {item.name}
      <p>Qty: {item.qtyInCart}</p>
      <FaTimes style={{ color: 'red', cursor: 'pointer'}} />
      </h3>
    </div>
  )
}

export default CartItem
