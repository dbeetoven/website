import Link from 'next/link'
import { FiMenu } from '@react-icons/all-files/fi/FiMenu';
import styles from './styles.module.scss'

const Navbar = () => {
  return (
    <section>
      <header>
        <nav id="menu" className={styles.navbar}>
          <div className={styles.navBurger}>
          <FiMenu/>         
          </div>
          <Link href="/">
            <a className={styles.siteTitle}>Bitmon Space</a>
          </Link>
          <Link href="/">
            <a className={styles.aboutUS}>About Us</a>
          </Link>
        </nav>
        
      </header>
    </section>
  )
}
export default Navbar
