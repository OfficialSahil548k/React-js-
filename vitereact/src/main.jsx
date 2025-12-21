import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return (
//     <div>
//       <h1>
//         Welcome to My Custom react APP!
//       </h1>
//       <h3>
//         See U Later..... 
//       </h3>
//     </div>
//   )
// }

createRoot(document.getElementById('root')).render(
    // <MyApp />            This is also correct
    <App/>
)
