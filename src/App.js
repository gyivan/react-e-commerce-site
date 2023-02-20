import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import AppContent from './components/AppContent';
import LoginPage from './components/LoginPage';

function App() {

  //Display data from backend
  const [storeData, setStoreData] = useState([{}])
  const [cartData, setCartData] = useState([{}])
  const [error, setError] = useState([{}])

  const fetchStoreData = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:5000/api/store-data',
      {headers: {
      'Authorization': 'Basic ' + btoa('admin:secret'),
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
      },
      mode: 'cors'})
      setStoreData(res.data)
      console.log(storeData)
    } catch (error) {
      setError(error)
    }
  }

  const fetchCartData = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:5000/api/cart-data',
      {headers: {
      'Authorization': 'Basic ' + btoa('admin:secret'),
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
      },
      mode: 'cors'})
      setCartData(res.data)
      console.log(storeData)
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    fetchStoreData()
    fetchCartData()
  }, [])

  //Login functionality
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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


  //Add items to cart
  const [qtyToAdd, setQtyToAdd] = useState(0)
  const [itemId, setItemId] = useState(0)
  const handleItemIdChange = event => {
    setItemId(event.target.value)
  }
  const handleQtyToAddChange = event => {
    setQtyToAdd(event.target.value)
  }
  const handleAddToCart = async (event) => {
    event.preventDefault()

    try {
      const res = await axios.post('http://127.0.0.1:5000/api/cart-data', {
      itemId,
      qtyToAdd
      }, {headers: {
        'Authorization': 'Basic ' + btoa('admin:secret'),
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      mode: 'cors'})
    } catch (err) {
      console.error(err)
    }
  }


  return (
    <div>
      { isLoggedIn ? (
        // if isLoggedIn is true, display main content
        <AppContent 
        storeData={storeData}
        cartData={cartData}
        showCart={showCartPage}
        clickCart={clickCart}
        clickShop={clickShop}

        handleItemIdChange={handleItemIdChange}
        handleQtyToAddChange={handleQtyToAddChange}
        handleAddToCart={handleAddToCart}
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
