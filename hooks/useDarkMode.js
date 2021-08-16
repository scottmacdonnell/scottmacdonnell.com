import { useState, useEffect } from 'react'

export const useDarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(false)

  const getTheme = () => {
    useEffect(() => {
      let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
      if(matched)
        setDarkMode(true)
      else
        setDarkMode(false)
    }, []);

    return isDarkMode
  }

  return { getTheme }
}