import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BgChanger from './BgChanger'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BgChanger />
  </StrictMode>,
)
