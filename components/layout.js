import Navbar from './navbar.js'
import styles from './layout.module.css'

export default function Layout ({ children }) {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
    </div>
  )
}
