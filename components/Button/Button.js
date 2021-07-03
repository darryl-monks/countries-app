import styles from './Button.module.scss'
import Link from 'next/link'

export default function Button({url, children}) {
  return (
    <Link href={url}>
      <a className={styles['c-button']}>{children}</a>
    </Link>
  )
}
