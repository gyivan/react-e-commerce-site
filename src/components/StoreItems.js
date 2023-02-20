import StoreItem from "./StoreItem"

//All Store Items list model
const StoreItems = ( {items} ) => {
  return (
    <>
      {items.map(
        (item) => (
            <StoreItem key={item.id} item={item} />
        )
      )}
    </>
  )
}

export default StoreItems
