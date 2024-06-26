import React from 'react'
import "./Theme.css"
import { LuSunMoon } from "react-icons/lu";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'


const getLocalStorageTheme = () =>{
  let theme = 'dark-theme';

  if (localStorage.getItem('theme')){
    theme = localStorage.getItem("theme");
  }
  return theme;
}

const Theme = () => {

  const [Theme, setTheme] = useState(getLocalStorageTheme());

  let toggleTheme=()=>{
      if(Theme === 'dark-theme'){
      setTheme('light-theme')
    }else{
      setTheme('light-theme')
      setTheme('dark-theme')
    }
  }

  useEffect(()=>{
    document.documentElement.className = Theme;
    localStorage.setItem('theme', Theme)
  }, [Theme])

  
  return (
    <span className='Bg-toggler' onClick={toggleTheme}>
      <LuSunMoon />
    </span>
  )
}

export default Theme
