import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../Pages/Home/Home'
// import Contact from '../Pages/Contacts/Contact'
import Theme from "../Components/Theme/Theme"
import Header from "../Components/Header/Header"

const router = () => {
  return (
    <BrowserRouter>
    <Header />
    <Theme />
     <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/contact" element={<Contact/>}/> */}
     </Routes>
    </BrowserRouter>
    
  )
}

export default router