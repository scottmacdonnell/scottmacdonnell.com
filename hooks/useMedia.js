import { useState, useEffect } from 'react'

export default function useMedia(queries, values, defaultValue) {
  let mediaQueryLists

  // Create array of media query lists
  if (typeof window !== 'undefined') {
    mediaQueryLists = queries.map((q) => window.matchMedia(q));
  } else {
    mediaQueryLists = []
  }
  
  // Function that gets value based on matching media query
  const getValue = () => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches)
    return typeof values[index] !== "undefined" ? values[index] : defaultValue
  }

  // State and setter for matched value
  const [value, setValue] = useState(getValue)
  useEffect(
    () => {
      // Event listener callback
      const handler = () => setValue(getValue)

      // Set a listener for each media query with above handler as callback.
      mediaQueryLists.forEach((mql) => mql.addListener(handler))
      
      return () =>
        mediaQueryLists.forEach((mql) => mql.removeListener(handler))
    }, [] // Empty array ensures effect is only run on mount and unmount
  )

  return value
}