import { useState } from "react"

//Individual Store Item model
const StoreItem = ( {item} ) => {

  const [image, setImage] = useState(null)

  //Dynamically import the image using the item name
  import(`./images/${item.name}.jpg`).then(image => {
    setImage(image.default)
  })

  return (
    <div className="item">
      {image && <img src={image} alt={item.name} />}
      <h3>{item.name}</h3>
      <p>{item.price}</p>
    </div>
  )
}

export default StoreItem
