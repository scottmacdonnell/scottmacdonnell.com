import { useEffect } from 'react'

import useLocalStorage from 'hooks/useLocalStorage'
import useMedia from 'hooks/useMedia'

export const usePrefersDarkMode = () => {
  return useMedia(["(prefers-color-scheme: dark)"], [true], false)
}

export const useDarkMode = () => {
  // Use useLocalStorage hook to persist state through a page refresh.
  const [enabledState, setEnabledState] = useLocalStorage("dark-mode-enabled")
  
  // Check if user has set a browser or OS preference for dark mode.
  const prefersDarkMode = usePrefersDarkMode()

  // If enabledState is defined use it, otherwise fallback to prefersDarkMode.
  const enabled = typeof enabledState !== "undefined" ? enabledState : prefersDarkMode

  // Fire off effect that add/removes dark mode class
  useEffect(
    () => {
      const className = "dark-mode"
      const element = window.document.body
      if (enabled) {
        element.classList.add(className)
      } else {
        element.classList.remove(className)
      }
    },
    [enabled] // Only re-call effect when value changes
  )
  
  return [enabled, setEnabledState]
}