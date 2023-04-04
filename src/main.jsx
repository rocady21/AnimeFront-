
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { onLoadLogin } from './onLoadLogin'
import { animeSlice } from './store/Slices/animeSlice/animeSlice'
import { userSlice } from './store/Slices/userSlice/userSlice'
import {store} from './store/store'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = {store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
