import { ReactNode } from 'react'
import Navbar from '../Navbar'
import Welcome from '../Welcome'
import styles from './styles.module.scss'


type Props = {
  children?: ReactNode
}
const Layout = ({ children }: Props) => {
  return (
    <main className={styles.main}>
      <Welcome />
      <div className={styles.container}>
        <Navbar />
        {children}
      </div>
    </main>
  )
}

export default Layout
