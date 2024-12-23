import './App.css'
import Body from './components/Body'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from './Pages/About';
// import ViewQR from './Pages/ViewQR';
function App() {
  return (
    
    <>
    <div className="shadow">
    <svg
    className="ShadowSvg"
      width="550"
      height="620"
      viewBox="0 0 550 620"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="383.824"
        height="383.824"
        rx="22"
        transform="matrix(0.707309 0.706905 -0.707309 0.706905 278.518 77.3456)"
        fill="url(#paint0_linear_773_2179)"
        fillOpacity="0.1"
      />
      <rect
        width="383.824"
        height="383.824"
        rx="22"
        transform="matrix(0.707309 0.706905 -0.707309 0.706905 271.482 0)"
        fill="url(#paint1_linear_773_2179)"
        fillOpacity="0.1"
      />
      <defs>
        <linearGradient
          id="paint0_linear_773_2179"
          x1="0.0815245"
          y1="0.0815245"
          x2="345.021"
          y2="345.021"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#70A3F3" stopOpacity="0.51" />
          <stop offset="1" stopColor="#4E80EE" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_773_2179"
          x1="0.0815245"
          y1="0.0815245"
          x2="345.021"
          y2="345.021"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#70A3F3" stopOpacity="0.51" />
          <stop offset="1" stopColor="#4E80EE" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>

    </div>
    <div className="Content">
      <Body />
      </div>
    </>

 
  )
  
}

export default App
