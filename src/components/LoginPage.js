import React from 'react'

const LoginPage = ( {
  username,
  password,
  error,
  handleUsernameChange,
  handlePasswordChange,
  handleLogin} ) => {
  return (
    <div className="container">
    <header className='header'>
        <h1>Login</h1>
    </header>
        <form className='login-form' onSubmit={handleLogin}>
        <div className='form-control'>
        <label>Username</label>
        <input type='text' placeholder='Type username here' value={username} onChange={handleUsernameChange} />
        </div>
        <div className='form-control'>
        <label>Password</label>
        <input type='password' placeholder='Type password here' value={password} onChange={handlePasswordChange} />
        </div>
        <input type='submit' value='Sign in' className='btn btn-block' />
    </form>
    
    </div>
  )
}

export default LoginPage
