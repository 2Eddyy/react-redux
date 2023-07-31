import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import User from './User/User';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import userReducer from './Store/Reducer/Reducer';
function App() {
  const store = createStore(userReducer)
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='user' element={<User />}></Route>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App