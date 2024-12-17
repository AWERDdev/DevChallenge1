import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import ViewQR from './Pages/ViewQR.jsx';
import { BrowserRouter, Routes, Route } from "react-router";


createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/ViewQRcode' element={<ViewQR />}/>
    </Routes>
  </BrowserRouter>
)
