import './App.css';
import axios from 'axios';
import { useState } from 'react';
import StorePage from './components/StorePage';
import CartPage from './components/CartPage';
import LoginPage from './components/LoginPage';

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
    storeData={data}
    showCart={showCart}
    clickCart={clickCart} /> }
    </>
  )
  }

  const data = [
    {
    "id" : 1,
    "name": "Hamburger",
    "price": "$5.00",
    "isInCart": true,
    "qtyInCart": 1
    },
    {
    "id" : 2,
    "name": "French Fries",
    "price": "$6.00",
    "isInCart": false,
    "qtyInCart": 0
    },
    {
    "id" : 3,
    "name": "Ham Sandwich",
    "price": "$5.00",
    "isInCart": false,
    "qtyInCart": 0
    }
  ]

  return (
    <div>

      { isLoggedIn ? (
        // if isLoggedIn is true, display main content
        <AppContent 
        storeData={data}
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
