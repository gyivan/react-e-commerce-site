import PropTypes from 'prop-types'
import { FaShoppingCart, FaShoppingBag } from "react-icons/fa";

const Header = ( {
    title,
    showCart,
    clickCart,
    clickShop
} ) => {

  return (
    <div className='header'>
      <h1>{title}</h1>
      <h1><FaShoppingCart
      color={showCart ? '#00A36C' : 'black'}
      onClick={clickCart} />
      <FaShoppingBag
      color={showCart ? 'black' : '#00A36C'}
      onClick={clickShop} /></h1>
    </div>
  )
}

Header.defaultProps = {
    title: 'Cart/Main Shop Page Header',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
