import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme)
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light'

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem('theme', activeTheme);
  }, [activeTheme])

  function formattedThemeName() {
    const firstCharacter = inactiveTheme.charAt(0).toUpperCase()
    const restOfWord = inactiveTheme.slice(1)
    return firstCharacter + restOfWord;
  }

  return (
    <button className={`c-theme-toggle c-theme-toggle--${activeTheme}`} onClick={() => setActiveTheme(inactiveTheme)}>{formattedThemeName()} Mode</button>
  )
}
