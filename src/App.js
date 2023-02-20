import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import StoreItems from './components/StoreItems';
import LoginPage from './components/LoginPage';
import Header from './components/Header';

function App() {

  //Login functionality
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState([{}])

  const handleUsernameChange = event => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }

  const handleLogin = async event => {
    event.preventDefault()

    try {
      const res = await axios.post('http://127.0.0.1:5000/login', {
        username,
        password
        }, {headers: {
          'Authorization': 'Basic ' + btoa('admin:secret'),
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        mode: 'cors'})

        if (res.status === 200) {
          setIsLoggedIn(true)
        } else {
          setError(true)
        }

    } catch (error) {
      setError(true)
    }

  }

  //Toggle show cart or store pages
  const [showCartPage, setShowCartPage] = useState(false)
  
  const clickCart = event => {
    setShowCartPage(true)
  }

  const clickShop = event => {
    setShowCartPage(false)
  }

  const AppContent = ( {
    storeData,
    showCart,
    clickCart,
    clickShop
  } ) => {
  return (
    <>
    { showCart ? 
    <CartPage
    showCart={showCart}
    clickShop={clickShop} />
    :
    <StorePage
    storeData={storeData}
    showCart={showCart}
    clickCart={clickCart} /> }
    </>
  )
  }

  const CartPage = ( {
    showCart,
    clickShop
  } ) => {
    return (
      <div className="container">
        <Header
        title='Cart'
        showCart={showCart}
        clickShop={clickShop} />
        {/* <img src="images/Hamburger.jpg" alt='Hamburger image' /> */}
      </div>
    )
  }

  const StorePage = ( {
    storeData,
    showCart,
    clickCart
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

  const storeData = [
    {
    "id" : 1,
    "name": "Hamburger",
    "price": 5.00,
    "inCart": false
    },
    {
    "id" : 2,
    "name": "French Fries",
    "price": 6.00,
    "inCart": false
    }
  ]

  return (
    <div>

      { isLoggedIn ? (
        // if isLoggedIn is true, display main content
        <AppContent 
        storeData={storeData}
        showCart={showCartPage}
        clickCart={clickCart}
        clickShop={clickShop}
        />
      ) : (
        // if isLoggedIn is false, display Login Page
        <LoginPage 
        username={username}
        password={password}
        error={error}
        handleUsernameChange={handleUsernameChange}
        handlePasswordChange={handlePasswordChange}
        handleLogin={handleLogin} />
      )

      }
    </div>
  );
}

export default App;
