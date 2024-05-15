import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../Pages/Home/Home'
// import Contact from '../Pages/Contacts/Contact'
// import Theme from "../Components/Theme/Theme"

const router = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/contact" element={<Contact/>}/> */}
     </Routes>
    </BrowserRouter>
    
  )
}

export default router