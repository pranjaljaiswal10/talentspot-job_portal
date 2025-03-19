import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import { Toaster } from './components/ui/sonner'
import { persistStore } from 'redux-persist'

const persistor=persistStore(store)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
   <App/>
   <Toaster/>
   </PersistGate>
   </Provider>
  </StrictMode>,
)
