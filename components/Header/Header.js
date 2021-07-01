import styles from './Header.module.scss'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const ThemeToggle = dynamic(() => import('../ThemeToggle/ThemeToggle'), {
  ssr: false,
});

export default function Header() {
  return (
    <header className={styles['c-site-header']}>
      <h1 className={styles['c-site-header__logo']}>
        <Link href="/">
          <a>Where in the world?</a>
        </Link> 
      </h1>
      <ThemeToggle />
    </header>
  )
}
