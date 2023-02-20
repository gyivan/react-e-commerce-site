import { useState } from "react"

//Individual Store Item model
const StoreItem = ( {item} ) => {

  const [image, setImage] = useState(null)

  //Dynamically import the image using the item name
  import(`./images/${item.name}.jpg`).then(image => {
    setImage(image.default)
  })

  return (
    <div className={`item ${item.isInCart ? 'inCart' : ''}`}>
      <h3>{image && <img src={image} alt={item.name} />}
      {item.name}
      <p>{item.price}</p>
      </h3>
    </div>
  )
}

export default StoreItem
