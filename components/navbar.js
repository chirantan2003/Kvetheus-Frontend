import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar () {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.navbarLogo}>
        <Link href='/'>
          <a>
            Kvetheus
            <span className={styles.span}>.</span>
          </a>
        </Link>
      </h1>
    </nav>
  )
}
