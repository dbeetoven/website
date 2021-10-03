import Link from 'next/link'
import styles from './styles.module.scss'

const Header = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.headerTitle}>
          <h1>Bitmon Space Marketplace!</h1>
        </div>

        <div className={styles.links}>
          <Link href="https://t.me/bitmonspace" passHref={true}>
            <button className={styles.headerBTN}>Get Started</button>
          </Link>
          <Link href="https://whitepaper.bitmon.space" passHref={true}>
            <button className={styles.headerBTN}>Whiteparper</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Header
