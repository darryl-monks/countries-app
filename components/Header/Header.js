import styles from './Header.module.scss'
import dynamic from 'next/dynamic'

const ThemeToggle = dynamic(() => import('../ThemeToggle/ThemeToggle'), {
  ssr: false,
});

export default function Header() {
  return (
    <header className={styles['c-site-header']}>
      <h1 className={styles['c-site-header__logo']}>Where in the world?</h1>
      <ThemeToggle />
    </header>
  )
}
