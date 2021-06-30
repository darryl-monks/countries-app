import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme)
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light'

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem('theme', activeTheme);
  }, [activeTheme])

  return (
    <button className={`c-theme-toggle c-theme-toggle--${activeTheme}`} onClick={() => setActiveTheme(inactiveTheme)}>Dark Mode</button>
  )
}
