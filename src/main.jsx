import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import mqtt from "mqtt"

const root = createRoot(document.getElementById('root'))
export const main = () =>
  root.render(
    <StrictMode>
    <App/>
  </StrictMode>,
)
main();
